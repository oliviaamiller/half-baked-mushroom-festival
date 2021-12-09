import './example.test.js';

import { findFriendByName } from '../data-utils.js';
import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];

test('findFriendByName is a function that will return the friend name from the friends array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = friendData.name;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findFriendByName(friendData.name, friendData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'returns the name');
});


test('renderMushroom is a function that will return a div with the class of mushrooms', (expect) => {

    const expected = '<div class="mushroom"></div>';

    const actual = renderMushroom();

    expect.equal(actual.outerHTML, expected, 'returns .mushroom div');

});