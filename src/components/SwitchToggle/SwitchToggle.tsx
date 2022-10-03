import React from "react";
import { CheckBoxWrapper, CheckBoxLabel, CheckBox } from "./switchToggleStyle";

interface Props {
  name: string;
  checked: boolean;
  handleChange: () => void;
}

const SwitchToggle: React.FC<Props> = ({ name, checked, handleChange }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      {name}
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default SwitchToggle;
