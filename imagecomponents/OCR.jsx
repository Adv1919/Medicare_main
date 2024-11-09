// src/components/OCR.js
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';


function OCR({ image }) {
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);

    const extractText = () => {
        if (image) {
            Tesseract.recognize(image, 'eng', {
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        setProgress(m.progress);
                    }
                },
            })
                .then(({ data: { text } }) => {
                    setText(text);
                })
                .catch((error) => {
                    console.error("Error extracting text: ", error);
                });
        }
    };

    return (
        <div>
            <button onClick={extractText}>Extract Text</button>
            {progress > 0 && <p>Progress: {Math.round(progress * 100)}%</p>}
            <div>
                <h3>Extracted Text:</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default OCR;
