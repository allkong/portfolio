import Image from 'next/image';

import HeroTitle from '@images/hero-title.svg';

const Hero = () => {
  return (
    <section className="hero-bg flex h-dvh w-full flex-col items-center justify-end bg-cover">
      <HeroTitle className="w-2xs flex-1 sm:w-sm lg:w-lg xl:w-sm" />
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
