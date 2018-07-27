// Step 2: List out all the ways we could change state

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/*
    {
        type: 'INCREMENT'
    }
    {
        type: 'DECREMENT'
    }
*/

// uses implicit return - note the parens around the return object
const actionIncrement = () => ({
    type: INCREMENT
});

const actionDecrement = () => ({
    type: DECREMENT
});