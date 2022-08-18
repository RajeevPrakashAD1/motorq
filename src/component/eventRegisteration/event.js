import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';
import Button from 'react-bootstrap/Button';

const RegisterEvent = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		const res = await Submit(data, '/createEvent', 'post');
		if (res.status === 200) {
			alert('success');
		} else {
			alert('duplicate name error');
		}
	};
	return (
		<React.Fragment>
			<Header />
			<h1>Register events</h1>
			<Wrapper>
				<div className="form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-container">
							<label>Event Name </label>
							<input {...register('eventName', { required: true })} placeholder="event" />
							{errors.eventName && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Description </label>
							<textarea {...register('description', { required: true })} placeholder="description" />
							{errors.description && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Date </label>
							<input type="date" {...register('date', { required: true })} />
							{errors.date && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label> Start Time </label>
							<input type="time" {...register('startTime', { required: true })} />
							{errors.time && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>End Time </label>
							<input type="time" {...register('endTime', { required: true })} />
							{errors.time && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Candidates Allowed </label>
							<input {...register('candidatesAllowed', { required: true })} />
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

export default RegisterEvent;

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
