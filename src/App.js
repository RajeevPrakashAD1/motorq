import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/landingPage/landingPage';
import AdminLogin from './component/authentication/adminLogin';
import UserLogin from './component/authentication/userLogin';
import UserSignup from './component/authentication/userSignup';
import RegisterEvent from './component/eventRegisteration/event';
import Event from './component/events/events';
import RegisteredEvent from './component/registeredEvents/registeredEvent';
import { PrivateRoutes, AdminPrivateRoutes } from './component/authentication/privateRoutes';
import Verify from './component/verify/verify';
import EditEvent from './component/editEvent/editEvent';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/adminLogin" element={<AdminLogin />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/signup" element={<UserSignup />} />
					<Route element={<AdminPrivateRoutes />}>
						<Route path="/registerEvent" element={<RegisterEvent />} />
						<Route path="/verify" element={<Verify />} />
						<Route path="/edit/:id" element={<EditEvent />} />
					</Route>
					<Route element={<PrivateRoutes />}>
						<Route path="/events" element={<Event />} />
						<Route path="/registered_event" element={<RegisteredEvent />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
