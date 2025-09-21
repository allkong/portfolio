import Image from 'next/image';

import HeroTitle from '@images/hero-title.svg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-bg flex h-dvh w-full flex-col items-center justify-end bg-cover"
    >
      <HeroTitle className="group max-w-2xs flex-1 sm:max-w-sm lg:max-w-lg xl:max-w-sm 2xl:max-w-md [&_g]:[transform-origin:center] [&_g]:transform [&_g]:transition-transform [&_g]:duration-200 [&_g]:ease-out [&_g]:[transform-box:fill-box] motion-reduce:[&_g]:transition-none [&_g:hover]:-translate-y-4" />
      <div className="relative flex max-h-3/5 w-full items-center justify-center">
        <Image
          src="/images/profile.png"
          alt="프로필"
          width={1200}
          height={0}
          className="h-auto max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
