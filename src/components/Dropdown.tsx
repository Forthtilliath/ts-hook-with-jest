type Option = {
  value: string;
  label: string;
};
type Props = {
  options: Option[];
  selectedOption: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

/**
 * Generate a dropdown from an array
 * @param args
 * @param args.options - Table with all `options` of the dropdown.
 * @param args.selectedOption - Table with all `options` of the dropdown.
 * @param args.onChange - Table with all `options` of the dropdown.
 * @returns Select menu
 */
export const Dropdown = ({ options, selectedOption, onChange }: Props) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};
