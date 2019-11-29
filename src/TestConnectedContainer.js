import connect from "./connect";
import { pathOr } from 'ramda';
import TestConnected from "./TestConnected";

const mapStateToProps = (state, props) => {
  return {
    value_a: pathOr(null, ['value_a'], state),
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps, { pure: true })(TestConnected);