// import { useEffect, useState } from 'react';
import HomeImage from '../assets/Home.png';
import { TypeAnimation } from 'react-type-animation';
// import SeuComponente from './componente/componente';
// import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa';
import './styles.css';

const Home = () => {

  // const { t } = useTranslation();

  return (
    <>
      <div className='md:flex flex-wrap items-center justify-between md:px-20 pt-20 px-5 md:pb-0 pb-20'>
        <div className='md:w-[500px] w-[100%]s'>
          <h5 className='font-bold text-[20px]'>Hello</h5>
          <h4 className='text-[#8DA9C4] text-[35px] font-bold mb-0'>I'm Lucas</h4>
          <div className='md:block hidden'>
            <TypeAnimation
              sequence={[
                'Full-Stack Web Developer',
                5000,
                'Game Developer',
                5000,
                'Full-Stack Web Developer',
                5000,
                'Game Developer',
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '40px', display: 'inline-block', fontWeight: 'bold', marginTop: 1, marginBottom: 5 }}
            />
          </div>
          <div className='md:hidden block'>
            <TypeAnimation
              sequence={[
                'Full-Stack Web Developer',
                5000,
                'Game Developer',
                5000,
                'Full-Stack Web Developer',
                5000,
                'Game Developer',
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '25px', display: 'inline-block', fontWeight: 'bold', marginTop: 1, marginBottom: 5, whiteSpace: 'nowrap' }}
            />
          </div>
          {/* <p className='text-[15px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora consequatur beatae eius pariatur quo ratione modi quas tenetur? Enim similique iure pariatur perferendis corrupti culpa ea distinctio vero perspiciatis?
          </p> */}
        </div>
        <img className='w-[500px] md:block hidden' src={HomeImage} />
      </div >
      <div className='justify-center items-center flex pb-20 w-[100%] animate-bounce md:flex hidden'>
        <div className='p-2 bg-[#8DA9C4] rounded-full button-flutter'>
          <FaArrowDown size={'30px'} color={'#111'} />
        </div>
      </div>
    </>
  )
}

export default Home;