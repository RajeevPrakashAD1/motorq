import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';
import { getEvents } from './../../configApi/utilFunction';
import { useSelector } from 'react-redux';
import EventDiv from './eventdiv';

const Event = () => {
	const event = useSelector((state) => state.event.event[0]);
	//console.log('event', event);
	useEffect(() => {
		//console.log('calling getEvents');
		getEvents();
	}, []);
	return (
		<React.Fragment>
			<Header />
			<h1>Events</h1>

			<Wrapper>{event && event.map((e) => <EventDiv data={e} />)}</Wrapper>
		</React.Fragment>
	);
};

export default Event;

const Wrapper = styled.div`
	background-color: white;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.input-container {
		${'' /* background-color: #fff; */} margin: 20px;
		width: 300px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;
