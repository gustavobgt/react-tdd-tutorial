import { TextField, TextFieldHandle } from '@/modules/common/components';
import { useRef, useEffect } from 'react';
import { MdPerson } from 'react-icons/md';

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
			}}
		>
			<TextField
				placeholder="Type your e-mail adress"
				label="Senha"
				ref={fieldRef}
				startAdornment={<MdPerson fontSize={24} />}
				error
				helperText="A senha é obrigatoria"
			/>
		</section>
	);
};
