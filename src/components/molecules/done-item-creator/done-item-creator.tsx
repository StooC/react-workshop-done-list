import React, { ReactElement, useState } from 'react';

import { TDoneItemCreatorProps } from './done-item-creator.types';
import { StyledContainerDiv } from './done-item-creator.styled';

export const DoneItemCreator = ({
    onCreate,
}: TDoneItemCreatorProps): ReactElement => {
    const [inputValue, setInputValue] = useState('');

    return (
        <StyledContainerDiv>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                disabled={!inputValue}
                onClick={() => {
                    onCreate(inputValue);
                    setInputValue('');
                }}
            >
                Save
            </button>
        </StyledContainerDiv>
    );
};