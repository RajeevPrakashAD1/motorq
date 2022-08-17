import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';

const RegisterEvent = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = () => {
		console.log('submitted');
	};
	return (
		<React.Fragment>
			<Header />
			<h1>Register events</h1>
			<Wrapper>
				<div className="form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-container">
							<label>Username </label>
							<input {...register('email', { required: true })} placeholder="something@gmail" />
							{errors.email && <span className="fontcolor">This field is required</span>}
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

export default RegisterEvent;

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
