import styled from 'styled-components';

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

const Section = styled.section`
	width: 420px;
	background-color: rgba(0, 0, 0, 0.4);
	padding: 2rem;
	border-radius: 0.4rem;
`;

const Title = styled.h1`
	font-size: 3.2rem;
	margin-bottom: 1.2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div:nth-child(3) {
		margin-bottom: 2rem;
	}
`;

export default {
	Main,
	Section,
	Title,
	Form,
};
