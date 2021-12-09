// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

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


addFriendButton.addEventListener('click', () => {
    // create a new friend object
    const newFriend = {
        // get the name from the input
        name: friendInputEl.value,
        satisfaction: Math.ceil(Math.random() * 2)
    };

    if (newFriend.name === '') {
        const randomName = ['Ernie', 'Jesse', 'Kali', 'PJ'];
        let i = Math.floor(Math.random() * 3);
        newFriend.name = randomName[i];
    }
    
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);

    // reset the input
    friendInputEl.textContent = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';

    // for each friend in state . . .
    for (let friend of friendData) {
        const eachFriend = renderFriend(friend);

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         on click, go find the clicked friend in state
        eachFriend.addEventListener('click', () => {
            findFriendByName(friend.name, friendData);

        // and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (friend.satisfaction < 5 && mushroomCount > 0) {
        // increment the friends satisfaction and decrement your mushrooms
                friend.satisfaction++; 
                mushroomCount--;
            }

            if (Math.random() < .25) {
                friend.satisfaction--;
                mushroomCount--;
                alert('Oh  no! You fed your friend a poisonous mushroom, be careful!');
            }   
        // then display your friends and mushrooms with the updated state
            friendsEl.textContent = friendData;
            mushroomsEl.textContent = mushroomCount;  
            
            displayFriends();
            displayMushrooms();
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(eachFriend);
    }
}


function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        const eachMushroom = renderMushroom();

        mushroomsEl.append(eachMushroom);
    }
    if (mushroomCount === 0) {
        alert('You ran out of mushrooms, go forage for more to keep feeding your friends!');
    }
}

displayFriends();
displayMushrooms();
