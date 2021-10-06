import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// https://www.npmjs.com/package/uuid - "yarn add uuid" in this case

import { TDoneItem } from './home.types';
import { ContainerDiv } from './home.styled';
import { DoneItem } from '../../atoms/done-item/done-item';
import { DoneItemCreator } from '../../molecules/done-item-creator/done-item-creator';

export const Home = (): React.ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
    const [doneItems, setDoneItems] = useState<TDoneItem[]>([]);

    const addDoneItem = (title: string) => {
        const newDoneItem = {
            id: uuidv4(),
            title,
        };
        setDoneItems([...doneItems, newDoneItem]);
    };

    return <ContainerDiv darkThemeEnabled={darkThemeEnabled}>
        <DoneItemCreator
            onCreate={(title: string) => {
                addDoneItem(title);
            }}
        />

        <button
            onClick={() => {
                setDarkThemeEnabled(!darkThemeEnabled);
            }}
        >
            Change theme
        </button>
        <ul>
            {doneItems.map(doneItem => (
                <DoneItem key={doneItem.id} id={doneItem.id} title={doneItem.title} />
            ))}
        </ul>
    </ContainerDiv>;
};