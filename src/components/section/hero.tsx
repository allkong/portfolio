import Image from 'next/image';

import HeroTitle from '@images/hero-title.svg';

const Hero = () => {
  return (
    <section className="hero-bg flex h-dvh w-full flex-col items-center justify-end bg-cover">
      <HeroTitle className="w-2xs flex-1 sm:w-md sm:flex-none" />
      <Image
        src="/images/profile.png"
        alt="프로필"
        width={500}
        height={0}
        className="w-96 sm:mt-8"
      />
    </section>
  );
};

export default Hero;
