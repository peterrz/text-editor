import { Input, Text } from "./customInputStyle";

type CustomInputProps = {
  fontsize: string;
  color: string;
  onChange: (size: string) => void;
};

export default function customInput({
  fontsize,
  color,
  onChange,
}: CustomInputProps) {
  return (
    <div>
      <Text>Font Size (*rem)</Text>
      <Input
        value={fontsize}
        type="number"
        placeholder="1"
        min="1"
        max="7"
        color={color}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
