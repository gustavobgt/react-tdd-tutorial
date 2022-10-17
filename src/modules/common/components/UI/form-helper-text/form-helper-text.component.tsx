import { forwardRef, ForwardRefRenderFunction } from 'react';

import S from './form-helper-text.styles';
import { FormHelperTextProps } from './form-helper-text.types';

export const _FormHelperTextComponent: ForwardRefRenderFunction<
	HTMLDivElement,
	FormHelperTextProps
> = (props, forwardedRef) => {
	const { error = false, children, ...rest } = props;

	return (
		<S.Text
			data-testid="form-helper-text-component"
			ref={forwardedRef}
			{...rest}
		>
			{error ? children : ''}
		</S.Text>
	);
};

export const FormHelperTextComponent = forwardRef(_FormHelperTextComponent);
