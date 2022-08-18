import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	event: []
};

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		addEvent: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			//console.log('red=  ', action.payload);
			// console.log('user', state, action);
			state.event = [ ...state.event, action.payload ];
			// if (state.messageArray[action.payload.roomId]) {user
			// 	state.messageArray[action.payload.roomId].push(action.payload);
			// } else {
			// 	state.messageArray[action.payload.roomId] = [ action.payload ];
			// }
		}
	}
});

// Action creators are generated for each case reducer function
export const { addEvent } = eventSlice.actions;

export default eventSlice.reducer;
