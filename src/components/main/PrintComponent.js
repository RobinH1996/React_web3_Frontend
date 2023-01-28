import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button className="print">Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
  );
}

// component to be printed
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ padding:'50px', marginTop:'100px' }}>
          <div style={{ display:'flex' }}>
              <p>hedpay@mail.com</p>
              <p style={{ marginLeft:'auto' }}>14:50</p>
          </div>
          <div className='came_message'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printing and typesetting …
          </div>
      </div>
    );
  }
}
