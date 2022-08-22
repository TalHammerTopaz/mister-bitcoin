import { Component } from "react";
import { Chart } from "./../cmps/Chart";
import { bitcoinService } from "../services/bitcoinService";

export class StatisticPage extends Component {
  state = {
    marketPrice: null,
    transactions: null,
  };

  componentDidMount() {
    this.loadMarketPrice();
    this.loadTransactions();
  }

  async loadMarketPrice() {
    try {
      const marketPrice = await bitcoinService.getMarketPrice();
      this.setState({ marketPrice });
    } catch (err) {
      console.log("err:", err);
    }
  }

  async loadTransactions() {
    try {
      const transactions = await bitcoinService.getConfirmedTransactions();
      this.setState({ transactions });
    } catch (err) {
      console.log("err:", err);
    }
  }

  render() {
    if (!this.state.marketPrice || !this.state.transactions) return;
    return (
      <form className="statistics-page">
        <section>
          <h1>Market Price</h1>
          <Chart data={this.state.marketPrice} />
          <h1>Transactions</h1>
          <Chart data={this.state.transactions} />
        </section>
      </form>
    );
  }
}
