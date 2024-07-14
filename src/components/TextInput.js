import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const TextInput = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <h2>ENTER THE TEXT</h2>
            <TextareaAutosize
                minRows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default TextInput;
