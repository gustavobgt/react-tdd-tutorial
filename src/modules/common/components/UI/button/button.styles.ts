import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	border-radius: 0.4rem;
	color: rgb(0 0 0 / 1);
	background-color: rgb(129 216 247 / 1);
	font-weight: 600;
	font-size: 1.6rem;
	padding: 1.2rem 1.6rem;
	width: 100%;

	:hover {
		filter: brightness(0.9);
		transition: 0.5s;
	}

	:disabled {
		background-color: #d0d0d0;
		color: #ffffff;
		cursor: not-allowed;
	}
`;

export default {
	Button,
};
