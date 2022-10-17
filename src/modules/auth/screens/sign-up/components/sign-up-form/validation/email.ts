const EMAIL_REGEX = /^\w+([/\\.-]?\w+)@\w+([/\\.-]?\w+)(\.\w{2,3})+$/;

export const emailValidation = (email: string) => {
	let error = '';

	if (!email) {
		error = 'O E-mail é obrigatório.';
	} else if (!EMAIL_REGEX.test(email)) {
		error = 'Esse e-mail não é válido.';
	}

	return error;
};
