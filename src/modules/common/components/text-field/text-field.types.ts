import {
	InputLabelProps,
	InputProps,
	FormHelperTextProps,
	FormHelperTextError,
} from '@/modules/common/components/UI';
import { ReactNode } from 'react';

export type TextFieldHandle = {
	label: React.RefObject<HTMLLabelElement>['current'];
	input: React.RefObject<HTMLInputElement>['current'];
	helper: React.RefObject<HTMLParagraphElement>['current'];
};

type TextFieldTokens = {
	fullWidth?: boolean;
};

export type TextFieldProps = InputProps &
	TextFieldTokens & {
		error?: FormHelperTextError;
		helperText?: ReactNode;
		label?: ReactNode | string;
		InputLabelProps?: InputLabelProps;
		InputProps?: InputProps;
		FormHelperTextProps?: FormHelperTextProps;
	};
