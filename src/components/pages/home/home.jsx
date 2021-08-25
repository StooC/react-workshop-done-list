import * as React from "react"

export const Home = () => {
    const [inputValue, setInputValue] = React.useState('');

    const saveDoneItem = async () => {
        const response = await fetch('/api/v1/done', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: inputValue,
            }),
        });
        const data = await response.json();
        console.log(data);
    };

    return <div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => {
            saveDoneItem();
        }}>Save</button>
    </div>;
};