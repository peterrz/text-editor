import { useState, useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import {
  ColumnContainer,
  Button,
  ButtonContainer,
  Title,
} from "./contentStyle";
import parse from "html-react-parser";
function Content() {
  const [print, setPrint] = useState(null);
  const componentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("print"))
      setPrint(JSON.parse(localStorage.getItem("print") || ""));
  }, []);
  return (
    <>
      <Title>Content to Print</Title>
      <ColumnContainer>
        <div className="print" ref={componentRef}>
          {print ? (
            <>{parse(print)}</>
          ) : (
            "Go to builder page and save your text..."
          )}
        </div>
      </ColumnContainer>
      <ButtonContainer>
        <ReactToPrint
          trigger={() => (
            <Button
              disableStyle={print ? false : true}
              disabled={print ? false : true}
            >
              Print{" "}
            </Button>
          )}
          content={() => componentRef.current}
        />
      </ButtonContainer>
    </>
  );
}

export default Content;
