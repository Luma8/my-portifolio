import projects from "../data/projects.json";

interface Project {
    id: number;
    title: string;
    description?: string;
    videoSrc: string;
    technologies: string[];
}

const VideoContent = () => {
    return (
        <section className="relative py-20 px-6 md:px-16 bg-dark">
            <div className="absolute top-0 left-0 w-full section-divider"></div>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">Showcase</span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        Video <span className="gradient-text">Projects</span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(projects as Project[]).map((project) => (
                        <div
                            key={project.id}
                            className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 hover:border-primary/20"
                        >
                            <div className="relative overflow-hidden">
                                <video
                                    className="w-full h-[200px] object-cover bg-dark-300 transition-transform duration-500 group-hover:scale-105"
                                    src={project.videoSrc}
                                    controls
                                    preload="metadata"
                                    muted
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h2>
                                {project.description && (
                                    <p className="text-white/50 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
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