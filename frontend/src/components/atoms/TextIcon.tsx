import { TextIconProps } from '../../types/textIcon.ts';

export default function TextIcon({ text, icon, position, className }: TextIconProps) {
  return (
    <div className={`flex items-center gap-2 ${position === 'after' ? 'flex-row-reverse' : ''}`}>
      <span
        className={`size-4 mask mask-no-repeat mask-center mask-contain ${className}`}
        style={{
          maskImage: `url('/assets/icons/${icon}.svg')`
        }}
      ></span>
      {text}
    </div>
  );
}
