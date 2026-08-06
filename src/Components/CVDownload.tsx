import { useEffect, useRef, useState } from 'react';
import { FaDownload, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

interface CVDownloadProps {
  compact?: boolean;
}

const CVDownload = ({ compact = false }: CVDownloadProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t('downloadCV')}
        className={
          compact
            ? 'flex items-center justify-center w-9 h-9 rounded-xl glass social-link hover:border-primary/30 transition-all duration-300'
            : 'px-6 py-3 rounded-xl border border-white/10 text-white/70 font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300 flex items-center gap-2'
        }
      >
        <FaDownload size={compact ? '14px' : '13px'} />
        {!compact && <span>{t('downloadCV')}</span>}
        {!compact && (
          <FaChevronDown
            size="10px"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-60 glass rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-50 animate-fade-in">
          <a
            href="/resume/Lucas_Matheus_Resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <span className="fi fi-us rounded-sm"></span>
            {t('downloadCVEnglish')}
          </a>
          <div className="h-px bg-white/10"></div>
          <a
            href="/resume/Lucas_Matheus_Currículo.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <span className="fi fi-br rounded-sm"></span>
            {t('downloadCVPortuguese')}
          </a>
        </div>
      )}
    </div>
  );
};

export default CVDownload;
