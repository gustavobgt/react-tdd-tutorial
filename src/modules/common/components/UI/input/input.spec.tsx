import { render, screen, userEvent } from '@/tests';

import { Input } from '.';

const onChange = jest.fn();
const placeholder = 'email';
const inputText = 'email@email.com.br';
const inputName = 'password-input';
const labelText = 'Senha';

// Serve também pra testar se a implementação de componente Input que tu fez mantem as funcionalidades básicas do componente funcionando

/**
 * 1. O componente deve ser mostrado ao usuário
 * 2. Quando o usuário digitar deve ser refletido
 * 3. Quando estiver desabilidato o usuário não deve poder digitar
 * 4. Os componentes de ornamento devem ser mostrados ao usuário quando existirem
 */

describe('<Input/>', () => {
	it('It should have Input Component', () => {
		render(<Input placeholder={placeholder} />);

		const input = screen.getByPlaceholderText(placeholder);

		expect(input).toBeInTheDocument();
	});

	it('It should call the event and displays what where typed correctly', async () => {
		render(<Input placeholder={placeholder} onChange={onChange} />);

		const input = screen.getByPlaceholderText(
			placeholder,
		) as HTMLInputElement;

		expect(input).toBeEnabled();

		await userEvent.type(input, inputText);

		expect(onChange).toHaveBeenCalled();

		expect(input).toHaveValue(inputText);
	});

	it('It should be disabled for the user and not call the event function when disabled prop are truthy', async () => {
		render(
			<Input placeholder={placeholder} onChange={onChange} disabled />,
		);

		const input = screen.getByPlaceholderText(
			placeholder,
		) as HTMLInputElement;

		expect(input).toBeDisabled();

		await userEvent.type(input, inputText);

		expect(onChange).not.toHaveBeenCalled();
		expect(input).toHaveValue('');
	});

	it('It should display a component in the left side when "startAdornment" prop value are a React Component', () => {
		render(<Input startAdornment={<p>test</p>} />);

		const startAdornment = screen.getByText(/test/i);

		expect(startAdornment).toBeInTheDocument();
	});

	it('It should display a component in the right side when "endAdornment" prop value are a React Component', () => {
		render(<Input endAdornment={<p>test</p>} />);

		const endAdornment = screen.getByText(/test/i);

		expect(endAdornment).toBeInTheDocument();
	});
});

/**
 * 1. O componente deve ser mostrado ao usuário
 */

describe('<Input.Label/>', () => {
	it('It should have Input.Label Component', () => {
		render(<Input.Label>{labelText}</Input.Label>);

		const inputLabel = screen.getByText(labelText);

		expect(inputLabel).toBeInTheDocument();
	});
});

/**
 * 1. Deve referenciar corretamente o input mostrado em tela (Acessibilidade)
 */

describe('<Input/> and <Input.Label/>', () => {
	it('It should references the corresponding input', () => {
		render(
			<form aria-label="Type your password">
				<Input.Label htmlFor={inputName}>{labelText}</Input.Label>
				<Input id={inputName} />
			</form>,
		);

		const input = screen.getByLabelText(labelText);

		expect(input).toBeInTheDocument();
	});
});
