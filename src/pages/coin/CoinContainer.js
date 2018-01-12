import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load as loadCoins } from './CoinReducer';
import CoinView from './CoinView';

class CoinContainer extends React.Component {
  // componentDidMount() {
  //   this.props.loadCoins(this.props.params.id);
  // }

  render() {
    if (this.props.loading) {
      return <div>Loading Coins...</div>;
    }
    if (this.props.error) {
      return <div>Whoops something is wrong...</div>;
    }
    return <CoinView {...this.props} />;
  }
}

CoinContainer.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  loadCoins: PropTypes.func
};

const mapStateToProps = state => ({
  error: state.site.error,
  loading: state.site.loading,
  coins: state.coin.list
});

const mapDispatchToProps = {
  loadCoins
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer);
