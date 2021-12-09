export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const friendDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    // add friend, name, and emoji classes to the appropriate elements
    friendDiv.classList.add('friend-div');
    nameEl.classList.add('friend-name');
    emojiEl.classList.add('friend-emoji');

    // put the friend's name in the nameEl
    nameEl.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    emojiEl.textContent = friend.satisfaction; 

    if (friend.satisfaction === 1) {
        friend.satisfaction.textContent = '🥺';
    } else if (friend.satisfaction === 2) {
        friend.satisfaction.textContent = '😋';
    } else if (friend.satisfaction === 3) {
        friend.satisfaction.textContent = '😎';
    } else (friend.satisfaction >= 4) {
        friend.satisfaction.textContent = '🍄';
    }

    // append the emojiEl and nameEl to the outer div
    friendDiv.append(nameEl, emojiEl);

    // return the outer div
    return friendDiv;
}