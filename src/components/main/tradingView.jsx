import React from "react";
import { CRYPTO_COMPARE } from "./key";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

class TradingView extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: ""
  };

  componentDidMount() {
    this.loadChartData();
  }

  loadChartData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
    );
    const data = await response.json();
    console.log(data);
    const dataArray = [];

    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };
  render() {
    const { query } = this.state;

    return (
      <div>
        <div className="inputDiv">
          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              displayMode: "adaptive",
              colorTheme: "light",
              symbols: [
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD"
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD"
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT"
                },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD"
                },
                {
                  proName: "BINANCE:DOTUSDT",
                  title: "DOT/USDT"
                },
                {
                  proName: "UNISWAP:UNIUSDT",
                  title: "UNI/USDT"
                }
              ]
            }}
          />
        </div>
        <div className="charty">
          {query.length > 2 ? (
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "light",
                width: "100%",
                symbol: query + "USD",
              }}
            />
          ) : (
            "BTCUSD"
          )}

        </div>
      </div>
    );
  }
}
export default TradingView;
