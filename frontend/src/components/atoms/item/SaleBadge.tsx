import saleBG from '/assets/icons/saleBG.svg';

export default function SaleBadge() {
  return (
    <div className="absolute top-0 -left-2 z-10">
      <img src={saleBG} alt="Sale" />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 text-white-bright text-sm font-normal">
        Sale
      </p>
    </div>
  );
}
