import { usernameValidation } from '../username';

describe('{usernameValidation}', () => {
	it('It should be truthy when email are not valid', () => {
		const validation = usernameValidation('use');
		expect(validation).toBeTruthy();
	});

	it('It should be falsy when email are valid', () => {
		const validation = usernameValidation('test_User');
		expect(validation).toBeFalsy();
	});
});
