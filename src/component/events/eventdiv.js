import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { checkClash, deregister, getEvents, getRegisteredEvents } from './../../configApi/utilFunction';
import { useSelector } from 'react-redux';

const EventDiv = ({ data }) => {
	// console.log('props', data);
	const event = useSelector((state) => state.event.event[0]);
	const handleRegister = () => {
		const res = checkClash(data.eventName, data.date, data.startTime, data.endTime);
		// if (res.status === 200) {
		// 	alert('successfully registered');
		// }
		// setTimeout(() => {
		// 	window.location.reload(false);
		// }, 1000);
	};
	const handleDeRegister = async () => {
		const res = await deregister(data.eventName);
		console.log(res);
		if (res.status === 200) {
			alert('successfully deregistered');
		}
		// window.location.reload(false);
	};

	const [ events, setevent ] = React.useState([]);
	console.log(data);

	const fetData = async (data) => {
		const res = await getRegisteredEvents();
		setevent(res);
	};
	useEffect(() => {
		//console.log('calling getEvents');

		getEvents();
		fetData();
	}, []);

	return (
		<Wrapper>
			<h1>{data.eventName}</h1>
			<p> {data.description} </p>
			<div className="ebox">
				<h3> {data.date} </h3>
				<p>{data.startTime}</p>
				<p>{data.endTime}</p>
			</div>
			<div> Candidates Allowed: {data.candidatesAllowed}</div>
			<div> Candidates Registered: {data.candidatesRegistered}</div>

			<Button onClick={() => handleRegister()} className="m-1" variant="success">
				Register
			</Button>
			<Button onClick={() => handleDeRegister()} className="m-1" variant="danger">
				DeRegister
			</Button>
			<p>{events.includes(data.eventName) ? 'registered' : 'not regiestered'}</p>
		</Wrapper>
	);
};

export default EventDiv;

const Wrapper = styled.div`
	background-color: grey;
	width: 500px;
	margin: 20px;

	${'' /* height: 300px; */};
	.ebox {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
	}
`;
