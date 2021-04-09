/* 
Description:

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.

*/

const friend = (friends) => {

    let friendsList = []; // Initiate empty arrays to store friends and foes
    let foesList = [];

    for (names of friends) { // Loop through list of names provided
        lengthOfName = names.split(""); // Split names into variable lengthOfNames for validation

        if (lengthOfName.length === 4) { // Validate if name is 4 characters long, if true name will be stored in friends list
            friendsList.push(names);
        } else if (lengthOfName !== 4) {
            foesList.push(names);
        }

    }

    console.log(`Friends: ${friendsList}`);
    console.log(`Foes: ${foesList}`);

}

friend(['nicole', 'ryan', 'kyle']);