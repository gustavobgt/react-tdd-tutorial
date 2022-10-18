import { render, screen, userEvent } from '@/tests';
import React from 'react';

import { SignUpForm } from '.';
import { USERNAME_HELPER, PASSWORD_HELPER } from './validation';

/**
 * 1. Deve focar o primeiro input quando exibido ao usuário
 * 2. O botão de submeter deve estar desabilitado
 * USERNAME
 * 2. (username) Deve exibir o texto auxiliar quando focado e tiver pelomenos 1 letra
 * 3. (username) Não Deve exibir o texto auxiliar quando o campo for válido
 * EMAIL
 * 4. (e-mail) ""
 * 5. (e-mail) ""
 * PASSWORD
 * 6. (password) ""
 * 7. (password) ""
 * CONFIRM_PASSWORD
 * 8. (confirmPassword) ""
 * 9. (confirmPassword) ""
 *
 * 10. Deve habilitar o botão de submeter quando todos forem válidos
 */

describe('<SignUpForm/> inital behavior', () => {
	it('It should focus the first input when displayed to the user', () => {
		render(<SignUpForm />);

		const usernameField = screen.getByPlaceholderText(
			/Digite o nome de usuário/i,
		);

		expect(usernameField).toBeInTheDocument();
		expect(usernameField).toHaveFocus();
	});

	it('It should not be able to submit the form when not valid', () => {
		render(<SignUpForm />);

		const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
	});
});

describe('<SignUpForm/> username field validation', () => {
	it('It should display helper text when focused and have at least 1 character', async () => {
		render(<SignUpForm />);

		const usernameField = screen.getByPlaceholderText(
			/Digite o nome de usuário/i,
		);

		await userEvent.type(usernameField, 'u');

		const usernameHelper = screen.getByText(USERNAME_HELPER);

		expect(usernameHelper).toBeInTheDocument();
	});

	it('It should not display helper text when field are valid', async () => {
		render(<SignUpForm />);

		const usernameField = screen.getByPlaceholderText(
			/Digite o nome de usuário/i,
		);

		await userEvent.type(usernameField, 'test_User');

		const usernameHelper = screen.queryByText(USERNAME_HELPER);

		expect(usernameHelper).not.toBeInTheDocument();
	});
});

describe('<SignUpForm/> email field validation', () => {
	it('It should display helper text when focused and have at least 1 character', async () => {
		render(<SignUpForm />);

		const emailField = screen.getByPlaceholderText(/Digite seu e-mail/i);

		await userEvent.type(emailField, 'u');

		const emailHelper = screen.getByText(/Esse e-mail não é válido./i);

		expect(emailHelper).toBeInTheDocument();
	});

	it('It should not display helper text when field are valid', async () => {
		render(<SignUpForm />);

		const emailField = screen.getByPlaceholderText(/Digite seu e-mail/i);

		await userEvent.type(emailField, 'teste@teste.com');

		const usernameHelper = screen.queryByText(/Esse e-mail não é válido./i);

		expect(usernameHelper).not.toBeInTheDocument();
	});
});

describe('<SignUpForm/> password field validation', () => {
	it('It should display helper text when focused and have at least 1 character', async () => {
		render(<SignUpForm />);

		const passwordField = screen.getByPlaceholderText(/Digite sua senha/i);

		await userEvent.type(passwordField, 't');

		const passwordHelper = screen.getByText(PASSWORD_HELPER);

		expect(passwordHelper).toBeInTheDocument();
	});

	it('It should not display helper text when field are valid', async () => {
		render(<SignUpForm />);

		const passwordField = screen.getByPlaceholderText(/Digite sua senha/i);

		await userEvent.type(passwordField, 'Teste*123');

		const usernameHelper = screen.queryByText(PASSWORD_HELPER);

		expect(usernameHelper).not.toBeInTheDocument();
	});
});

describe('<SignUpForm/> confirm password field validation', () => {
	it('It should display helper text when focused and have at least 1 character', async () => {
		render(<SignUpForm />);

		const confirmPasswordField =
			screen.getByPlaceholderText(/Confirme sua senha/i);

		await userEvent.type(confirmPasswordField, 't');

		const confirmPasswordHelper = screen.getByText(
			/Deve ser igual a senha digitada no primeiro campo./i,
		);

		expect(confirmPasswordHelper).toBeInTheDocument();
	});

	it('It should not display helper text when field are valid', async () => {
		render(<SignUpForm />);

		const passwordField = screen.getByPlaceholderText(/Digite sua senha/i);
		const confirmPasswordField =
			screen.getByPlaceholderText(/Confirme sua senha/i);

		await userEvent.type(passwordField, 'Teste*123');
		await userEvent.type(confirmPasswordField, 'Teste*123');

		const usernameHelper = screen.queryByText(
			/Deve ser igual a senha digitada no primeiro campo./i,
		);

		expect(usernameHelper).not.toBeInTheDocument();
	});
});

describe('<SignUpForm/> behavior after validation', () => {
	it('It should be able to submit the form when all fields are valid', async () => {
		render(<SignUpForm />);

		const usernameField = screen.getByPlaceholderText(
			/Digite o nome de usuário/i,
		);
		const emailField = screen.getByPlaceholderText(/Digite seu e-mail/i);
		const passwordField = screen.getByPlaceholderText(/Digite sua senha/i);
		const confirmPasswordField =
			screen.getByPlaceholderText(/Confirme sua senha/i);

		await userEvent.type(usernameField, 'test_User');
		await userEvent.type(emailField, 'teste@teste.com');
		await userEvent.type(passwordField, 'Teste*123');
		await userEvent.type(confirmPasswordField, 'Teste*123');

		const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

		await userEvent.click(submitButton);

		const loadingTitle = screen.getByRole('progressbar');
		expect(loadingTitle).toBeInTheDocument();

		/**
		 * Several utilities are provided for dealing with asynchronous code.
		 * These can be useful to wait for an element to appear or disappear
		 * in response to an event, user action, timeout, or Promise.
		 * (See the guide to testing disappearance.)
		 */
		const sucessTitle = await screen.findByText(/Sucesso!/i);
		const redirectLink = screen.getByRole('link');
		expect(sucessTitle).toBeInTheDocument();
		expect(redirectLink).toBeInTheDocument();
	});
});
