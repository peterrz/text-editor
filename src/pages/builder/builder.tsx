import React, { useEffect, useState } from "react";
import { MainContainer, ColumnContainer, Title } from "./builderStyle";
import { Material, Wheel } from "@uiw/react-color";
import CustomInput from "../../components/Input/customInput";
function Builder() {
  const [hex, setHex] = useState("#83aee6");
  return (
    <>
      <Title>Builder</Title>
      <MainContainer>
        <ColumnContainer>
          <Wheel
            style={{ width: "100%", alignSelf: "center" }}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
            }}
          />

          <Material
            style={{ width: "12rem", alignSelf: "center" }}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
            }}
          />
          <CustomInput color={hex} />
        </ColumnContainer>
      </MainContainer>
    </>
  );
}

export default Builder;
