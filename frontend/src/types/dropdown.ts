export type DropdownOption = { code: string; label: string };

export type DropdownProps = {
  options: DropdownOption[];
  selected: DropdownOption;
  onSelect: (option: DropdownOption) => void;
};
