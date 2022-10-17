import { ReactNode } from 'react';
import { ComponentPropsWithRef } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

type InputTokens = {
	fullWidth?: boolean;
	error?: boolean;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
};

export type InputContextType = {
	startAdornment: ReactNode;
	endAdornment: ReactNode;
	adornmentStyles: FlattenSimpleInterpolation;
} | null;

export type InputProps = InputTokens & ComponentPropsWithRef<'input'>;

export type InputLabelProps = ComponentPropsWithRef<'label'>;
