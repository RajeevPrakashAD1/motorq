import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../header/header';
import { Submit } from './../../configApi/function';

const UserSignup = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		console.log('submitted');
		console.log(data);
		const res = await Submit(data, '/register', 'post');
		if (res) alert('success');
	};
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<div className="form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-container">
							<label>Phone Number </label>
							<input {...register('phoneNumber', { required: true })} placeholder="something@gmail" />
							{errors.phoneNumber && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>Name </label>
							<input {...register('name', { required: true })} placeholder="name" />
							{errors.name && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>age </label>
							<input {...register('age', { required: true })} placeholder="age" />
							{errors.age && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>gender </label>
							<input {...register('gender', { required: true })} placeholder="gender" />
							{errors.gender && <span className="fontcolor">This field is required</span>}
						</div>
						<div className="input-container">
							<label>password </label>
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

export default UserSignup;

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
