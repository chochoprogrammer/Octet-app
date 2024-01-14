import React from 'react';

const JoinUs = (props) => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';
  
  return (
    <div id='joinus' className='relative flex flex-col gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] '>
      <h2 className='relative z-[2] text-[2rem] md:text-[3rem] font-bold'>{props.title}</h2>
      {/* BACKGROUND IMAGE */}
      <img src="./assets/images/joinus-bg.png" alt="LIGHTS" className='absolute top-0 right-0 w-full h-full ' />
      {/* CONTENT */}
      <div className={`relative flex flex-col gap-[5rem] items-center w-full ${padding_style}`}>
        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-y-[3rem] md:gap-y-[6rem] gap-[5%]">
          <img src="./assets/images/joinus-1.png" alt="JOIN US" className='w-[90%] lg:w-full h-auto lg:h-[35rem] object-cover' />
          <div className="relative flex flex-col gap-[1.5rem] w-full sm:text-center lg:text-left max-w-[30rm] lg:max-w-[35rem]">
            <h2 className='text-[1.875rem] md:text-[2.25rem] xl:text-[3rem] uppercase'>Join Us before it’s too late!</h2>
            <p className="text-[1.05rem] md:text-[1.25rem] xl:text-[2rem]">Many users are participating in the <span className='text-secondary-dim'>OCTET</span> Malware discovery</p>
            {/* QUOTE ICONS */}
            <img src="./assets/svg/quote-up.svg" alt="Up-quote" className='absolute top-[-4rem] left-0 h-[2.5rem] w-[2.5rem] object-contain' />
            <img src="./assets/svg/quote-up-2.svg" alt="Up-quote" className='absolute bottom-[-4rem] right-0 h-[2.5rem] w-[2.5rem] object-contain' />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-y-[2rem] w-full max-w-[77rem] ">
          <div className="flex flex-col justify-center items-center gap-[0.5rem] bg-white/10 h-[6.5rem] lg:h-[9rem] w-[50%] min-w-[15rem] lg:w-[30%] rounded-[16px]">
            <p className="text-[1rem] lg:text-[1.25rem]">Our Contributors</p>
            <p className='text-[1.5rem] lg:text-[2rem] font-semibold'>15,000 +</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[0.5rem] bg-white/10 h-[6.5rem] lg:h-[9rem] w-[50%] min-w-[15rem] lg:w-[30%] rounded-[16px]">
            <p className="text-[1rem] lg:text-[1.25rem]">A 0ne-year Participants</p>
            <p className='text-[1.5rem] lg:text-[2rem] font-semibold'>15,000 +</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[0.5rem] bg-white/10 h-[6.5rem] lg:h-[9rem] w-[50%] min-w-[15rem] lg:w-[30%] rounded-[16px]">
            <p className="text-[1rem] lg:text-[1.25rem]">Total participants</p>
            <p className='text-[1.5rem] lg:text-[2rem] font-semibold'>350m +</p>
          </div>
        </div>
      </div>
    </div>
  )
}

JoinUs.defaultProps = {
  title: 'Join Us',
  style: ''
};

export default JoinUs;