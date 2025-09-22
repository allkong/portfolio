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
    <section id="about" className="mx-5 flex flex-col items-center justify-center space-y-11 py-20">
      <SectionTitle title="About me" />

      <div>
        <a
          href="/resume_dabin-jeong.pdf"
          download
          aria-label="이력서 다운로드"
          className="bg-primary text-bg hover:bg-bg hover:text-primary flex items-center gap-2.5 rounded-full border px-4 py-2 font-medium"
        >
          <DownloadIcon aria-hidden className="w-4 sm:w-5" />
          이력서 다운로드
        </a>
      </div>

      <p className="text-fg flex max-w-prose flex-col items-center text-center text-sm leading-relaxed opacity-80 sm:text-base">
        {INTRO.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>

      <div className="border-primary bg-primary/8 rounded-xl border p-4 sm:px-12 sm:py-8">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {INFO.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="flex items-center gap-2">
                <item.icon aria-hidden className="text-primary h-4 w-4" />
                <span className="text-primary font-semibold sm:font-medium">{item.label}</span>
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
