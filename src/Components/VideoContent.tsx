import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import videos from "../data/videos.json";
import VideoModal from "./VideoModal";
import HudFrame from "./HudFrame";

interface LocalizedText {
    en: string;
    pt: string;
}

interface VideoProject {
    id: number;
    title: string;
    description?: LocalizedText;
    src: string;
    poster?: string;
    technologies: string[];
}

const getLocalizedDescription = (video: VideoProject, language: string) =>
    video.description?.[language as keyof LocalizedText] ?? video.description?.en;

const VideoContent = () => {
    const { i18n } = useTranslation();
    const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

    return (
        <section id="videos" className="relative py-20 px-6 md:px-16 bg-dark">
            <div className="absolute top-0 left-0 w-full section-divider"></div>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">Showcase</span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        Video <span className="gradient-text">Projects</span>
                    </h1>
                </div>

                {activeVideo && (
                    <VideoModal
                        title={activeVideo.title}
                        description={getLocalizedDescription(activeVideo, i18n.language)}
                        src={activeVideo.src}
                        technologies={activeVideo.technologies}
                        onClose={() => setActiveVideo(null)}
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(videos as VideoProject[]).map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className="group glass rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 hover:border-primary/20"
                        >
                            <HudFrame cornerClassName="border-white/20 group-hover:border-primary" size={12}>
                                <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-dark-300">
                                    <video
                                        src={video.src}
                                        poster={video.poster}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onMouseEnter={(event) => event.currentTarget.play()}
                                        onMouseLeave={(event) => {
                                            event.currentTarget.pause();
                                            event.currentTarget.currentTime = 0;
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-dark shadow-lg">
                                            <FaPlay size="16px" className="ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </HudFrame>
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {video.title}
                                </h2>
                                {getLocalizedDescription(video, i18n.language) && (
                                    <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-2">
                                        {getLocalizedDescription(video, i18n.language)}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {video.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoContent;
