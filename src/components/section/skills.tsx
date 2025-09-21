import SectionTitle from '@/components/section-title';
import SkillCard from '@/components/skill-card';

import JavascriptIcon from '@icons/skills/javascript.svg';
import TypescriptIcon from '@icons/skills/typescript.svg';
import ReactIcon from '@icons/skills/react.svg';
import NextJsIcon from '@icons/skills/next-js.svg';
import VueJsIcon from '@icons/skills/vue-js.svg';

import TailwindIcon from '@icons/skills/tailwind-css.svg';
import EmotionIcon from '@icons/skills/emotion.svg';
import AntdvIcon from '@icons/skills/ant-design-vue.svg';

import StorybookIcon from '@icons/skills/storybook.svg';
import MSWIcon from '@icons/skills/msw.svg';

import ZustandIcon from '@icons/skills/zustand.svg';
import RecoilIcon from '@icons/skills/recoil.svg';
import TanstackQueryIcon from '@icons/skills/tanstack-query.svg';

import GithubIcon from '@icons/skills/github.svg';
import FigmaIcon from '@icons/skills/figma.svg';
import NotionIcon from '@icons/skills/notion.svg';
import JiraIcon from '@icons/skills/jira.svg';

const SKILL_GROUPS = [
  {
    category: 'Languages & Frameworks',
    color: '#FFCF4C',
    icons: [
      { Icon: JavascriptIcon, name: 'JavaScript' },
      { Icon: TypescriptIcon, name: 'TypeScript' },
      { Icon: ReactIcon, name: 'React' },
      { Icon: NextJsIcon, name: 'Next.js' },
      { Icon: VueJsIcon, name: 'Vue.js' },
    ],
  },
  {
    category: 'UI / Styling',
    color: '#3B89FF',
    icons: [
      { Icon: TailwindIcon, name: 'Tailwind CSS' },
      { Icon: EmotionIcon, name: 'Emotion' },
      { Icon: AntdvIcon, name: 'Ant Design Vue' },
    ],
  },
  {
    category: 'Testing & DevTools',
    color: '#FF6232',
    icons: [
      { Icon: StorybookIcon, name: 'Storybook' },
      { Icon: MSWIcon, name: 'MSW (Mock Service Worker)' },
    ],
  },
  {
    category: 'State & Data',
    color: '#B580FF',
    icons: [
      { Icon: ZustandIcon, name: 'Zustand' },
      { Icon: RecoilIcon, name: 'Recoil' },
      { Icon: TanstackQueryIcon, name: 'TanStack Query' },
    ],
  },
  {
    category: 'Collaboration',
    color: '#878787',
    icons: [
      { Icon: GithubIcon, name: 'GitHub' },
      { Icon: FigmaIcon, name: 'Figma' },
      { Icon: NotionIcon, name: 'Notion' },
      { Icon: JiraIcon, name: 'Jira' },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center space-y-11 bg-[#F8F8F8] py-20"
    >
      <SectionTitle title="Skills" />

      <div className="flex max-w-xl flex-wrap justify-center gap-2">
        {SKILL_GROUPS.map(({ category, color, icons }) => (
          <SkillCard key={category} category={category} color={color}>
            {icons.map(({ Icon, name }) => (
              <div
                key={name}
                tabIndex={0}
                aria-describedby={`${name}-tooltip`}
                className="group relative inline-flex"
              >
                <Icon aria-label={name} className="block" />

                <span
                  id={`${name}-tooltip`}
                  role="tooltip"
                  className="bg-fg/50 text-bg pointer-events-none invisible absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-full px-2 text-sm whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100"
                >
                  {name}
                </span>
              </div>
            ))}
          </SkillCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
