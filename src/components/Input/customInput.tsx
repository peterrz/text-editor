import { Input, Text } from "./customInputStyle";

type CustomInputProps = {
  color: string;
};

export default function customInput({ color }: CustomInputProps) {
  return (
    <div>
      <Text>Font Size (*rem)</Text>
      <Input type="number" placeholder="Name" color={color} />
    </div>
  );
}
