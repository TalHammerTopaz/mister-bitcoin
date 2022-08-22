import axios from "axios";
import { utilService } from "./utilService.js";
import market from "./../data/market.json";

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
};

// console.log(market.values);

const MARKET_PRICE_KEY = "marketPriceDB";
const TRANSACTION_KEY = "transactionDB";

async function getRate(coin) {
  try {
    console.log("Getting rate data", coin);
    return axios
      .get(`https://blockchain.info/tobtc?currency=${coin}&value=1`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  } catch (err) {
    console.log("cannot get rate", err);
  }
}

function getMarketPrice() {
  try {
    console.log("Getting market price");
    return axios
      .get(
        `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
      )
      .then((res) => {
        console.log(res.data);
        const values = res.data.values;
        return values.map((value) => value.y);
      });
  } catch (err) {
    console.log("cannot get rate", err);
  }
}

function getConfirmedTransactions() {
  try {
    console.log("Getting trade volume");
    return axios
      .get(
        `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
      )
      .then((res) => {
        console.log(res.data);
        const values = res.data.values;
        return values.map((value) => value.y);
      });
  } catch (err) {
    console.log("cannot get rate", err);
  }
}
