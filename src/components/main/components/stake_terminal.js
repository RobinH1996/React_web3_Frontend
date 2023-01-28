import React from 'react';
import "./stake_terminal.css";
import { Doughnut, Chart } from "react-chartjs-2";

export default function stakeTerminal(){
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
    return(
        <div className='row'>
            <div className='col-md-3'>
                <div className='staking_pairs'>
                    <p className='staking_pairs_title'>Staking Pairs</p>
                    <div className='table_responsive_div' style={{ padding: "0px 24px" }}>
                        <table className="table" style={{ marginBottom:'0px' }}>
                            <tbody className='border_none'>
                                <tr>
                                    <td>HDP / USD</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / CAD</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / EUR</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / GBP</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / ETH</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / BTC</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>HDP / USDT</td>
                                    <td>0.000020</td>
                                    <td>6%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='staking_pairs' style={{ marginTop:'20px' }}>
                    <p className='staking_pairs_title'>Balance</p>
                    <div style={{ marginTop:'20px' }}>
                        <Doughnut data={data} options={options} height={200} />
                    </div>
                </div>
            </div>
            <div className='col-md-6'>2</div>
            <div className='col-md-3'>3</div>
        </div>
    )
}