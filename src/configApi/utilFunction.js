import { Submit } from './function';
import { store } from './../store/store';
import { addEvent } from '../store/eventSlice/eventSlice';

export const getEvents = async () => {
	try {
		const res = await Submit({}, '/getEvents', 'get');

		//const dispatch = useDispatch();
		//console.log('even res', res);
		store.dispatch(addEvent(res.data.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getAllRegisteredUsers = async (phoneNumber) => {
	try {
		const res = await Submit({ phoneNumber: phoneNumber }, '/getRegisteredEvents', 'get');
		return res;
	} catch (err) {
		console.log(err);
		return err;
	}
};
export const getRegisteredEvents = async () => {
	try {
		let data = {};
		data['phoneNumber'] = localStorage.getItem('user');
		const res = await Submit(data, '/getRegisteredEvents', 'post');
		return res.data.data;
		//const dispatch = useDispatch();
		//console.log('even res', res);
		//store.dispatch(addEvent(res.data.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const checkClash = async (eventName, date, st, et) => {
	try {
		const event = await Submit({ eventName: eventName }, '/oneEvent', 'post');
		if (event.data.data.candidatesAllowed === event.data.data.candidatesRegistered) {
			alert('no seats left');
			return false;
		}
	} catch (err) {
		console.log(err);
	}

	try {
		const phoneNumber = localStorage.getItem('user');
		// console.log('phone Number', phoneNumber);
		const res = await Submit({ phoneNumber: phoneNumber }, '/oneRegisteredUser', 'post');
		const events = res.data.data.events;
		//console.log('events', events);

		var update = true;
		if (events.length == 0) {
			const res2 = await Submit({ phoneNumber: phoneNumber, eventName: eventName }, '/registerEvent', 'post');
			alert('succefully registered');
			update = false;
		} else {
			console.log('length', events.length);

			for (let i of events) {
				if (i == eventName) {
					alert('already registered');
					return;
				} else {
					const res3 = await Submit({ eventName: i }, '/oneEvent', 'post');
					const eventDetail = res3.data.data;
					//console.log('event Details', eventDetail.startTime.split(':')[0]);
					if (date == eventDetail.date) {
						const rst = Date.parse(date + ' ' + st);
						const ret = Date.parse(date + ' ' + et);
						const cst = Date.parse(eventDetail.date + ' ' + eventDetail.startTime);
						const cet = Date.parse(eventDetail.date + ' ' + eventDetail.endTime);

						if (rst <= cst && ret >= cet) {
							update = false;
						} else if (rst == cst) {
							update = false;
						} else if (ret == cet) {
							update = false;
						} else if (cet > rst && cet < ret) {
							update = false;
						}
					}
				}
			}
			if (update) {
				const res2 = await Submit({ phoneNumber: phoneNumber, eventName: eventName }, '/registerEvent', 'post');
				alert('succefully registered');
				update = false;
			} else {
				alert('clashed');
			}
		}

		return res;
	} catch (err) {
		console.log('error--->', err);
	}
};

export const deregister = async (name) => {
	try {
		const res2 = await Submit({ phoneNumber: localStorage.getItem('user') }, '/getRegisteredEvents', 'post');
		console.log(name, res2.data.data);
		if (res2.data.data.includes(name)) {
			const res = await Submit(
				{ eventName: name, phoneNumber: localStorage.getItem('user') },
				'/deregister',
				'post'
			);
			return res;
		} else {
			alert('you are not registered for this event');
		}
	} catch (err) {
		console.log(err);
	}
};
// export const getUserDetails = async () => {
// 	try {
// 		const res = await Submit({}, '/user/getuser', 'get');

// 		//const dispatch = useDispatch();
// 		if (res) store.dispatch(addUser(res.data));
// 	} catch (err) {
// 		console.log(err);
// 		return err;
// 	}
// };

// export const getProduct = async () => {
// 	try {
// 		const res = await Submit({}, '/product/', 'get');

// 		//const dispatch = useDispatch();
// 		store.dispatch(addProduct(res.data.result));
// 	} catch (err) {
// 		console.log(err);
// 		return err;
// 	}
// };

// // export const addToCart = async () => {
// // 	try {
// // 		const res = await Submit({}, '/cart/', 'post');

// // 		//const dispatch = useDispatch();
// // 		store.dispatch(addProduct(res.data.result));
// // 	} catch (err) {
// // 		console.log(err);
// // 		return err;
// // 	}
// // };
// export const getCart = async () => {
// 	try {
// 		const res = await Submit({}, '/cart/', 'get');

// 		//const dispatch = useDispatch();
// 		store.dispatch(addCart(res.data.result));
// 	} catch (err) {
// 		console.log(err);
// 		return err;
// 	}
// };
