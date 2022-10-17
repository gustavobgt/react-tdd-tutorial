import styled from 'styled-components';
import { css } from 'styled-components';

import { AppBarStyleProps, GetAppBarStyles } from './app-bar.types';

export const AppBar = styled.header<AppBarStyleProps>`
	${({ styles }) => styles};
`;

export const getAppBarStyles = (params: GetAppBarStyles) => {
	const { position = 'static' } = params;

	return css`
		background-color: #ffffff;
		position: ${position};
		color: #ffffff;
		box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
			0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
		padding: 1.6rem 2.4rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	`;
};
