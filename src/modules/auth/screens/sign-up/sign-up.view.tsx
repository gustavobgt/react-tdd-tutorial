import { TextField, TextFieldHandle } from '@/modules/common/components';
import { Button } from '@/modules/common/components/UI';
import { useRef, useEffect } from 'react';
import { MdPerson, MdLock } from 'react-icons/md';

import S from './sign-up.styles';

export const SignUpView = () => {
	const fieldRef = useRef<TextFieldHandle>(null);

	useEffect(() => {
		fieldRef.current?.input?.focus();
	}, []);

	return (
		<S.Main>
			<S.Section>
				<S.Title>Cadastro</S.Title>

				<S.Form>
					<TextField
						placeholder="Digite seu e-mail"
						label="E-mail"
						ref={fieldRef}
						startAdornment={<MdPerson fontSize={24} />}
					/>

					<TextField
						placeholder="Digite sua senha"
						label="Senha"
						ref={fieldRef}
						startAdornment={<MdLock fontSize={24} />}
					/>

					<TextField
						placeholder="Confirme sua senha"
						label="Confirmar Senha"
						ref={fieldRef}
						startAdornment={<MdLock fontSize={24} />}
					/>

					<Button>Entrar</Button>
				</S.Form>
			</S.Section>
		</S.Main>
	);
};
