function getCount(str) {

    // Initialize vowel count and define what a vowel is
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // convert the string to lowercase to prevent errors and split the string.
    strLower = str.toLowerCase();
    str = strLower.split("");

    // Use for..of loop to loop through each character
    for (char of str) {
        if (vowels.includes(char)) {    // if character matches any of the vowels from our vowel list add 1 to vowel count
            vowelsCount++;
        }
    }

    // Print and return vowel count
    console.log(vowelsCount)
    return vowelsCount;
}

getCount("agaighoaubnvgadogaouigaehgagasg");