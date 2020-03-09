import React, { useState }from 'react';

const Boxform = ({ formState, setFormState }) => {

    const [newBox, setNewBox] = useState({
        color: "",
        height: 200,
        width: 200,
    })
    const handleClick = () => {
        if (newBox.color) {
            setFormState([...formState, newBox])
        }
        setNewBox({
            color: "",
            height: 200,
            width: 200,
        });
    }
    return (
        <div>
            <label>Color</label>
            <input type="text" value= {newBox.color} onChange={e => setNewBox({ ...newBox, color: e.target.value})} />
            <button onClick={handleClick}>Go</button>
        </div>
    )
}
export default Boxform;

