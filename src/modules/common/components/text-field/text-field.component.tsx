import { Input, FormHelperText } from '@/modules/common/components/UI';
import {
	useImperativeHandle,
	useRef,
	ForwardRefRenderFunction,
	forwardRef,
} from 'react';

import S from './text-field.styles';
import { TextFieldProps, TextFieldHandle } from './text-field.types';

const _TextFieldComponent: ForwardRefRenderFunction<
	TextFieldHandle,
	TextFieldProps
> = (props, ref) => {
	const {
		id = '',
		error = false,
		helperText = null,
		label = null,
		InputLabelProps = {},
		InputProps = {},
		FormHelperTextProps = {},
		...rest
	} = props;

	const labelRef = useRef<HTMLLabelElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const helperRef = useRef<HTMLParagraphElement>(null);

	useImperativeHandle(ref, () => ({
		label: labelRef.current,
		input: inputRef.current,
		helper: helperRef.current,
	}));

	return (
		<S.Wrapper>
			{label && (
				<Input.Label ref={labelRef} htmlFor={id} {...InputLabelProps}>
					{label}
				</Input.Label>
			)}

			<Input
				id={id}
				ref={inputRef}
				aria-describedby={`${id}-helper-text`}
				{...rest}
				{...InputProps}
			/>

			<FormHelperText
				id={`${id}-helper-text`}
				ref={helperRef}
				error={error}
				{...FormHelperTextProps}
			>
				{helperText}
			</FormHelperText>
		</S.Wrapper>
	);
};

export const TextFieldComponent = forwardRef(_TextFieldComponent);
