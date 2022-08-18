import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';
import { getEvents, getRegisteredEvents } from './../../configApi/utilFunction';
import { useSelector } from 'react-redux';

import EventDiv from './../events/eventdiv';

const RegisteredEvent = () => {
	const event = useSelector((state) => state.event.event[0]);
	const [ data, setdata ] = React.useState([]);
	console.log(data);

	const fetData = async (data) => {
		const res = await getRegisteredEvents();
		setdata(res);
	};
	useEffect(() => {
		//console.log('calling getEvents');

		getEvents();
		fetData();
	}, []);
	return (
		<React.Fragment>
			<Header />
			<h1>Registerd Events</h1>

			<Wrapper>{data && data.map((e) => <p>{e}</p>)}</Wrapper>
		</React.Fragment>
	);
};

export default RegisteredEvent;

const Wrapper = styled.div`
	background-color: grey;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	.input-container {
		${'' /* background-color: #fff; */} margin: 20px;
		width: 300px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;
