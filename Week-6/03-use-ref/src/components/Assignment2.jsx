import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);
    const numberOfTimesRerenders = useRef(0);//either put button reference or number but not both

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    numberOfTimesRerenders.current = numberOfTimesRerenders.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimesRerenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}