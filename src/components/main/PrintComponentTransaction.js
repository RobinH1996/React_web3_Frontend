import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import check from "../../assets/images/set.png"

export default function PrintComponentTransaction(props) {
  console.log(props.datas[0].date)
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
          <ComponentToPrint T_date={props.datas} ref={(el) => (componentRef = el)} />
        </div>
      </div>
  );
}

// component to be printed
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ padding:'50px', marginTop:'100px', textAlign:'center' }}>
          <img src={check} alt="check" />
        <h1 style={{ color: "#2DCCD3" }}>Transfer confirmation</h1>
        <div className='transfer_confirm_div1'>
            <div className='transfer_confirm_div2 transfer_confirm_div2_borderTop'>
                <div className='transfer_confirm_div3'>Confirmation number</div>
                <div className='transfer_confirm_div4'>2165261578469832</div>
            </div>
            <div className='transfer_confirm_div2 transfer_confirm_div2_borderTop'>
                <div className='transfer_confirm_div3'>Transaction Type</div>
                <div className='transfer_confirm_div4'>{this.props.T_date[3].type}</div>
            </div>
            <div className='transfer_confirm_div2'>
                <div className='transfer_confirm_div3'>Date of transfer</div>
                <div className='transfer_confirm_div4'>{this.props.T_date[0].date}</div>
            </div>
            <div className='transfer_confirm_div2'>
                <div className='transfer_confirm_div3'>Quantity</div>
                {this.props.T_date[3].type==="Transfer between Accounts"?
                  <div className='transfer_confirm_div4'>{this.props.T_date[1].quantity} {this.props.T_date[2].currency}</div>
                :
                  <div className='transfer_confirm_div4'>{this.props.T_date[7].amount} {this.props.T_date[6].currency_from}</div>
                }
            </div>
            <div className='transfer_confirm_div2'>
                <div className='transfer_confirm_div3'>Balance</div>
                <div className='transfer_confirm_div4'>710.0000 Hdp.ф</div>
            </div>
            {this.props.T_date[3].type==="Transfer between Accounts"?
              <div></div>
            :
              <div className='transfer_confirm_div2'>
                  <div className='transfer_confirm_div3'>Recipient’s email</div>
                  <div className='transfer_confirm_div4'>{this.props.T_date[5].email}</div>
              </div>
            }
            <div className='transfer_confirm_div2'>
                <div className='transfer_confirm_div3'>Sent to wallet address</div>
                <div className='transfer_confirm_div4'>HDP0xb6CE559DC67268b8c4317577346566788347823479436384834349</div>
            </div>
            {this.props.T_date[3].type==="Transfer between Accounts"?
              <div></div>
            :
              <div className='transfer_confirm_div2'>
                  <div className='transfer_confirm_div3'>Message</div>
                  <div className='transfer_confirm_div4'>{this.props.T_date[4].message}</div>
              </div>
            }
        </div>
      </div>
    );
  }
}
