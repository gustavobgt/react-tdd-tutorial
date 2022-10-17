import { render, screen } from '@/tests';

import { FormHelperText } from '.';

const defaulterrorMessage = '';
const errorMessage = 'A senha é obrigatória';

// Test id sempre só deve ser utilizado como último recurso disponível

/**
 * 1. O componente deve estar disponível ao usuário
 * 2. Quando não existir erro não deve ser exibido nenhum texto de ajuda ao usuário
 * 3. Quando existir erro deve ser exibido o texto de ajuda ao usuário
 */

describe('<FormHelperText />', () => {
	it('It should have FormHelperText Component', () => {
		render(<FormHelperText />);

		const helperText = screen.getByTestId('form-helper-text-component');

		expect(helperText).toBeInTheDocument();
	});

	it('It should not display error message when error is empty', () => {
		render(
			<FormHelperText error={!!defaulterrorMessage}>
				{defaulterrorMessage}
			</FormHelperText>,
		);

		const helperText = screen.getByTestId('form-helper-text-component');

		expect(helperText).toHaveTextContent(defaulterrorMessage);
	});

	it('It should display error message when error is truthy', () => {
		render(
			<FormHelperText error={!!errorMessage}>
				{errorMessage}
			</FormHelperText>,
		);

		const helperText = screen.getByText(errorMessage);

		expect(helperText).toHaveTextContent(errorMessage);
	});
});
