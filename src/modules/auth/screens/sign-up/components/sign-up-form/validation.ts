const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([/\\.-]?\w+)@\w+([/\\.-]?\w+)(\.\w{2,3})+$/;
const STRONG_PASSWORD_REGEX =
	/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

const USERNAME_HELPER =
	'De 4 a 24 caracteres. Deve começar com uma letra. É permitido letras, números, underlines e hífens.';
const EMAIL_HELPER = 'Esse e-mail não é válido.';
const PASSWORD_HELPER =
	'De 8 a 24 caracteres. Deve incluir letras maiúsculas e minúsculas, pelomenos um número e um caractere especial.';

export const usernameValidation = (username: string) => {
	let error = '';

	if (!username) {
		error = 'O nome de usuário é obrigatório.';
	} else if (!USERNAME_REGEX.test(username)) {
		error = USERNAME_HELPER;
	}

	return error;
};

export const emailValidation = (email: string) => {
	let error = '';

	if (!email) {
		error = 'O E-mail é obrigatório.';
	} else if (!EMAIL_REGEX.test(email)) {
		error = EMAIL_HELPER;
	}

	return error;
};

export const passwordValidation = (password: string) => {
	let error = '';

	if (!password) {
		error = 'A senha é obrigatória.';
	} else if (!STRONG_PASSWORD_REGEX.test(password)) {
		error = PASSWORD_HELPER;
	}

	return error;
};

export const confirmPasswordValidation = (
	confirmPassword: string,
	password?: string,
) => {
	let error = '';

	if (!confirmPassword) {
		error = 'A repetição da senha é obrigatória.';
	} else if (!(password === confirmPassword)) {
		error = 'Deve ser igual a senha digitada no primeiro campo.';
	}

	return error;
};
