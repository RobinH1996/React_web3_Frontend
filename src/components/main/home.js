import React, { Component } from 'react'
import { connect } from 'react-redux';
import Banner from "../../assets/images/phone.png"
import wallet from "../../assets/images/wallet2@2x.png"
import credit from "../../assets/images/credit_card.png"
import staking from "../../assets/images/staking.png"
import ReactApexChart from 'react-apexcharts'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { SET_AUTH } from '../../constants/actionTypes';

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    psw: state.auth.psw
  }};

const mapDispatchToProps = dispatch => ({
  setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos:[],
      series: [{
        name: 'Wallet total($)',
        data: [4000, 3200, 10000, 900, 290, 1900, 2200, 90, 12000, 700, 190, 5000, 1300, 9000, 170, 200, 700, 5000]
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
  goToSite = (url) =>{
    this.props.history.push(url)
  }
  render() {
    return (
      <div className='home_div footer_padding'>
        <div className='home_sub_div'>
          <div className='row banner_img'>
            <div className='col-md-6 col-sm-6 col-xs-6'>
              <img src={Banner} alt="banner" className='banner' height="160px" />
            </div>
            <div className='col-md-6 col-sm-6 col-xs-6 card_and_apply'>
              <p className='get_card'><span>Get</span> your card</p>
              <p className='lorem_letter'>Lorem ipsum dolor sit amet, consetetur</p>
              <button className='singInButton activeButton apply_btn'>Apply now</button>
            </div>
          </div>
          <div className='row card_all_div'>
            <div className='col-md-4 col-sm-4 card_div' onClick={()=>this.goToSite('wallet')}>
              <div className='wallet'>
                <div>
                  <p className='card_title'>Wallet total</p>
                  <img src={wallet} alt="wallet" className='wallet_img' width="27px" />
                </div>
                <p className='wallet_money'>11,139.46 USD</p>
                <p className='wallet_date'>Last updated Nov 14, 2022, 12:00</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 card_div card_div_tablet' onClick={()=>this.goToSite('card')}>
              <div className='cards'>
                <div>
                  <p className='card_title'>Card</p>
                  <img src={credit} alt="credit" className='wallet_img' width="30px" />
                </div>
                <p className='wallet_money'>2,678.20 USD</p>
                <p className='wallet_date'>Available funds</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 card_div card_div_tablet' onClick={()=>this.goToSite('fundPackage')}>
              <div className='staking'>
                <div>
                    <p className='card_title'>Staking</p>
                    <img src={staking} alt="staking" className='wallet_img' width="29px" />
                </div>
                <p className='wallet_money'>10,000.010120 HDP.Ф</p>
                <p className='wallet_date'>Earnings last month: 23.021 HDP.Ф</p>
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
          <div className='operation_div'>
            <p className='page_title' style={{ fontSize:"16px" }}>Latest operations</p>
            <div className='show_and_search'>
              <div className='selected_div'>
                <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                <select className='select_ele' name="pageItems">
                  <option value="6">6</option>
                  <option value="6">12</option>
                  <option value="6">18</option>
                  <option value="6">24</option>
                </select>
              </div>
              <input type="search" name="search" style={{ marginTop:'-38px' }} className="search_input" placeholder='Search' />
            </div>
            <div className='table_responsive'>
              <table className='table text-center'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Deposit</th>
                    <th>Coin/token</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>05/05/2022</td>
                    <td>900</td>
                    <td>HDP.Ф</td>
                    <td></td>
                    <td></td>
                    <td>HDP.Ф</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Stack spacing={2}>
              <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);