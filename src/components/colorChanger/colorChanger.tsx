import { Wheel } from "@uiw/react-color";

type Props = {
  color: string;
  onChange: (color: string) => void;
};

export default function colorChanger({ color, onChange }: Props) {
  return (
    <>
      <Wheel
        className="colorWheel"
        color={color}
        onChange={(color) => {
          onChange(color.hex);
        }}
      />
    </>
  );
}
