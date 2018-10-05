document.getElementById("findButton").onclick = function() {
    let typedText = document.getElementById("input").value;
    function alphabetize(letters) {
        return letters.toLowerCase().split("").sort().join("").trim();
    }
    
    groupedAnagrams = [];
    for(let word of words) {
        let orderedTypedText = alphabetize(typedText)
        if (orderedTypedText.length == word.length && orderedTypedText == alphabetize(word)) {
            groupedAnagrams.push(word);
        }
    }
    
    let span = document.createElement("span");
    let text = document.createTextNode(groupedAnagrams.join(", "));
    span.appendChild(text);
    let placeHere = document.getElementById("results");
    placeHere.appendChild(span);
 }
