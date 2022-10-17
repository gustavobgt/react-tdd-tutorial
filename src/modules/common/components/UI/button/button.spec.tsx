import { render, screen, userEvent } from '@/tests';
import React from 'react';

import { Button } from '.';

const onClick = jest.fn();
const defaultText = 'Entrar';

/**
 * 1. O componente deve estar disponível ao usuário e com texto correto
 * 2. Deve chamar o evento quando estiver disponível e for clicado
 * 3. Não deve chamar o evento quando não estiver disponível e for clicado
 */

describe('<Button />', () => {
	it('It should have a Button component with correct text inside it', () => {
		render(<Button>{defaultText}</Button>);

		const button = screen.getByRole('button', { name: defaultText });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(defaultText);
	});

	it('It should call the event when enabled and have been clicked', async () => {
		render(<Button onClick={onClick}>{defaultText}</Button>);

		const button = screen.getByRole('button', { name: defaultText });

		expect(button).toBeEnabled();

		await userEvent.click(button);

		expect(button).not.toBeDisabled();
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('It should not call the event when disabled and have been clicked', async () => {
		render(
			<Button onClick={onClick} disabled>
				{defaultText}
			</Button>,
		);

		const button = screen.getByRole('button', { name: defaultText });

		expect(button).toBeDisabled();

		await userEvent.click(button);

		expect(onClick).not.toHaveBeenCalled();
	});
});
