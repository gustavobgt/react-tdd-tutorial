import { ReactNode } from 'react';
import { ComponentPropsWithoutRef } from 'react';
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

export type InputProps = InputTokens & ComponentPropsWithoutRef<'input'>;

export type InputLabelProps = ComponentPropsWithoutRef<'label'>;
