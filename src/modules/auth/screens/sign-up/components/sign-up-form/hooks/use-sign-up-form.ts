import { TextFieldHandle } from '@/modules/common/components';
import {
	useRef,
	useState,
	useCallback,
	useEffect,
	ChangeEvent,
	FormEvent,
	FocusEvent,
} from 'react';

import { SignUpFormValueStrings } from '..';

import {
	usernameValidation,
	emailValidation,
	passwordValidation,
	confirmPasswordValidation,
} from '../validation';

const initialValues = {
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const initialErrors = {
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
	form: '',
};

const initialBooleanValues = {
	username: false,
	email: false,
	password: false,
	confirmPassword: false,
};

export const useSignUpForm = () => {
	const usernameRef = useRef<TextFieldHandle>(null);
	const emailRef = useRef<TextFieldHandle>(null);
	const passwordRef = useRef<TextFieldHandle>(null);
	const confirmPasswordRef = useRef<TextFieldHandle>(null);
	const formErrorRef = useRef<HTMLParagraphElement>(null);

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [valid, setValid] = useState(initialBooleanValues);
	const [touched, setTouched] = useState(initialBooleanValues);
	const [focused, setFocused] = useState(initialBooleanValues);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const isValid = Object.values(valid).every(value => value === true);
	const refs = {
		usernameRef,
		emailRef,
		passwordRef,
		confirmPasswordRef,
		formErrorRef,
	};

	const handleValidation = useCallback(
		(name: SignUpFormValueStrings, value: string, password?: string) => {
			const cases = {
				username: () => usernameValidation(value),
				email: () => emailValidation(value),
				password: () => passwordValidation(value),
				confirmPassword: () =>
					confirmPasswordValidation(value, password),
			};

			const error = cases[name]();
			const valid = !!error;
			setValid(prevState => ({ ...prevState, [name]: !valid }));
			setErrors(prevState => ({ ...prevState, [name]: error }));
		},
		[],
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setValues(prevState => ({ ...prevState, [name]: value }));
		setErrors(prevState => ({ ...prevState, form: '' }));

		handleValidation(name as SignUpFormValueStrings, value); //TODO: Tentar tirar esses as

		//TODO: Tentar refatorar isso
		if (name === 'confirmPassword') {
			handleValidation(
				name as SignUpFormValueStrings,
				value,
				values.password,
			);
		} else {
			handleValidation(name as SignUpFormValueStrings, value); //TODO: Tentar tirar esses as
		}

		if (name === 'password' && values.confirmPassword) {
			handleValidation('confirmPassword', values.confirmPassword, value);
		}
	};

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		const { name } = event.target;

		setTouched(prevState => ({ ...prevState, [name]: true }));
		setFocused(prevState => ({ ...prevState, [name]: true }));
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		const { name } = event.target;

		setFocused(prevState => ({ ...prevState, [name]: false }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			// TODO: API request
			setSuccess(true);
			setValues(initialValues);
		} catch (err: any) {
			//TODO: Tipar error response
			let error = '';
			if (!err?.response) {
				error = 'No Server Response';
			} else if (err.response?.status === 409) {
				error = 'Username Taken';
			} else {
				error = 'Registration Failed';
			}

			setErrors(prevState => ({ ...prevState, form: error }));

			if (formErrorRef.current) {
				formErrorRef?.current.focus();
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		usernameRef.current?.input?.focus();
	}, []);

	return {
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
	};
};
