export enum MAIN {
	ROOT = '/',
	HOME = 'home',
}

export enum AUTH {
	ROOT = 'auth',
	SIGN_IN = 'sign-in',
	SIGN_UP = 'sign-up',
}

export enum MAIN_SCREEN {
	HOME = '/home',
}

export enum AUTH_SCREEN {
	SIGN_IN = '/auth/sign-in',
	SIGN_UP = '/auth/sign-up',
}

export type ScreenPaths = `${MAIN_SCREEN}` | `${AUTH_SCREEN}`;
