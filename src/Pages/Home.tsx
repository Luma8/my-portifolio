import { useEffect, useState } from 'react';
import HomeImage from '../assets/Home.png';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa';
import { SiUnity, SiUnrealengine, SiCsharp, SiCplusplus, SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';
import CVDownload from '../Components/CVDownload';
import HudFrame from '../Components/HudFrame';
import './styles.css';

const skills = [
  { icon: SiUnity, label: 'Unity', level: 90 },
  { icon: SiUnrealengine, label: 'Unreal Engine', level: 70 },
  { icon: SiCsharp, label: 'C#', level: 85 },
  { icon: SiCplusplus, label: 'C++', level: 65 },
  { icon: SiReact, label: 'React', level: 90 },
  { icon: SiNodedotjs, label: 'Node.js', level: 80 },
  { icon: SiTypescript, label: 'TypeScript', level: 75 },
];

const Home = () => {

  const { t } = useTranslation();
  const [statsReady, setStatsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center relative overflow-hidden'>
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className='md:flex flex-wrap items-center justify-between md:px-20 px-6 relative z-10'>
          <div className='md:w-[550px] w-full animate-fade-in'>
            <span className='inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4'>
              {t('line1')} 👋
            </span>
            <h1 className='gradient-text text-4xl md:text-5xl font-extrabold mb-2 leading-tight'>{t('line2')}</h1>
            <div className='h-16 md:h-20 flex items-center'>
              <TypeAnimation
                sequence={[
                  'Game Developer',
                  4000,
                  'Full-Stack Software Engineer',
                  4000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-4xl font-bold text-white/80"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#about" className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-dark font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5">
                {t('line3')}
              </a>
              <a href="#videos" className="px-6 py-3 rounded-xl border border-white/10 text-white/70 font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300">
                {t('line10')}
              </a>
              <CVDownload />
            </div>
            <div className="mt-10 max-w-md">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
                Skill Tree
              </span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {skills.map(({ icon: Icon, label, level }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-xs font-semibold text-white/70">
                        <Icon size="14px" className="text-primary" />
                        {label}
                      </span>
                      <span className="text-[11px] font-mono text-primary/70">{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: statsReady ? `${level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='animate-float hidden md:block'>
            <HudFrame cornerClassName="border-primary/40" size={20}>
              <img className='w-[450px] drop-shadow-2xl' src={HomeImage} />
            </HudFrame>
          </div>
        </div>

        <div className='justify-center items-center flex mt-12 w-full animate-bounce md:flex hidden'>
          <a href="#about" className='p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300'>
            <FaArrowDown size={'20px'} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home;