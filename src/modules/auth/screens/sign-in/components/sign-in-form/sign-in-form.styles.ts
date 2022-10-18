import styled from 'styled-components';

const Section = styled.section`
	width: 420px;
	background-color: rgba(0, 0, 0, 0.4);
	padding: 2rem;
	border-radius: 0.4rem;
`;

const Title = styled.h1`
	font-size: 3.2rem;
	margin-bottom: 1.2rem;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	div:nth-child(2) {
		margin-bottom: 2rem;
	}
`;

export default {
	Section,
	Title,
	Form,
};
