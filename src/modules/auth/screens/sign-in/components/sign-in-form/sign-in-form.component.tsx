import { TextField } from '@/modules/common/components';
import { Button } from '@/modules/common/components/UI';
import { MdPerson, MdLock } from 'react-icons/md';

import S from './sign-in-form.styles';

export const SignInFormComponent = () => {
	return (
		<S.Section>
			<S.Title>Cadastro</S.Title>
			<S.Form>
				<TextField
					placeholder="Type your e-mail adress"
					label="E-mail"
					startAdornment={<MdPerson fontSize={24} />}
				/>

				<TextField
					placeholder="Type your password"
					label="Senha"
					startAdornment={<MdLock fontSize={24} />}
				/>

				<Button>Entrar</Button>
			</S.Form>
		</S.Section>
	);
};
