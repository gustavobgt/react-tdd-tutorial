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
