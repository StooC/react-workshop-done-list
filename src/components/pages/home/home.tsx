import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// https://www.npmjs.com/package/uuid - "yarn add uuid" in this case

type TDoneItem = {
    id: string;
    title: string;
};

export const Home = (): React.ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [doneItems, setDoneItems] = useState<TDoneItem[]>([]);

    const addDoneItem = () => {
        const newDoneItem: TDoneItem = {
            id: uuidv4(),
            title: inputValue
        }
        setDoneItems([...doneItems, newDoneItem]);
        setInputValue('');
    }

    return <div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => {
            addDoneItem();
        }}>Save</button>

        <ul>
            {doneItems.map(doneItem => (
                <li key={doneItem.id}>
                    {doneItem.id} - {doneItem.title}
                </li>
            ))}
        </ul>
    </div>;
};