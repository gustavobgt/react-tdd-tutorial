import { confirmPasswordValidation } from '../confirm-password';

describe('{confirmPasswordValidation}', () => {
	it('It should be truthy when password does not match', () => {
		const validation = confirmPasswordValidation('Teste*1', 'Teste*');
		expect(validation).toBeTruthy();
	});

	it('It should be falsy when password does match', () => {
		const validation = confirmPasswordValidation('Teste*1', 'Teste*1');
		expect(validation).toBeFalsy();
	});
});
