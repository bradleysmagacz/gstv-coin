import axios from 'axios';

class CoinService {
  constructor() {
    this.apiUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=0';
  }

  get(url) {
    return axios({
      baseURL: this.apiUrl,
      method: 'GET',
      url
    }).then(res => res.data);
  }
}

export default new CoinService();
