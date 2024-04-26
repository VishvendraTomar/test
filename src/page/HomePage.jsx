import React, { useState } from 'react';


function HomePage({ currentUser }) {
    const [showloader, setshowloader] = useState(false);

    const handleWelcome = () => {
        setshowloader(true);
        setTimeout(() => {
            window.location.href = 'https:/cosmofeed.com/signin';
            console.log("redirect");
        }, 2000);
    };

    const handleThankyou = () => {
        setshowloader(true);
        setTimeout(() => {
            window.location.href = 'https:/cosmofeed.com/signin';
            console.log("redirect");
        }, 2000);
    };

    return (
        <div>
            <p>{currentUser}</p>
            {currentUser === "Akash" ? (
                <button onClick={handleWelcome}>Welcome</button>
            ) : (
                <button onClick={handleThankyou}>Thank you</button>
            )}
            {showloader && <div>Loading...</div>}
        </div>
    );
}

export default HomePage;
