import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import CoinForm from './CoinForm';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import utils from '../../utils';

class CoinView extends React.Component {
  render() {
    const { coins } = this.props;
    return (
      <div>
        <CoinForm {...this.props} />
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <Paper
            zDepth={1}
            style={{ padding: '20px 0 5px 0', marginTop: '30px' }}
          >
            <Grid fluid>
              <Row style={{ paddingLeft: '10px' }}>
                <Col xs={4} md={4} lg={4} style={{ textAlign: 'left' }}>
                  <span>Coin</span>
                </Col>
                <Col xs={3} md={3} lg={3}>
                  <span>Rank</span>
                </Col>
                <Col xs={3} md={3} lg={3}>
                  <span>Price</span>
                </Col>
                <Col xs={1} md={1} lg={1}>
                  <span>% Change 1h</span>
                </Col>
                <Col xs={1} md={1} lg={1}>
                  <span>% Change 24h</span>
                </Col>
              </Row>
              <Divider />
              <List>
                {coins.map((coin, index) => (
                  <Row
                    key={coin.id}
                    style={{
                      padding: '5px 0 5px 10px',
                      background: utils.isOdd(index)
                        ? 'rgba(220,220,220,.5)'
                        : 'none'
                    }}
                  >
                    <Col xs={4} md={4} lg={4} style={{ textAlign: 'left' }}>
                      <a
                        href={`https://coinmarketcap.com/currencies/${
                          coin.id
                        }/`}
                      >
                        {coin.name}
                      </a>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                      <span>{coin.rank}</span>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                      <span>{coin.price_usd}</span>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                      <span
                        style={{
                          color:
                            coin.percent_change_1h.indexOf('-') > 0
                              ? 'red'
                              : 'green'
                        }}
                      >
                        {coin.percent_change_1h}
                      </span>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                      <span
                        style={{
                          color:
                            coin.percent_change_24h.indexOf('-') > 0
                              ? 'red'
                              : 'green'
                        }}
                      >
                        {coin.percent_change_24h}
                      </span>
                    </Col>
                  </Row>
                ))}
              </List>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

CoinView.propTypes = {
  site: PropTypes.object,
  coins: PropTypes.array,
  removeFlag: PropTypes.func
};

export default CoinView;
