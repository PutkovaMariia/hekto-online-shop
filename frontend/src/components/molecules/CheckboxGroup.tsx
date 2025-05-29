interface CheckboxGroupProps {
  label: string;
  options: any[];
  selectedValues: any[];
  onChange: (newSelected: any[]) => void;
  colorClass: string;
  renderOption?: (opt: any) => string;
}

export function CheckboxGroup({
  label,
  options,
  selectedValues,
  onChange,
  renderOption = (option) => String(option),
  colorClass
}: CheckboxGroupProps) {
  const handleChange = (option: any, checked: boolean) => {
    if (checked && !selectedValues.includes(option)) {
      onChange([...selectedValues, option]);
    } else {
      onChange(selectedValues.filter((val) => val !== option));
    }
  };

  return (
    <div className="mb-10">
      <div className="font-sans font-bold text-xl text-black pb-2 border-b border-black w-fit">
        {label}
      </div>
      <div className="flex flex-col gap-4 mt-5 font-lato font-normal text-base text-grey-3 max-h-56 overflow-y-auto">
        {options.map((option, index) => {
          const displayLabel = renderOption(option);
          const isChecked = selectedValues.includes(option);
          return (
            <label key={index} className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleChange(option, e.target.checked)}
                className="peer appearance-none opacity-0 absolute h-0 w-0"
              />
              <span
                className={`size-4 rounded relative flex-shrink-0 transition-colors duration-200 ease-in-out ${colorClass}
                  after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-white-bright after:text-sm after:font-serif
                  peer-checked:after:content-['✓']`}
              ></span>
              <span className="ml-2">{displayLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
