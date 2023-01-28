import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'
import { Dropdown } from 'semantic-ui-react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import TradingView from "./tradingView.jsx"
import {crypto_currency} from "./components/crypto_currency"
import"./exchange.css"
import exchange_icon from '../../assets/images/exchange_icon.png'
import order1 from '../../assets/images/1.png'
import order2 from '../../assets/images/2.png'
import order3 from '../../assets/images/3.png'
import order4 from '../../assets/images/4.png'
import Delete from '../../assets/images/delete.png'
import Go from '../../assets/images/go.png'

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class exchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'GBP - British Pound',
                    text: 'GBP - British Pound',
                    value: 'GBP - British Pound',
                    image: { avatar: true, src: "currency/GBP.png" },
                }
            ],
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
    render() {
        const options = [
            { value: 'USDT', label: 'USDT' },
            { value: 'HDP.', label: 'HDP' },
            { value: 'BTC', label: 'BTC' }
        ]
        return (
            <div style={{ marginTop: "170px", paddingBottom:"100px" }}>
                <div className='row exchange_div'>
                    <div className='col-md-3'>
                        <Select options={options} className="select_exchange" />
                        <div className='row exchange_content'>
                            <div className='col-md-4 col-sm-4 col-4'>
                                <p className='exchange_title'>Market</p>
                                <p style={{ color:'#00253E', fontSize:'14px', fontWeight:'600' }}>USD / USDT</p>
                                <p style={{ color:'#00253E', fontSize:'14px', fontWeight:'600' }}>EUR / USDT</p>
                                <p style={{ color:'#00253E', fontSize:'14px', fontWeight:'600' }}>GBP / USDT</p>
                                <p style={{ color:'#00253E', fontSize:'14px', fontWeight:'600' }}>HDP / USDT</p>
                            </div>
                            <div className='col-md-4 col-sm-4 col-4'>
                                <p className='exchange_title'>Last Price</p>
                                <p style={{ color:'#002554', fontSize:'14px' }}>1.0000</p>
                                <p style={{ color:'#002554', fontSize:'14px' }}>0.82457</p>
                                <p style={{ color:'#002554', fontSize:'14px' }}>0.708336</p>
                                <p style={{ color:'#002554', fontSize:'14px' }}>0.3681</p>
                            </div>
                            <div className='col-md-4 col-sm-4 col-4'>
                                <p className='exchange_title'>Change (24h)</p>
                                <p className='currency_minus'>-0.15%</p>
                                <p className='currency_minus'>-0.15%</p>
                                <p className='currency_minus'>-0.1%</p>
                                <p className='currency_plus'>+8.30%</p>
                            </div>
                        </div>
                        <div className='mobile_convert_div' style={{ marginTop: '410px' }}>
                            <p style={{ color:'#002554', fontSize:'18px', fontWeight:'700', textAlign:'center' }}>Convert</p>
                            <p className='loginTitle' style={{ marginTop:"35px", color: "#002554" }}>Convert from *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <img className='exchange_icon' src={exchange_icon} alt="exchange_icon" />
                            <p className='loginTitle' style={{ marginTop:"73px", color: "#002554" }}>Convert to *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"65px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="nickName" placeholder='Enter the amount' />
                            <p style={{ color:"#999999", marginTop:"25px" }}><span>Exchange Rate</span><span style={{ float:"right" }}>0.706601 GBP</span></p>
                            <p style={{ color:"#002554", marginTop:"10px" }}><span>Amount</span><span style={{ float:"right" }}>8,490.83 USD</span></p>
                            <button className='singInButton activeButton' style={{ marginTop:"30px" }}>Convert</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        {/* <div className='row'>
                            <div className='col-md-2 col-sm-2'><p style={{ color:'#002554', fontSize:'16px', fontWeight:'600' }}>BTC/USDT</p></div>
                            <div className='col-md-2 col-sm-2'><p className='currency_minus' style={{ fontSize:'13px' }}>39700.08 <br/> <span className='currency_plus'>=39684.11 USD</span></p></div>
                            <div className='col-md-2 col-sm-2'><p style={{ fontSize:'13px', color:'#696B6C' }}>Change <br/> <span className='currency_minus'>-3.97%</span></p></div>
                            <div className='col-md-2 col-sm-2'><p style={{ fontSize:'13px', color:'#696B6C' }}>24HHigh <br/> <span className='currency_plus'>41599.22</span></p></div>
                            <div className='col-md-2 col-sm-2'><p style={{ fontSize:'13px', color:'#696B6C' }}>24HLow <br/> <span className='currency_plus'>38999.14</span></p></div>
                            <div className='col-md-2 col-sm-2'><p style={{ fontSize:'13px', color:'#696B6C' }}>Volume <br/> <span className='currency_plus'>3179.983211BTC</span></p></div>   
                        </div> */}
                        <div className='mobile_tradingView'>
                            <TradingView />
                        </div>
                        <p style={{ color:'#002554', fontSize:'18px', fontWeight:'700', textAlign:'center', marginTop:'540px' }}>Buying and selling</p>
                        <div className='exchange_buy_sell'>
                            <div style={{ marginTop:'75px' }}>
                                <button className='add_funds_btn buy_sell_btn active_add_funds_btn'>↓ Buy</button>
                                <button className='add_funds_btn buy_sell_btn transfer_btn' style={{ marginLeft: '10%' }}>↑ Sell</button>
                            </div>
                            <p className='loginTitle' style={{ marginTop:"20px", color: "#002554" }}>Price type *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p className='loginTitle' style={{ marginTop:"65px", color: "#002554" }}>Amount *</p>
                            <input className='inputStyle' type="text" name="nickName" placeholder='Enter the amount' />
                            <p className='loginTitle' style={{ marginTop:"20px", color: "#002554" }}>Settlement With *</p>
                            <Dropdown style={{ marginRight:"0px" }}
                                placeholder='Select'
                                fluid
                                selection
                                options={crypto_currency}
                                defaultValue={this.state.selected}
                            />
                            <p style={{ color:"#999999", marginTop:"85px" }}><span>Trade Price</span><span style={{ float:"right" }}>0.00</span></p>
                            <p style={{ color:"#002554", marginTop:"10px" }}><span>Amount</span><span style={{ float:"right" }}>- -</span></p>
                            <button className='singInButton activeButton' style={{ marginTop:"30px" }}>Submit</button>
                        </div>
                        
                    </div>
                    <div className='col-md-3 mobile_orders'>
                        <div style={{ display:'flex', width:'100%' }}>
                            <p style={{ color:'#002554', fontSize:'18px', fontWeight:'700' }}>Orders</p>
                            <div style={{ marginLeft: 'auto' }}>
                                <img className='order_icon selected_order_icon' src={order1} alt="order1" />
                                <img className='order_icon' src={order2} alt="order2" />
                                <img className='order_icon' src={order3} alt="order3" />
                                <img className='order_icon' src={order4} alt="order4" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-4' style={{ padding:'0px' }}>
                                <p className='order_title'>Price(USDT)</p>
                                <div>
                                    <p style={{ color:'#FFA300' }}>40066.58</p>
                                    <p style={{ color:'#FFA300' }}>40066.58</p>
                                    <p style={{ color:'#FFA300' }}>40066.58</p>
                                    <p style={{ color:'#FFA300' }}>40066.58</p>
                                    <p style={{ color:'#FFA300' }}>40066.58</p>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4 col-4' style={{ textAlign:'center', padding:'0px' }}>
                                <p className='order_title'>Vol. (BTC)</p>
                                <div>
                                    <p style={{ color:'#002554' }}>0.001187</p>
                                    <p style={{ color:'#002554' }}>0.001187</p>
                                    <p style={{ color:'#002554' }}>0.001187</p>
                                    <p style={{ color:'#002554' }}>0.001187</p>
                                    <p style={{ color:'#002554' }}>0.001187</p>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4 col-4' style={{ textAlign:'right', padding:'0px' }}>
                                <p className='order_title'>Total</p>
                                <div>
                                    <p style={{ color:'#002554' }}>0.2294</p>
                                    <p style={{ color:'#002554' }}>0.2294</p>
                                    <p style={{ color:'#002554' }}>0.2294</p>
                                    <p style={{ color:'#002554' }}>0.2294</p>
                                    <p style={{ color:'#002554' }}>0.2294</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='exchange_div' style={{ paddingBottom: "100px", paddingTop:'100px' }}>
                    <div style={{ display:'flex' }}>
                        <p className='page_title selected_order' style={{ fontSize:"16px" }}>Open Orders</p>
                        <p className='page_title unselected_order' style={{ fontSize:"16px", marginLeft:'80px' }}>Completed Orders</p>
                    </div>
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
                                    <th></th>
                                    <th>Date</th>
                                    <th>Coin/token</th>
                                    <th>Quantity</th>
                                    <th>Trade Type</th>
                                    <th>Rate</th>
                                    <th>Settlement With</th>
                                    <th>Status</th>
                                    <th>Settlement With</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Buy</td>
                                    <td>05/05/20222</td>
                                    <td>HDP.Ф</td>
                                    <td>800 Hdp.ф</td>
                                    <td>Market</td>
                                    <td></td>
                                    <td>USD - Dollar</td>
                                    <td>Open</td>
                                    <td>05/05/2022</td>
                                    <td> <img src={Delete} width='18px' alt="delete_icon" />&nbsp;&nbsp;&nbsp;&nbsp; <img src={Go} width='18px' alt="go_icon" /> </td>
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

export default connect(mapStateToProps, mapDispatchToProps)(exchange);