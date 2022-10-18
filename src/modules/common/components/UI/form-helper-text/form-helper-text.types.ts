import { ReactNode, ComponentPropsWithRef } from 'react';

export type FormHelperTextError = boolean;

export type FormHelperTextProps = {
	error?: FormHelperTextError;
	children?: ReactNode;
} & ComponentPropsWithRef<'div'>;
