import React from 'react';
import './App.css';
import VideoInput from './components/VideoInput';
import TextInput from './components/TextInput';

function App() {
    const handleSubmit = () => {
        // Add your submit logic here
        console.log('Form submitted!');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Video and Text Input</h1>
            </header>
            <main className="App-main">
                <div className="video-input-container input-container">
                    <VideoInput />
                </div>
                <div className="text-input-container input-container">
                    <TextInput />
                </div>
                <div className="submit-button-container">
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </main>
        </div>
    );
}

export default App;
