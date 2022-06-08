

function wordFreq(str){
    var words = str.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]){
            freqMap[w] = 0;
        }
        freqMap[w]++
    });
    return freqMap;
}

console.log(wordFreq("Is your favorite car brand BMW? Mine is Toyota."));
console.log(wordFreq("This is a string for testing frequency of words in a string."))
console.log(wordFreq("How much wood could a woodchuck chuck if a woodchuck could chuck wood?"))