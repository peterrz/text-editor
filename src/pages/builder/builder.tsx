import React, { useState } from "react";
import {
  MainContainer,
  ColumnContainer,
  Title,
  ButtonContainer,
  Button,
  FlexContainer,
  Tools,
} from "./builderStyle";
import ColorChanger from "../../components/colorChanger/colorChanger";
import CustomInput from "../../components/Input/customInput";
import ContentEditable from "react-contenteditable";

function Builder() {
  const [hex, setHex] = useState("#83aee6"); //*Hex
  const [fontsize, setFont] = useState("1"); //*rem
  const [html, setHtml] = useState(`<p>This is the Test</p>`);
  const [saveButton, setSaveButton] = useState(`Save`);

  const callback = (size: string) => {
    setFont(size);
    document.execCommand("fontSize", false, size);
  };
  const changeColor = (color: string) => {
    console.log(color);
    setHex(color);
    console.log(color);
    document.execCommand("foreColor", false, color);
  };

  const handleChange = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setHtml(evt.target.value);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("print", JSON.stringify(html));
    setSaveButton("Saved ✔");
    setTimeout(() => {
      setSaveButton("Save");
    }, 2000);
  };

  return (
    <>
      <FlexContainer>
        <Title>Builder</Title>

        <Tools>
          <ColorChanger color={hex} onChange={changeColor} />
          <CustomInput color={hex} fontsize={fontsize} onChange={callback} />
        </Tools>
      </FlexContainer>

      <MainContainer>
        <ContentEditable
          className="editable"
          tagName="pre"
          html={html}
          onChange={handleChange}
        />
        <ColumnContainer>
          <ColorChanger color={hex} onChange={changeColor} />
          <CustomInput color={hex} fontsize={fontsize} onChange={callback} />
        </ColumnContainer>
      </MainContainer>
      <ButtonContainer>
        <Button onClick={saveToLocalStorage}>{saveButton}</Button>
      </ButtonContainer>
    </>
  );
}

export default Builder;
