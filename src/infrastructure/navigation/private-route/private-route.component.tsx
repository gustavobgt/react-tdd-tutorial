import React from 'react';
import { Navigate } from 'react-router-dom';

import { AUTH_SCREEN } from '..';

import { PrivateRouteProps } from './private-route.types';

export function PrivateRouteComponent(props: PrivateRouteProps) {
	const { children } = props;
	const isAuthenticated = false;

	return isAuthenticated ? children : <Navigate to={AUTH_SCREEN.SIGN_IN} />;
}
