type SectionHeadingProps = {
  heading: string;
};

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center justify-center text-3xl xl:text-5xl font-bold text-black">{heading}</h2>
  );
}
