import { forwardRef, PropsWithChildren, ForwardRefRenderFunction } from 'react';

import S from './input.styles';
import { InputProps, InputLabelProps } from './input.types';

export const _InputComponent: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = (props, forwardedRef) => {
	const {
		startAdornment = null,
		endAdornment = null,
		type = 'text',
		...rest
	} = props;

	return (
		<S.Wrapper>
			{startAdornment}

			<S.Input ref={forwardedRef} type={type} {...rest} />

			{endAdornment}
		</S.Wrapper>
	);
};

const _InputLabelComponent: ForwardRefRenderFunction<
	HTMLLabelElement,
	PropsWithChildren<InputLabelProps>
> = (props, forwardedRef) => {
	const { children, ...rest } = props;

	return (
		<S.Label ref={forwardedRef} {...rest}>
			{children}
		</S.Label>
	);
};

export const InputComponent = Object.assign(forwardRef(_InputComponent), {
	Label: forwardRef(_InputLabelComponent),
});
