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

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center space-y-11 bg-[#F8F8F8] px-5 py-20"
    >
      <SectionTitle title="Skills" />

      <div className="flex max-w-xl flex-wrap justify-center gap-2">
        <SkillCard category="Languages & Frameworks" color="#FFCF4C">
          <JavascriptIcon />
          <TypescriptIcon />
          <ReactIcon />
          <NextJsIcon />
          <VueJsIcon />
        </SkillCard>

        <SkillCard category="UI / Styling" color="#3B89FF">
          <TailwindIcon />
          <EmotionIcon />
          <AntdvIcon />
        </SkillCard>

        <SkillCard category="Testing & DevTools" color="#FF6232">
          <StorybookIcon />
          <MSWIcon />
        </SkillCard>

        <SkillCard category="State & Data" color="#B580FF">
          <ZustandIcon />
          <RecoilIcon />
          <TanstackQueryIcon />
        </SkillCard>

        <SkillCard category="Collaboration" color="#878787">
          <GithubIcon />
          <FigmaIcon />
          <NotionIcon />
          <JiraIcon />
        </SkillCard>
      </div>
    </section>
  );
};

export default Skills;
