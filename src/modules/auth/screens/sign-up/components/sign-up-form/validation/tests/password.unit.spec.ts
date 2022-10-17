import { passwordValidation } from '../password';

describe('{passwordValidation}', () => {
	it('It should be truthy when email are not valid', () => {
		const validation = passwordValidation('Teste123');
		expect(validation).toBeTruthy();
	});

	it('It should be falsy when email are valid', () => {
		const validation = passwordValidation('Teste*123');
		expect(validation).toBeFalsy();
	});
});
