import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEvents } from '../../configApi/utilFunction';
import Button from 'react-bootstrap/Button';

const EditEvent = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	let { id } = useParams();
	// const [ event, setEvent ] = useState([]);

	//console.log('id', id);
	const Events = useSelector((state) => state.event.event[0]);
	const event = Events.find((e) => e.eventName === id);
	// for (let i of Events) {
	// 	console.log('i', i.eventName);
	// 	if (i.eventName == id) {
	// 		console.log('matched');
	// 		setEvent(i);
	// 	}
	// }
	const [ description, sd ] = useState(event.description);
	const [ cda, scda ] = useState(event.candidatesAllowed);
	const [ st, sst ] = useState(event.startTime);
	const [ et, set ] = useState(event.endTime);
	const [ date, sdate ] = useState(event.date);

	//console.log(event);
	const onSubmit = async (data) => {
		data['eventName'] = event.eventName;
		// console.log('dataa', data);
		const res = await Submit(data, '/updateEvent', 'post');

		if (res.status === 200) {
			alert('success');
		} else {
			alert('error');
		}
	};
	useEffect(() => {
		getEvents();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<h1>Edit events</h1>
			<Wrapper>
				<div className="form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-container">
							<label>Event Name </label>
							<input {...register('eventName')} placeholder="event" disabled value={event.eventName} />
							{errors.eventName && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Description </label>
							<textarea
								{...register('description', { required: true })}
								placeholder="description"
								value={description}
								onChange={(e) => sd(e.target.value)}
							/>
							{errors.description && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Date </label>
							<input
								type="date"
								{...register('date', { required: false })}
								value={date}
								onChange={(e) => sdate(e.target.value)}
							/>
							{errors.date && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label> Start Time </label>
							<input
								type="time"
								{...register('startTime', { required: true })}
								value={st}
								onChange={(e) => sst(e.target.value)}
							/>
							{errors.time && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>End Time </label>
							<input
								type="time"
								{...register('endTime', { required: true })}
								value={et}
								onChange={(e) => set(e.target.value)}
							/>
							{errors.time && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Candidates Allowed </label>
							<input
								{...register('candidatesAllowed', { required: true })}
								value={cda}
								onChange={(e) => scda(e.target.value)}
							/>
							{errors.candidatesAllowed && <span className="fontcolor">This field is required</span>}
						</div>

						<div className="button-container">
							<Button variant="primary" type="submit">
								Submit{' '}
							</Button>
						</div>
					</form>
				</div>
			</Wrapper>
		</React.Fragment>
	);
};

export default EditEvent;

const Wrapper = styled.div`
	background-color: grey;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	.input-container {
		${'' /* background-color: #fff; */} margin: 20px;
		width: 300px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #42f5d1;
	}
`;
