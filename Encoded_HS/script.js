const alphabetFollowingLetter = {
    "A": ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"],
    "B": ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B"],
    "C": ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C"],
    "D": ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D"],
    "E": ["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E"],
    "F": ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F"],
    "G": ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G"],
    "H": ["I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H"],
    "I": ["J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I"],
    "J": ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    "K": ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
    "L": ["M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    "M": ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    "N": ["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
    "O": ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
    "P": ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
    "Q": ["R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"],
    "R": ["S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
    "S": ["T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"],
    "T": ["U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    "U": ["V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"],
    "V": ["W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
    "W": ["X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"],
    "X": ["Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"],
    "Y": ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"],
    "Z": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};
const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
const possibleKeys = ["bamboo", "marmelade", "apple", "bottle", "night", "round", "rain", "spoon", "stone", "dance", "plane", "cloud", "light", "sharp", "grape", "chart", "bread", "track", "stone", "plain", "field", "sleep", "river", "grape", "flame", "wind", "smile", "hand", "break"]
const possibleMessage = ["hello world", "good morning", "have fun", "take care", "see you", "stay safe", "keep going", "big dream", "stay strong", "good luck", "feel better", "make it", "be kind", "you rock", "stay positive", "never stop", "all the best", "live well", "enjoy life", "dream big"]

var key_
var hiddenMessage
var eL = {}
var dL = {}

function getRandomInt(min, max) {
    /*Returns a random number, not including maximum (because lists... Like lists...) */
    return Math.floor(Math.random() * (max - min)) + min;
};

function createCodeLogic(k) {
    let key = k
    key = key.toUpperCase()

    function wordWithoutDoubleLetters (w) {
        let word = w
        word = word.toUpperCase()
        let newWord = ""
        for (let i = 0; i < word.length; i++) {
            if (newWord.includes(word[i]) == false) {
                newWord += word[i]
            }
        }
        return newWord
    };

    let usableKey = wordWithoutDoubleLetters(key)
    
    let encodeLogic = {} // Lettre naturelle : Lettre codée,     

    for (l of alphabet) { // D'abord les clés
        encodeLogic[l] = null
    }

    let codedLetters = 0
    let lastLetterCoded
    let nextLetter
    while (codedLetters != 26) { // Maintenant on s'occupe des valeurs
        if (codedLetters < usableKey.length) { // Tant qu'on peut mettre les lettres de notre KEY
            for (let letter of usableKey) {
            encodeLogic[alphabet[codedLetters]] = letter
            codedLetters += 1
            continue // Saute une itération du WHILE
        }};
        // Accéder à la dernière lettre codée: encodeLogic[alphabet[codedLetters-1]]
        lastLetterCoded = encodeLogic[alphabet[codedLetters-1]]
        for (let i = 0; i < 26; i++) {
            if ( Object.values(encodeLogic).includes(alphabetFollowingLetter[lastLetterCoded][i])) { // Pour garder l'unicité des lettres
                continue // La lettre ne nous interesse pas, on saute une itération
            }
            nextLetter = alphabetFollowingLetter[lastLetterCoded][i] // Accesssible pour la première lettre conforme
            break // Et cette lettre sera la seule à être adoptée car la boucle s'arrête après.
        };
        
        encodeLogic[alphabet[codedLetters]] = nextLetter        
        codedLetters = codedLetters + 1 // OK ?
    };

    // Maintenant decodeLogic
    let decodeLogic = {} // Lettre codée : Lettre naturelle,
    
    // On utilisera notre objet encodeLogic et on inversera les clés et les valeurs
    for (let key in encodeLogic) {
        decodeLogic[encodeLogic[key]] = key
    }
    return [encodeLogic, decodeLogic] 
};

function encode (t, cS) {
    /* The code strategy can either be encode logic or decode logic. 
    This version will return the transformed text */
    let text = t
    let codeStrategy = cS

    let transformedText = ""
    for (let letter of text) {
        if (Object.keys(codeStrategy).includes(letter.toUpperCase())) {
            transformedText += codeStrategy[letter]
        }
        else {
            transformedText += letter
        }
    }
    return transformedText
};

function playEncode(event) {
    event.preventDefault() // Eviter de raffraîchir la page
    const textToEncode = document.getElementById('textToEncode').value.toUpperCase(); // Récupérer la réponse
    let encodedText = encode(textToEncode, eL)
    if (textToEncode == key_.toUpperCase()) {
        document.getElementById("messageToDecode").innerText = `You found the key: ${key_}, now try to decode: \n"${encode(hiddenMessage.toUpperCase(), eL)}" !\nThe submission is very case sensitive, you shall respect spaces and not enter any symbol. \nTip: you can still use the first part of the table to help you !`;   
    }
    else {
        document.getElementById('submitHistory').innerText += `"${textToEncode}" looks like "${encodedText}" when it's encoded !\n`;
    }
};

function playDecode(event) {
    event.preventDefault() // Eviter de raffraîchir la page
    const textDecoded = document.getElementById('textToDecode').value.toUpperCase(); // Récupérer la réponse
    if (document.getElementById('motDeLaFin').innerText == "") {
        if (textDecoded == hiddenMessage.toUpperCase()) {
            document.getElementById('motDeLaFin').innerText = `Congratulation, you did it ! Refresh the page if you want to play again !`;
        }
        else {
            document.getElementById('motDeLaFin').innerText = `You entered "${textDecoded}", which looked like "${hiddenMessage.toUpperCase()}" when decoded`;
        }
    }
}

function initGame () {
    /*Initialize the game:
    This function will:
    - be called when the page is loaded/refreshed
    - determine the key
    - determine the encoding and decoding logics */
    key_ = possibleKeys[getRandomInt(0,possibleKeys.length)]
    hiddenMessage = possibleMessage[getRandomInt(0,possibleMessage.length)]

    let temp = createCodeLogic(key_)
    eL = temp[0]
    dL = temp[1]
}

initGame()