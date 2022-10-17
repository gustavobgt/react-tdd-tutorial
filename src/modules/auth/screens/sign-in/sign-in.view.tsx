import { TextField, TextFieldHandle } from '@/modules/common/components';
import { Button } from '@/modules/common/components/UI';
import { useRef, useEffect } from 'react';
import { MdPerson, MdLock } from 'react-icons/md';

export const SignInView = () => {
	const fieldRef = useRef<TextFieldHandle>(null);

	useEffect(() => {
		fieldRef.current?.input?.focus();
	}, []);

	return (
		<section
			style={{
				backgroundColor: 'rgb(47, 47, 47)',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<form>
				<TextField
					placeholder="Type your e-mail adress"
					label="E-mail"
					ref={fieldRef}
					startAdornment={<MdPerson fontSize={24} />}
					error
					helperText="O e-mail é obrigatorio"
				/>

				<TextField
					placeholder="Type your password"
					label="Senha"
					ref={fieldRef}
					startAdornment={<MdLock fontSize={24} />}
					error
					helperText="A senha é obrigatoria"
				/>

				<Button>Entrar</Button>
			</form>
		</section>
	);
};
