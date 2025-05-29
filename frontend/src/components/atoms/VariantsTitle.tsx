type VariantsTitleProps = {
  title: string;
};

export default function VariantsTitle({ title }: VariantsTitleProps) {
  return <label className="text-grey-3 text-base font-normal">{title}</label>;
}
