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

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/adminLogin" element={<AdminLogin />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/signup" element={<UserSignup />} />
					<Route path="/registerEvent" element={<RegisterEvent />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
