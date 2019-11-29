import { merge, dissoc } from 'ramda';

export default (state, action) => {
	switch (action.type) {
		case 'b/UPDATE':
			return merge(state, { value_b: action.payload });
		case 'b/DELETE':
			return dissoc('value_b', state);
		default:
			break;
	}
}