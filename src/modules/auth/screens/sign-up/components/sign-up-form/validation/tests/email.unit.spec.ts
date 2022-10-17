import { emailValidation } from '../email';

describe('{emailValidation}', () => {
	it('It should be truthy when email are not valid', () => {
		const validation = emailValidation('teste@teste.c');
		expect(validation).toBeTruthy();
	});

	it('It should be falsy when email are valid', () => {
		const validation = emailValidation('teste@teste.com');
		expect(validation).toBeFalsy();
	});
});
