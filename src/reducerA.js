import { merge, dissoc } from 'ramda';

export default (state, action) => {
	switch (action.type) {
		case 'a/UPDATE':
			return merge(state, { value_a: action.payload });
		case 'a/DELETE':
			return dissoc('value_a', state);
		default:
			break;
	}
}