import Image from 'next/image';
import HeroTitle from './hero-title';

const Hero = () => {
  return (
    <section className="h-screen w-full bg-[url('/images/paper-texture.jpg')] bg-cover pt-14">
      <p>다빈이코드</p>
      <HeroTitle />
      <Image src="/images/profile.png" alt="프로필" width={400} height={0} className="" />
    </section>
  );
};

export default Hero;
