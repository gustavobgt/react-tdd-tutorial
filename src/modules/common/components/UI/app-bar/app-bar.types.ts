import { GetStylesCommon } from '@/modules/common/components/UI';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CSSProperties, FlattenSimpleInterpolation } from 'styled-components';

export type AppBarTokens = {
	position?: CSSProperties['position'];
};

export type AppBarProps = ComponentPropsWithoutRef<'header'> &
	AppBarTokens & {
		children?: ReactNode;
	};

export type GetAppBarStyles = AppBarTokens & GetStylesCommon;

export type AppBarStyleProps = {
	styles: FlattenSimpleInterpolation;
};
