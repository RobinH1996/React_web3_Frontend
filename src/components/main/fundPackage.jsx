import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Select from 'react-select'
import "./fundPackage.css"
import HDP from "../../assets/images/HDP@2x.png"
import dash_square from "../../assets/images/dash-square.png"
import left_bar from "../../assets/images/left_bar.png"
import right_bar from "../../assets/images/right_bar.png"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class fundPackage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ],
            purchase: false
        }
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handlePurchase = () =>{
        this.setState({ purchase:true });
    }
    handleChange = () =>{
        this.setState({ purchase: false });
    }
    render() {
        const options = [
            { value: '6', label: '6 months' },
            { value: '12.', label: '12 months.' },
            { value: '18', label: '18 months' },
            { value: '24', label: '24 months' }
        ]
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding fund_package_div">
                {!this.state.purchase?
                <div className='row' style={{ marginTop:"50px" }}>
                    <p className='page_title' style={{ fontSize:"16px" }}>Choose a package</p>
                    <div className='col-md-3'>
                        <div className='purchase_div'>
                            <p className='purchase_title'>10,000 to<br/> 99,999 HDP.ф</p>
                            {/* <p className='package_price'>Package price</p>
                            <p className='purchase_hdp'>1% HDP.ф</p> */}
                            <div style={{ display: "flex", marginTop:"30px" }}>
                                <img src={left_bar} alt="left_bar" style={{width:"49%", height:"5px" }} />
                                <img src={right_bar} alt="right_bar" style={{width:"49%", marginLeft:"auto", height:"8px" }} />
                            </div>
                            <p style={{ fontSize:"14px", color:"#8395A1", textAlign:"center", marginTop:"25px" }}>Annual revenue</p>
                            <p className='purchase_hdp'>6%</p>
                            <div className='purchase_btn'>
                                <button className='singInButton activeButton' onClick={this.handlePurchase}>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='purchase_div' style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <p className='purchase_title'>100,000 to<br/> 249,999 HDP.ф</p>
                            {/* <p className='package_price'>Package price</p>
                            <p className='purchase_hdp'>0.80% HDP.ф</p> */}
                            <div style={{ display: "flex", marginTop:"30px" }}>
                                <img src={left_bar} alt="left_bar" style={{width:"49%", height:"5px" }} />
                                <img src={right_bar} alt="right_bar" style={{width:"49%", marginLeft:"auto", height:"8px" }} />
                            </div>
                            <p style={{ fontSize:"14px", color:"#8395A1", textAlign:"center", marginTop:"25px" }}>Annual revenue</p>
                            <p className='purchase_hdp'>9%</p>
                            <div className='purchase_btn'>
                                <button className='singInButton activeButton' onClick={this.handlePurchase}>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='purchase_div' style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <p className='purchase_title'>250,000 to<br/> 499,999 HDP.ф</p>
                            {/* <p className='package_price'>Package price</p>
                            <p className='purchase_hdp'>0.60% HDP.ф</p> */}
                            <div style={{ display: "flex", marginTop:"30px" }}>
                                <img src={left_bar} alt="left_bar" style={{width:"49%", height:"5px" }} />
                                <img src={right_bar} alt="right_bar" style={{width:"49%", marginLeft:"auto", height:"8px" }} />
                            </div>
                            <p style={{ fontSize:"14px", color:"#8395A1", textAlign:"center", marginTop:"25px" }}>Annual revenue</p>
                            <p className='purchase_hdp'>12%</p>
                            <div className='purchase_btn'>
                                <button className='singInButton activeButton' onClick={this.handlePurchase}>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='purchase_div' style={{ marginLeft:"auto" }}>
                            <p className='purchase_title'>500,000<br/> HDP.ф</p>
                            {/* <p className='package_price'>Package price</p>
                            <p className='purchase_hdp'>0.50% HDP.ф</p> */}
                            <div style={{ display: "flex", marginTop:"30px" }}>
                                <img src={left_bar} alt="left_bar" style={{width:"49%", height:"5px" }} />
                                <img src={right_bar} alt="right_bar" style={{width:"49%", marginLeft:"auto", height:"8px" }} />
                            </div>
                            <p style={{ fontSize:"14px", color:"#8395A1", textAlign:"center", marginTop:"25px" }}>Annual revenue</p>
                            <p className='purchase_hdp'>18%</p>
                            <div className='purchase_btn'>
                                <button className='singInButton activeButton' onClick={this.handlePurchase}>Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='purchase_next_div'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='selected_package_title'>Selected package</p>
                            <p className='selected_package_price'>10,000 to 99,999 HDP.ф</p>
                            <div style={{ display: "flex", marginTop:"30px" }}>
                                <img src={left_bar} alt="left_bar" style={{width:"40%", height:"5px" }} />
                                <img src={right_bar} alt="right_bar" style={{width:"40%", height:"8px" }} />
                            </div>
                            <div style={{ width:"80%", display:"flex", marginTop:"25px" }}>
                                <div style={{ width:"50%" }}>
                                    {/* <p style={{ color:"#8395A1" }}>Package price</p> */}
                                    {/* <p className='selected_package_price' style={{ marginTop:"20px" }}>1% HDP.ф</p> */}
                                </div>
                                <div style={{ width:"50%" }}>
                                    <p style={{ color:"#8395A1" }}>Annual revenue</p>
                                    <p className='selected_package_price' style={{ marginTop:"20px" }}>6%</p>
                                </div>
                            </div>
                            <button className='selected_package_change_btn' onClick={this.handleChange}>Change</button>
                        </div>
                        <div className='col-md-6'>
                            <p className='selected_package_title'>Proceed</p>
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Term *</p>
                            <Select options={options} />
                            <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="amount" placeholder='Enter the amount' />
                            <button className='selected_package_change_btn' style={{ backgroundColor:"#2DCCD3", border:"0px", marginTop:"30px" }} onClick={this.handleChange}>Proceed</button>
                        </div>
                    </div>
                </div>
                }
                <div style={{ paddingBottom: "100px", marginTop:'100px' }}>
                    <p className='page_title' style={{ fontSize:"16px" }}>Staking</p>
                    <div className='show_and_search' style={{ marginTop:"30px" }}>
                        <div className='selected_div'>
                            <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                            <select className='select_ele' name="pageItems">
                            <option value="6">6</option>
                            <option value="6">12</option>
                            <option value="6">18</option>
                            <option value="6">24</option>
                            </select>
                        </div>
                        <input type="search" style={{ marginTop:'-38px' }} name="search" className="search_input" placeholder='Search' />
                    </div>
                    <div className='table_responsive'>
                        <table className='table text-center'>
                            <thead>
                            <tr>
                                <th>Coin/token</th>
                                <th>Lock Date</th>
                                <th>Status</th>
                                <th>Staked Amount</th>
                                <th>Interest</th>
                                <th>Earnings</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img src={HDP} alt="HDP" width="30px" /></td>
                                <td>5/26/2022</td>
                                <td>Active</td>
                                <td>1.000 HDP.Ф</td>
                                <td>1%</td>
                                <td>1.010 HDP.Ф</td>
                                <td>Withdraw&nbsp;&nbsp;<img src={dash_square} alt="dash_square" width="15px" /></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Stack spacing={2}>
                        <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                    </Stack>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fundPackage)