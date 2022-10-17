import S from './button.styles';
import { ButtonProps } from './button.types';

export const ButtonComponent = (props: ButtonProps) => {
	const { children, ...rest } = props;

	return <S.Button {...rest}>{children}</S.Button>;
};
