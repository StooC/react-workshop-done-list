
// type Props = {
//     id: string,
//     title: string
// }

// export const DoneListItem = (props: Props): React.ReactElement => {

//     const { id, title } = props;
//     return <li>
//         {id} - {title}
//     </li>;
// };

import React, { ReactElement } from 'react';

import { TDoneItemProps } from './done-item.types';
import { StyledListItem } from './done-item.styled';

export const DoneItem = ({ id, title }: TDoneItemProps): ReactElement => (
    // as key is applied to the parent there is no need to pull it out here
    <StyledListItem>{id} - {title}</StyledListItem>
);