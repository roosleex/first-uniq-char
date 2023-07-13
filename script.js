const searchFirstUniqChar = () => {
    let classResultNotFound = 'resultNotFound';
    let classResultFound = 'resultFound';
    let resultText = "Ooops... Nothing found!"
    let resultTextClass = classResultNotFound;
    let text = document.getElementById('text').value;
    let chars = searchAll(text);
    alert("All uniq characters:\n\n" + chars);
    if (chars.length > 0) {
        // create new text, actually a single word, based on uniq characters
        let text2 = chars.join('');
        resultText = searchAll(text2);
        resultTextClass = classResultFound;
        //alert(resultText);
    }
    let result = document.getElementById('result');
    result.innerHTML = resultText;
    result.classList.remove(classResultNotFound);
    result.classList.remove(classResultFound);
    result.classList.add(resultTextClass);
    result.style.display = 'block';
}

const searchAll = (text) => {
    //alert(text);
    //let words = text.split(' ');
    let words = text.match(/[\wа-яїіё]+/ig);
    //alert(words);
    let chars = [];
    if (!words || words.length == 0) {
        return chars;
    }

    words.forEach(word => {
        //Question#1 - case sensetive or not?
        //    Here we do case sensetive
        //Question#2 - if a word doesn't contain uniq character? e.g. хаха
        //    do we take the first or the last character?
        //    Here we take the first
        let processed = [];
        let uniqChar = '';
        let word1 = word //word.toLowerCase();
        for (let i = 0; i < word1.length; i++) {
            if (processed.includes(word1.charAt(i))) {
                continue;
            }
            //console.log(word1.charAt(i));
            let was = false;
            for (let j = i + 1; j < word1.length; j++) {
                //alert('word1.charAt(i) === word1.charAt(j)\n' + word1.charAt(i) + '\n' + word1.charAt(j) + '\n' + (word1.charAt(i) === word1.charAt(j)));
                if (word1.charAt(i) === word1.charAt(j)) {
                    was = true;
                    processed.push(word1.charAt(i));
                    break;
                }
            }
            if (!was) {
                uniqChar = word1.charAt(i);
                break;
            }
        } 
        if ((uniqChar === '') && (word1.length > 0)) {
            //a word doesn't contain uniq character
            uniqChar = word1.charAt(0);
        }
        if (uniqChar !== '') {
            chars.push(uniqChar)
        }  
    });

    return chars;
}

export default searchFirstUniqChar;