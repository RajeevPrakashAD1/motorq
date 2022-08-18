import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';
import Button from 'react-bootstrap/Button';

const AdminLogin = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		console.log('submitted');
		const res = await Submit(data, '/adminlogin', 'post');
		if (res.status == 200) {
			alert('success');
			localStorage.setItem('admin', 'true');
			localStorage.setItem('user', '7903578628');
		} else {
			alert('fail');
		}
	};
	return (
		<React.Fragment>
			<Header />
			<h1>Admin Login</h1>
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

export default AdminLogin;

const Wrapper = styled.div`
	background-color: grey;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.input-container {
		${'' /* background-color: blue; */} margin: 20px;
		width: 300px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #42f5d1;
	}
`;
