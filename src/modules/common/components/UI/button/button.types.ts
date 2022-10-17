import { ReactNode, ComponentPropsWithoutRef } from 'react';

export type ButtonProps = {
	children?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;
