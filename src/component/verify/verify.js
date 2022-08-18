import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Link, useNavigate } from 'react-router-dom';
import { Submit } from './../../configApi/function';

const Verify = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		const res = await Submit(data, '/verify', 'post');
		if (res.status === 200) {
			alert('success');
			localStorage.setItem('user', res.data.data.phoneNumber);
			localStorage.setItem('isLoggedIn', true);
			setTimeout(function() {
				navigate('/');
			}, 1000);
		} else {
			alert('failed');
		}
	};
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<div className="form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-container">
							<label>Event Name </label>
							<input {...register('eventName', { required: true })} placeholder="event name" />
							{errors.eventName && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>phone number </label>
							<input {...register('phoneNumber', { required: true })} placeholder="id" />
							{errors.phoneNumber && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>unique code </label>
							<input {...register('id', { required: true })} placeholder="id" />
							{errors.id && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="button-container">
							<input type="submit" />
						</div>
					</form>
				</div>
			</Wrapper>
		</React.Fragment>
	);
};

export default Verify;

const Wrapper = styled.div`
	background-color: grey;
	width: 100%;
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
