import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Link, useNavigate } from 'react-router-dom';
import { Submit } from './../../configApi/function';

const UserLogin = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		const res = await Submit(data, '/login', 'post');
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
							<label>phoneNumber </label>
							<input {...register('phoneNumber', { required: true })} placeholder="something@gmail" />
							{errors.phoneNumber && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Password </label>
							<input {...register('password', { required: true })} placeholder="password" />
							{errors.password && <span className="fontcolor">This field is required</span>}
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

export default UserLogin;

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
