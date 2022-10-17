import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: rgb(32 32 36 / 1);
	padding-left: 1.2rem;
	padding-right: 1.2rem;
	padding-top: 1.6rem;
	padding-bottom: 1.6rem;
	border-radius: 0.4rem;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	width: 100%;
	height: 4.8rem;
`;

const Input = styled.input`
	border: none;
	outline: 2px solid transparent;
	outline-offset: 2px;
	color: rgb(225 225 230 / 1);
	background-color: transparent;
	flex: 1 1 0%;
`;

const Label = styled.label`
	font-size: 1.6rem;
	margin-bottom: 0.4rem;
`;

export default {
	Wrapper,
	Input,
	Label,
};
