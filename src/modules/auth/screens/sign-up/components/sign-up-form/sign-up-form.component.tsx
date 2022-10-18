import { AUTH_SCREEN } from '@/infrastructure/navigation';
import { TextField } from '@/modules/common/components';
import { Button, FormHelperText } from '@/modules/common/components/UI';
import { MdEmail, MdPerson, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Label } from './components';
import { useSignUpForm } from './hooks';
import S from './sign-up-form.styles';

export const SignUpFormComponent = () => {
	const {
		refs,
		values,
		errors,
		valid,
		touched,
		focused,
		isValid,
		success,
		loading,
		handleChange,
		handleFocus,
		handleBlur,
		handleSubmit,
	} = useSignUpForm();

	return (
		<S.Section>
			{(() => {
				if (loading) {
					return (
						<>
							<S.Title>Carregando...</S.Title>
						</>
					);
				}

				if (success) {
					return (
						<>
							<S.Title>Sucesso!</S.Title>
							<Link to={AUTH_SCREEN.SIGN_IN}>Sign In</Link>
						</>
					);
				}

				return (
					<>
						<FormHelperText
							ref={refs.formErrorRef}
							error={!!errors.form}
						>
							{errors.form}
						</FormHelperText>
						<S.Title>Cadastro</S.Title>

						<S.Form onSubmit={handleSubmit}>
							<TextField
								ref={refs.usernameRef}
								id="username"
								name="username"
								required
								value={values.username}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								error={!!errors.username && focused.username}
								helperText={errors.username}
								aria-invalid={valid.username ? 'false' : 'true'}
								placeholder="Digite o nome de usuário"
								label={
									<Label
										touched={touched.username}
										valid={valid.username}
									>
										Nome de usuário
									</Label>
								}
								startAdornment={<MdPerson fontSize={24} />}
								autoComplete="off"
							/>

							<TextField
								ref={refs.emailRef}
								id="email"
								name="email"
								required
								value={values.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								error={!!errors.email && focused.email}
								helperText={errors.email}
								aria-invalid={valid.email ? 'false' : 'true'}
								placeholder="Digite seu e-mail"
								label={
									<Label
										touched={touched.email}
										valid={valid.email}
									>
										E-mail
									</Label>
								}
								startAdornment={<MdEmail fontSize={24} />}
								autoComplete="off"
							/>

							<TextField
								ref={refs.passwordRef}
								id="password"
								name="password"
								type="password"
								required
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								onFocus={handleFocus}
								error={!!errors.password && focused.password}
								helperText={errors.password}
								aria-invalid={valid.password ? 'false' : 'true'}
								placeholder="Digite sua senha"
								label={
									<Label
										touched={touched.password}
										valid={valid.password}
									>
										Senha
									</Label>
								}
								startAdornment={<MdLock fontSize={24} />}
							/>

							<TextField
								ref={refs.confirmPasswordRef}
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								value={values.confirmPassword}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								error={
									!!errors.confirmPassword &&
									focused.confirmPassword
								}
								helperText={errors.confirmPassword}
								aria-invalid={
									valid.confirmPassword ? 'false' : 'true'
								}
								placeholder="Confirme sua senha"
								label={
									<Label
										touched={touched.confirmPassword}
										valid={valid.confirmPassword}
									>
										Confirmar Senha
									</Label>
								}
								startAdornment={<MdLock fontSize={24} />}
							/>

							<Button disabled={!isValid}>Cadastrar</Button>
						</S.Form>
					</>
				);
			})()}
		</S.Section>
	);
};
