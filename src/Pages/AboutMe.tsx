import Lucas from '../assets/Lucas.jpeg';
import { useTranslation } from 'react-i18next';
import HudFrame from '../Components/HudFrame';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 px-6 md:px-16 bg-dark-100">
      <div className="absolute top-0 left-0 w-full section-divider"></div>
      <div className="max-w-6xl mx-auto md:flex items-center gap-16">
        <div className='md:w-[60%] animate-fade-in'>
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t('line3')}</span>
          <h1 className="text-3xl md:text-4xl mt-2 mb-6 font-bold">
            Game <span className="gradient-text">Developer</span>
          </h1>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>{t('line4')}</p>
            <p>{t('line5')}</p>
            <p>{t('line6')}</p>
            <p>{t('line7')}</p>
            <p className="text-primary font-medium">{t('line8')}</p>
          </div>
        </div>
        <div className='md:w-[35%] w-full flex items-center justify-center md:mt-0 mt-10'>
          <HudFrame className="group" cornerClassName="border-primary/50 group-hover:border-primary" size={14}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img className='relative rounded-full md:w-[350px] w-[180px] border-2 border-primary/20 shadow-2xl shadow-black/50' src={Lucas} />
          </HudFrame>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;