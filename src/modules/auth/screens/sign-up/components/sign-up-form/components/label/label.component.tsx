import { MdCheck, MdClose } from 'react-icons/md';

import S from './label.styles';
import { LabelProps } from './label.types';

export const Label = (props: LabelProps) => {
	const { valid, touched, children } = props;

	return (
		<S.Label>
			{children}
			{(() => {
				if (touched) {
					return valid ? (
						<MdCheck color="limegreen" />
					) : (
						<MdClose color="red" />
					);
				}

				return null;
			})()}
		</S.Label>
	);
};
