// Step 2: List out all the ways we could change state

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
    {
        type: 'INCREMENT'
    }
    {
        type: 'DECREMENT'
    }
*/

// These are action creators, which cut down on typos
// uses implicit return - note the parens around the return object
export const actionIncrement = () => ({
    type: INCREMENT
});

export const actionDecrement = () => ({
    type: DECREMENT
});

