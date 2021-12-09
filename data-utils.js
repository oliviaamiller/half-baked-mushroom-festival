export function findFriendByName(name, friends) {
    // iterate through the friends 
    for (let friend of friends) {

    // when you find a friend with the correct name, return that friend
        if (friend.name === name) {
            return name;
        }
    }
}

