import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface VideoModalProps {
  title: string;
  description?: string;
  src: string;
  technologies: string[];
  onClose: () => void;
}

const VideoModal = ({ title, description, src, technologies, onClose }: VideoModalProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="w-full h-full z-50 fixed modal-color top-0 left-0 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl shadow-black/50 animate-slide-up"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative bg-black">
          <video src={src} controls autoPlay className="w-full max-h-[70vh]" />
          <button
            onClick={onClose}
            aria-label={t('line11')}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark-300/80 hover:bg-primary hover:text-dark flex items-center justify-center transition-all duration-300 text-white/80"
          >
            <FaTimes size="16px" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold gradient-text mb-2">{title}</h2>
          {description && (
            <p className="text-white/60 text-sm mb-4 leading-relaxed">{description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
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
    </div>
  );
};

export default VideoModal;
