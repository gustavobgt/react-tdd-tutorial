const STRONG_PASSWORD_REGEX =
	/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
const PASSWORD_HELPER =
	'De 8 a 24 caracteres. Deve incluir letras maiúsculas e minúsculas, pelomenos um número e um caractere especial.';

export const passwordValidation = (password: string) => {
	let error = '';

	if (!password) {
		error = 'A senha é obrigatória.';
	} else if (!STRONG_PASSWORD_REGEX.test(password)) {
		error = PASSWORD_HELPER;
	}

	return error;
};
