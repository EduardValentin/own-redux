import connect from "./connect";
import Element from "./Element";
import { pathOr } from 'ramda';
const mapStateToProps = (state, props) => {
	return {
		value_a: pathOr(null, ['value_a'], state),
		value_b: pathOr(null, ['value_b'], state),
	};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		updateB: (payload) => dispatch({
			type: 'b/UPDATE',
			payload,
		}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);