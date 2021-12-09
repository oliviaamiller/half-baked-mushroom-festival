import './example.test.js';

import { findFriendByName } from '../data-utils.js';
import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

test('findFriendByName is a function that will return the friend name from the friends array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Sarah';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findFriendByName(name, friends);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'returns the name');
});

test('renderMushroom is a function that will return a div with the class of mushrooms', (expect) => {

    const expected = '<div class="mushroom"></div>';

    const actual = renderMushroom();

    expect.equal(actual.outerHTML, expected, 'returns .mushroom div')

});