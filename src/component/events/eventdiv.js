import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { checkClash, deregister, getEvents, getRegisteredEvents } from './../../configApi/utilFunction';
import { useSelector } from 'react-redux';
import { Submit } from './../../configApi/function';

const EventDiv = ({ data }) => {
	// console.log('props', data);
	const navigate = useNavigate();
	const event = useSelector((state) => state.event.event[0]);

	const handleRegister = () => {
		const res = checkClash(data.eventName, data.date, data.startTime, data.endTime);
		// if (res.status === 200) {
		// 	alert('successfully registered');
		// }
		// setTimeout(() => {
		// 	window.location.reload(false);
		// }, 5000);
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
	const handleClick = () => {
		navigate('/edit/' + data.eventName);
	};
	const handleDeleteClick = async () => {
		const res = await Submit({ eventName: data.eventName }, '/deleteEvent', 'post');
		if (res.status === 200) {
			alert('success');
			setTimeout(() => window.location.reload(false), 500);
		} else {
			alert('error');
		}
	};
	const fetData = async (data) => {
		const res = await getRegisteredEvents();
		setevent(res);
	};
	useEffect(
		() => {
			//console.log('calling getEvents');

			getEvents();
			fetData();
		},
		[ events ]
	);

	return (
		<Wrapper>
			<h1>{data.eventName}</h1>

			<p> {data.description} </p>
			<div className="ebox">
				<h3> {data.date} </h3>
				<p>{data.startTime}</p>
				<p>{data.endTime}</p>
			</div>
			<div className="ca"> Candidates Allowed: {data.candidatesAllowed}</div>
			<div className="ca"> Candidates Registered: {data.candidatesRegistered}</div>
			<div className="cancelbuton">
				<Button onClick={() => handleRegister()} className="m-1" variant="success">
					Register
				</Button>
				<Button onClick={() => handleDeRegister()} className="m-1" variant="danger">
					DeRegister
				</Button>
			</div>

			{/* <span class="badge badge-secondary" /> */}

			<div className="cancelbuton">
				{localStorage.getItem('admin') == 'true' ? (
					<Button variant="primary" onClick={handleClick}>
						{' '}
						edit{' '}
					</Button>
				) : null}
				{localStorage.getItem('admin') == 'true' ? (
					<Button variant="danger" onClick={handleDeleteClick}>
						{' '}
						delete{' '}
					</Button>
				) : null}
			</div>
			<Badge bg="secondary" className="badge">
				{events.includes(data.eventName) ? 'registered' : 'not regiestered'}
			</Badge>
		</Wrapper>
	);
};

export default EventDiv;

const Wrapper = styled.div`
	border: 2px solid black;
	width: 500px;
	margin: 20px;

	background-color: white;
	padding: 20px;
	.ca {
		margin-bottom: 10px;
	}

	${'' /* height: 300px; */};
	.ebox {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
	}
	.cancelbuton {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;
