import SignInScreen from '@/modules/auth/screens/sign-in';
import SingUpScreen from '@/modules/auth/screens/sign-up';
import { Layout } from '@/modules/common/components';
import HomeScreen from '@/modules/main/screens/home';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFoundScreen from './not-found';
import PrivateRoute from './private-route';
import { MAIN, AUTH, MAIN_SCREEN } from './router-paths';

export const RouterConfig = () => {
	return (
		<Routes>
			<Route path={MAIN.ROOT}>
				<Route
					index
					element={<Navigate replace to={MAIN_SCREEN.HOME} />}
				/>

				<Route element={<Layout />}>
					<Route
						path={MAIN.HOME}
						element={
							<PrivateRoute>
								<HomeScreen />
							</PrivateRoute>
						}
					/>
				</Route>

				<Route path={AUTH.ROOT}>
					<Route path={AUTH.SIGN_IN} element={<SignInScreen />} />

					<Route path={AUTH.SIGN_UP} element={<SingUpScreen />} />
				</Route>

				<Route path="*" element={<NotFoundScreen />} />
			</Route>
		</Routes>
	);
};
