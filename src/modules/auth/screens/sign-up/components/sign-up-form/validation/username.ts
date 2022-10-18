const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
export const USERNAME_HELPER =
	'De 4 a 24 caracteres. Deve começar com uma letra. É permitido letras, números, underlines e hífens.';

export const usernameValidation = (username: string) => {
	let error = '';

	if (!username) {
		error = 'O nome de usuário é obrigatório.';
	} else if (!USERNAME_REGEX.test(username)) {
		error = USERNAME_HELPER;
	}

	return error;
};
