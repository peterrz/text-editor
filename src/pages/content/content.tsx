import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Content() {
  const componentRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <p>Hello</p>
      </div>
    </div>
  );
}

export default Content;
