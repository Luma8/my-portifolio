import Coffe from '../assets/Cofee.png';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-[#111] md:flex items-center justify-between">
      <div className='md:w-[55%]'>
        <h5 className="text-[15px]">{t('line3')}</h5>
        <h1 className="md:text-[35px] text-[25px] my-3 font-bold">
          Freelancer | Fullstack developer
        </h1>
        <p className=' md:text-[17px] text-[15px]'>
          {t('line4')}
          <br />
          <br />
          {t('line5')}
          <br />
          <br />
          {t('line6')}
          <br />
          <br />
          {t('line7')}
          <br />
          <br />
          {t('line8')}
          <br />
          <br />
          {t('line9')}
        </p>
      </div>
      <div className='md:w-[30%] w-[100%] flex items-center justify-center md:mt-0 mt-5'>
        <img className='rounded-full md:w-[400px] w-[150px] shadow-xl shadow-[#000]' src={Coffe} />
      </div>
    </div>
  )
}
export default AboutMe;