import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventSlice/eventSlice';
export const store = configureStore({
	reducer: {
		event: eventReducer
	}
});
