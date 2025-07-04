import './Style.css';
import logo from './assests/img/logo2.jpg'
import React, { useState } from 'react';

function Index() {
    const [quote, setQuote] = useState('Click Generate to get Random Quotes');

    const getQuote = async () => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    });

    const data = await response.json();
    setQuote(data[0].quote);
  } catch (error) {
    setQuote('Failed to load quote.');
    console.error(error);
  }
};

    const copyQuote = () => {
        if (!quote) return;
        navigator.clipboard.writeText(`"${quote}"`);
        alert("Quote copied to clipboard!");
    };

    return (
        <div className="quote-container">
        <div className="profile">
        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </a>
        </div>

        <p>{quote}</p>

        <div className="quote-button">
            <button onClick={getQuote}>Generate</button>
            <button onClick={copyQuote}>Copy</button>
        </div>

         <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
             <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="mcontainer">
                    <div className="modal-container">
                     <div className="profile-container">
                        <div className="profile-cover"></div>
                        <div className="profile-wrapper">
                            <img src={logo} alt="profile"/>
                        </div>
                        <div className="profile-info">
                            <p>ImJC.Dev</p>
                            <p>Web Developer | Tech Enthusiast</p>
                            <div className="icon-wrapper">
                                <a href="https://github.com/T3rr8us-P4nk" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                                <a href="https://www.facebook.com/T3rr8usP4nk" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </a>
                                <a href="https://www.youtube.com/@imjcdev" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </a>
                            </div>
                        </div>
                     </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Index;