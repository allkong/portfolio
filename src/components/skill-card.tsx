import { ReactNode } from 'react';

interface SkillCardProps {
  children: ReactNode;
  category: string;
  color: string;
}

const SkillCard = ({ children, category, color }: SkillCardProps) => {
  return (
    <div className="space-y-0.5" style={{ color }}>
      <p className="text-xs">{category}</p>
      <div className="flex gap-2 rounded-md p-1.5" style={{ backgroundColor: `${color}33` }}>
        {children}
      </div>
    </div>
  );
};

export default SkillCard;
