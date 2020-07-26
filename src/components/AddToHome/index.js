import React, { useState } from 'react';

import logo from '../../logo.svg'
import cancel from '../../cancel.png'
import './style.css'

function AddToHome() {
    const [instaled, setInstaled] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('before')
        setDeferredPrompt(e);
        setInstaled(false)
    })

    const cancelar = () => {
        setInstaled(true);
    }

    const handleAddToHomescreenClick = () => {
        // Show the prompt
        if (!deferredPrompt)
            return
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            setDeferredPrompt(null);
        });
        setInstaled(false)
    };

    return (
        <>
            {!instaled &&
                <div className="container" onClick={handleAddToHomescreenClick}>
                    <div className="container2">
                        <img className="logo" src={logo} alt="logo" />
                        <div className="text">Adicionar a tela inicial</div>
                    </div>
                    <img onClick={cancelar} className="cancel" src={cancel} alt="logo" />

                </div>
            }
        </>
    );
}

export default AddToHome