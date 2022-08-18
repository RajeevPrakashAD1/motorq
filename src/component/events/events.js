import React, { useEffect, useState } from 'react';
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
	const [ s, ss ] = useState('');
	useEffect(() => {
		//console.log('calling getEvents');
		getEvents();
	}, []);
	return (
		<React.Fragment>
			<Header />
			<h1>Events</h1>
			<input
				style={{ border: '5px solid green' }}
				type="text"
				value={s}
				onChange={(e) => ss(e.target.value)}
				placeholder="search here"
			/>

			<Wrapper>
				{event &&
					event
						.filter((e) => e.eventName.toLowerCase().includes(s.toLowerCase()))
						.map((e) => <EventDiv data={e} />)}
			</Wrapper>
		</React.Fragment>
	);
};

export default Event;

const Wrapper = styled.div`
	background-color: grey;

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
