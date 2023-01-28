import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import { Doughnut, Chart } from "react-chartjs-2";
import QRCode from 'react-google-qrcode';
import { SET_AUTH } from '../../constants/actionTypes';
import "./wallet.css"
import HDP from "../../assets/images/HDP.png"
import HDP_B from "../../assets/images/current/HDP_B.png"
import BTC from "../../assets/images/BTC.png"
import ETH from "../../assets/images/ETH.png"
import USDT from "../../assets/images/USDT.png"
import EUR from "../../assets/images/EUR.png"
import USD from "../../assets/images/USD.png"
import GBP from "../../assets/images/GBP.png"
import CAD from "../../assets/images/CAD.png"
import refresh from "../../assets/images/refresh.svg"
import increase from "../../assets/images/increase.png"
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import StakeTerminal from './components/stake_terminal.js';

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }};
  
const mapDispatchToProps = dispatch => ({
    setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Wallet total($)',
                data: [4000, 3200, 10000, 900, 290, 1900, 2200, 90, 12000, 700, 190, 5000, 1300, 9000, 170, 200, 700, 5000],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                forecastDataPoints: {
                    count: 7
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                    tickAmount: 12,
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    style: {
                        fontSize: "16px",
                        color: '#2DCCD3'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [ '#2DCCD3'],
                        shadeIntensity: 2,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [100, 100, 100, 100]
                    },
                },
                yaxis: {
                    min: 0,
                    max: 15000
                }
            },
            transaction_state:"state",
            wallet_detail:false,
            wallet_name:'',
            staking_terminal:false
        };
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleWalletDetail = (key) =>{
        this.setState({ wallet_detail:true, wallet_name:key })
    }
    handleCloseDetails = () =>{
        this.setState({ wallet_detail: false, wallet_name:"" })
    }
    handleTransactionState=(key)=>{
        this.setState({ transaction_state:key });
    }
    navTo = (to) => {
        if(to==="staking"){
            this.setState({ wallet_detail: false, wallet_name:"", staking_terminal:true });
        }
        else{
            this.props.history.push("/" + to);
        }
    }

    render() {
        const showData = "vinod";
        const data = {
            labels: ["Withdraw", "Deposit", "Reward", "Holding", "Pending"],
            datasets: [
                {
                data: [5545, 5545, 5545, 5545, 5545],
                backgroundColor: ["#EB5757", "#9B51E0", "#1B6AC6", "#219653", "#F2C94C"],
                hoverBackgroundColor: ["#EB5757", "#9B51E0", "#1B6AC6", "#219653", "#F2C94C"],
                borderWidth: 0
                }
            ],
            text: showData
        };
        Chart.pluginService.register({
            beforeDraw: function (chart) {
                var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
                ctx.restore();
                var fontSize = (height / 160).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "top";
                var text = "Total : 5 5445 $",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        });
        const options = {
            responsive: true,
            cutoutPercentage: 85,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: "top",
                usePointStyle: "true",
                labels: {
                fontSize: 12,
                padding: 25,
                fontColor: "#6D7278",
                fontFamily: "kanit light"
                }
            }
        };
        const { RangePicker } = DatePicker;
        const onChange = (value,dateString,) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
        };

        const onOk = (value) => {
            console.log('onOk: ', value);
        };
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                {!this.state.wallet_detail && !this.state.staking_terminal?
                <div className='wallet_div'>
                    <p className='wallet_left_title'>Wallet total</p>
                    <div className='wallet_right_title'>
                        <p className='wallet_amount'>11,139.46 USD</p>
                        <p className='wallet_updated_date'>Last updated Nov 14, 2022, 12:00</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 padding_left_none'>
                            <div className='wallet_hdp'>
                                <div className='wallet_left_div' onClick={()=>this.handleWalletDetail("HDP")}>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={HDP} alt="HDP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>9,768.60 Hdp.ф</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" /> 1 Hdp = 0,2137 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_btc'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={BTC} alt="BTC" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>0,060 BTC</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>2,445.01 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 BTC = 0,0407 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_eth'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={ETH} alt="ETH" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>1.00 ETH</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>2,559.34 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 ETH = 2,5685 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 padding_right_none mobile_padding_left mobile_padding_right'>
                            <div className='wallet_usdt'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={USDT} alt="USDT" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>560.00 USDT</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>560.36 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 USDT = 1,0012 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: "24px" }}>
                        <div className='col-md-3 padding_left_none mobile_padding_left'>
                            <div className='wallet_hdp'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={EUR} alt="EUR" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>250 EUR</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>301.79 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 EUR = 0,8245 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_btc'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={USD} alt="USD" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>550.00 USD</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 USD = 0,0037 Hdp</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mobile_padding_left'>
                            <div className='wallet_eth'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={GBP} alt="GBP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>800 GBP</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>1,125.26 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" />1 GBP = 0,7083 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 padding_right_none mobile_padding_left mobile_padding_right'>
                            <div className='wallet_usdt'>
                                <div className='wallet_left_div'>
                                    <div style={{ display:"flex", width: "100%" }}>
                                        <div>
                                            <img className='selected_wallet_img' src={CAD} alt="HDP" />
                                        </div>
                                        <div style={{ marginLeft:"14px" }}>
                                            <p className='selected_wallet_amount'>900 CAD</p>
                                            <p className='selected_wallet_amount' style={{ color: "#999999" }}>3,597.70 USD</p>
                                        </div>
                                    </div>
                                    <p className='selected_wallet_amount' style={{ color: "#999999", marginTop: "25px" }}>Rate</p>
                                    <p className='selected_wallet_amount' style={{ color: "#999999" }}> <img src={increase} alt="increase" width="8px" height="5px" /> 1 CAD = 0,2137 USD</p>
                                </div>
                                <div className='wallet_right_div'>
                                    <img className='refresh_icon' src={refresh} alt="refresh" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chart_div'>
                        <div className='chart_head'>
                        <p className='chart_title'>Show the chart</p>
                        <p className='chart_title chart_title_wallet'>Wallet total</p>
                        </div>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                    </div>
                </div>
                :
                this.state.wallet_detail && !this.state.staking_terminal?
                <div className='wallet_details'>
                    <div style={{ display:'flex' }}>
                        <p className='wallet_detail_title'>Wallet Details</p>
                        <span className="close" onClick={this.handleCloseDetails} style={{ marginLeft:'auto', marginTop:'-23px' }} >&times;</span>
                    </div>
                    <div className='table_responsive_div'>
                        <table className="table" style={{ marginTop:'20px' }}>
                            <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Currency</th>
                                    <th>Deposit</th>
                                    <th>Withdraw</th>
                                    <th>Pending</th>
                                    <th>Holding</th>
                                    <th>Reward</th>
                                    <th>Balance</th>
                                    <th>Current Value</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={HDP} alt="hdp" style={{ width:'30px' }} /></td>
                                    <td>HDP</td>
                                    <td>30.0233</td>
                                    <td>7.0234</td>
                                    <td>1.1233</td>
                                    <td>30.0233</td>
                                    <td>1.0233</td>
                                    <td>3.0233 HDP</td>
                                    <td>32123.1231 $</td>
                                    <td><button className='detail_button' onClick={()=>this.navTo("transaction")}>Purchase</button></td>
                                    <td><button className='detail_button' onClick={()=>this.navTo("transaction")}>Withdraw</button></td>
                                    <td><button className='detail_button' onClick={()=>this.navTo("transaction")}>Transfer</button></td>
                                    <td><button className='detail_button' onClick={()=>this.navTo("staking")}>Staking</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row wallet_detail_content' style={{ marginTop:'50px' }}>
                        <div className='col-md-5 wallet_available_balance'>
                            <div className='table_responsive_div'>
                                <table className="table" style={{ marginTop:'20px' }}>
                                    <thead>
                                        <tr>
                                            <th>Available Balance</th>
                                            <th className='text-center'>At 31 Oct 2022</th>
                                            <th>5540.03 HDP</th>
                                            <th>250.2 USD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Deposit</td>
                                            <td>
                                                <div className='balance_div'>
                                                    <div className='total_balance'>
                                                        <div className='current_balance'></div>
                                                    </div>
                                                    <p className='balance_text'>100%</p>
                                                </div>
                                            </td>
                                            <td>0.03 HDP</td>
                                            <td>250.2 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Pending</td>
                                            <td>
                                                <div className='balance_div'>
                                                    <div className='total_balance'>
                                                        <div className='current_balance'></div>
                                                    </div>
                                                    <p className='balance_text'>100%</p>
                                                </div>
                                            </td>
                                            <td>0.03 HDP</td>
                                            <td>250.2 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Withdraw</td>
                                            <td>
                                                <div className='balance_div'>
                                                    <div className='total_balance'>
                                                        <div className='current_balance'></div>
                                                    </div>
                                                    <p className='balance_text'>100%</p>
                                                </div>
                                            </td>
                                            <td>0.03 HDP</td>
                                            <td>250.2 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Holding</td>
                                            <td>
                                                <div className='balance_div'>
                                                    <div className='total_balance'>
                                                        <div className='current_balance'></div>
                                                    </div>
                                                    <p className='balance_text'>100%</p>
                                                </div>
                                            </td>
                                            <td>0.03 HDP</td>
                                            <td>250.2 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-md-3 balance_chart'>
                            <div className='balance_chart_title'>
                                <p>Balance</p>
                                <p style={{ marginLeft:'120px' }}>HDP</p>
                                <p style={{ marginLeft:'45px' }}>Date</p>
                            </div>
                            <p className='balance_date'>31/10/2022</p>
                            <div>
                                <Doughnut data={data} options={options} height={250} />
                            </div>
                            <div className='row chart_details'>
                                <div className='col-md-6'>
                                    <div className='chart_detail'>
                                        <p className='deposit_title'>Deposit</p>
                                        <span className='deposit_color'></span>
                                        <p className='deposit_amount'>5545$</p>
                                    </div>
                                    <div className='chart_detail'>
                                        <p className='deposit_title'>Pending</p>
                                        <span className='deposit_color' style={{ backgroundColor:'#F2C94C' }}></span>
                                        <p className='deposit_amount'>5545$</p>
                                    </div>
                                    <div className='chart_detail'>
                                        <p className='deposit_title'>Withdraw</p>
                                        <span className='deposit_color' style={{ backgroundColor:'#EB5757', marginLeft:'8px' }}></span>
                                        <p className='deposit_amount'>5545$</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='chart_detail'>
                                        <p className='deposit_title'>Holding</p>
                                        <span className='deposit_color' style={{ backgroundColor:'#219653' }}></span>
                                        <p className='deposit_amount'>5545$</p>
                                    </div>
                                    <div className='chart_detail'>
                                        <p className='deposit_title'>Reward</p>
                                        <span className='deposit_color' style={{ backgroundColor:'#1B6AC6', marginLeft:'19px' }}></span>
                                        <p className='deposit_amount'>5545$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 wallet_address_detail_content'>
                            <div className='wallet_address_detail'>
                                <p className='wallet_detail_address_title'>Address</p>
                                <p className='wallet_detail_address_text'>0xEed6da5a6dCCb5F226b0B2002942a94Ba140b724</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <QRCode
                                            data="https://www.google.com"
                                            size={150}
                                            framed
                                        />
                                    </div>
                                    <div className='col-md-6' style={{ textAlign:'center', paddingLeft:'20px' }}>
                                        <img src={HDP_B} alt="HDP" style={{ marginTop:'35px' }} />
                                        <div style={{ display:'flex' }}>
                                            <button className='send_submit_btn' style={{ width:'95%' }}>Copy</button>
                                            <button className='send_submit_btn' style={{ width:'95%', marginLeft:'10%' }}>Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='transaction_state'>
                            <p onClick={()=>this.handleTransactionState("state")} className={this.state.transaction_state==="state"?'active_transaction_state':""} style={{ marginBottom:'0px' }}>Transaction Statement</p>
                            <p onClick={()=>this.handleTransactionState("history")} className={this.state.transaction_state==="history"?'transaction_history active_transaction_state':'transaction_history'}>Transaction History</p>
                        </div>
                        <div style={{ display:'flex', marginLeft:'auto', width:'fit-content' }}>
                            <div style={{ display:'flex', marginTop:'5px', marginRight:'40px' }}>
                                <p style={{ marginRight:'15px', marginTop:'5px' }}>Date Range:</p>
                                <Space direction="vertical" size={12}>
                                    <RangePicker
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    onChange={onChange}
                                    onOk={onOk}
                                    />
                                </Space>
                            </div>
                            <p style={{ marginTop:'5px', marginRight:'40px', cursor:'pointer' }}>PRINT</p>
                            <div style={{ marginTop:'0px' }}>
                                <Stack spacing={2}>
                                    <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div className='table_responsive_div'>
                        {this.state.transaction_state==="state"?
                        <table className="table" style={{ marginTop:'30px' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Deposit</th>
                                    <th scope="col">Withdrawal</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Pending</th>
                                    <th scope="col">Holding</th>
                                    <th scope="col">Reward</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Current Value</th>
                                    <th scope="col">UID</th>
                                    <th scope="col">Reference</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22.10.09</td>
                                    <td>0.0023</td>
                                    <td>0.0031</td>
                                    <td>HDP</td>
                                    <td>0.0031</td>
                                    <td>0.0031</td>
                                    <td>0.0031</td>
                                    <td>6773567</td>
                                    <td>$ 123123</td>
                                    <td>H-534345323</td>
                                    <td>534 -xyz 3453</td>
                                    <td>account</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>22.11.09</td>
                                    <td>0.0023</td>
                                    <td>0.0031</td>
                                    <td>HDP</td>
                                    <td>0.0031</td>
                                    <td>0.0031</td>
                                    <td>0.0031</td>
                                    <td>6773567</td>
                                    <td>$ 123123</td>
                                    <td>H-534345323</td>
                                    <td>534 -xyz 3453</td>
                                    <td>account</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        :
                        <table className="table" style={{ marginTop:'30px' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Deposit</th>
                                    <th scope="col">Withdrawal</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">UID</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Reference</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22.10.09</td>
                                    <td>0.0023</td>
                                    <td>0.00</td>
                                    <td>HDP</td>
                                    <td>H-6773456567</td>
                                    <td>My account</td>
                                    <td>H-534345323</td>
                                    <td>234 -xyz 4536</td>
                                    <td>123123</td>
                                    <td>Confirmed</td>
                                    <td>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0L13.1153 5.71221L19.5106 6.90983L15.0406 11.6378L15.8779 18.0902L10 15.3L4.12215 18.0902L4.9594 11.6378L0.489435 6.90983L6.88474 5.71221L10 0Z" fill="#FFC700"/>
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td>22.08.07</td>
                                    <td>0.00</td>
                                    <td>0.0031</td>
                                    <td>HDP</td>
                                    <td>UID: XYZ</td>
                                    <td>My account</td>
                                    <td>H-534345323</td>
                                    <td>534 -xyz 3453</td>
                                    <td>123123</td>
                                    <td>Confirmed</td>
                                    <td>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0L13.1153 5.71221L19.5106 6.90983L15.0406 11.6378L15.8779 18.0902L10 15.3L4.12215 18.0902L4.9594 11.6378L0.489435 6.90983L6.88474 5.71221L10 0Z" fill="#FFC700"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
                :
                !this.state.wallet_detail && this.state.staking_terminal?
                <div style={{ padding:"0px 60px" }}>
                    <StakeTerminal />
                </div>
                :
                <div></div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wallet);