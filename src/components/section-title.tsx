interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="font-special-elite text-3xl sm:text-4xl">{title}</h2>;
};

export default SectionTitle;
