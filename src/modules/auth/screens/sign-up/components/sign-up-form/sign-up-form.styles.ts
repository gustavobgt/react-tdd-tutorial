import { Link as RTDLink } from 'react-router-dom';
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
	gap: 1rem;

	div:nth-child(4) {
		margin-bottom: 2rem;
	}
`;

const Label = styled.div`
	display: flex;
	align-items: center;
	gap: 0.4rem;
`;

const Link = styled(RTDLink)`
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.6rem;
`;

export default {
	Section,
	Title,
	Form,
	Label,
	Link,
};
