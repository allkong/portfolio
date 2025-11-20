import SectionTitle from '@/components/section-title';
import DownloadIcon from '@icons/download.svg';
import UserIcon from '@icons/user.svg';
import CakeIcon from '@icons/cake.svg';
import PhoneIcon from '@icons/phone.svg';
import MailIcon from '@icons/mail.svg';

const INFO = [
  { icon: UserIcon, label: '이름', value: '정다빈' },
  { icon: CakeIcon, label: '생년월일', value: '2001.07.02' },
  { icon: PhoneIcon, label: '전화번호', value: '010-2022-7277' },
  { icon: MailIcon, label: '이메일', value: 'allempti@gmail.com' },
];

const INTRO = [
  '안녕하세요, 프론트엔드 개발자 정다빈입니다.',
  '문제를 해결할 때 몰입해 깊이 탐구하는 것을 즐기며, 맡은 일은 끝까지 책임집니다.',
  '열린 소통으로 팀워크를 강화하고 협업 효율을 높입니다.',
];

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center py-20 mx-5 space-y-11">
      <h2 className="text-3xl font-special-elite sm:text-4xl">About me</h2>

      <div>
        <a
          href="/resume_dabin-jeong.pdf"
          download
          aria-label="이력서 다운로드"
          className="bg-bg text-primary hover:bg-primary hover:text-bg flex items-center gap-2.5 rounded-full border px-4 py-2 font-semibold"
        >
          <DownloadIcon aria-hidden className="w-4 sm:w-5" />
          이력서 다운로드
        </a>
      </div>

      <p className="flex flex-col items-center max-w-prose text-sm leading-relaxed text-center opacity-80 text-fg sm:text-base">
        {INTRO.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>

      <div className="p-4 rounded-xl border border-primary bg-primary/8 sm:px-12 sm:py-8">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {INFO.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="flex gap-2 items-center">
                <item.icon aria-hidden className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary sm:font-medium">{item.label}</span>
              </dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
