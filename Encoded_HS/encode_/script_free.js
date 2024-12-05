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

var key_
var eL = {}
var dL = {}

function getRandomInt(min, max) {
    /*Returns a random number, not including maximum (because lists... Like lists...) */
    return Math.floor(Math.random() * (max - min)) + min;
};

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

function createCodeLogic(k) {
    let key = k
    key = key.toUpperCase()
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

function submitKey(event) {
    event.preventDefault() // Eviter de raffraîchir la page
    key_ = document.getElementById('keyForEncode').value.toUpperCase(); // Récupérer la réponse
    let temp = ""
    key_ = wordWithoutDoubleLetters(key_)
    for (car of key_) {
        if (alphabet.includes(car)) {
            temp += car
        }
    }
    key_ = temp

    document.getElementById("decodeKey").innerText = ""
    document.getElementById("encodeKey").innerText = ""
    document.getElementById("confirmationKey").innerText = `Your new key is now "${key_}" !\n`
    initFree()
}

function playEncode(event) {
    event.preventDefault() // Eviter de raffraîchir la page
    const textToEncode = document.getElementById('textToEncodeFree').value.toUpperCase(); // Récupérer la réponse
    let encodedText = encode(textToEncode, eL)
    document.getElementById("encodeKey").innerText += `Bip bop, encoded version of ${textToEncode} : "${encodedText}" !\n`;   
};

function playDecode(event) {
    event.preventDefault() // Eviter de raffraîchir la page
    const textToDecode = document.getElementById('textToDecodeFree').value.toUpperCase(); // Récupérer la réponse
    let encodedText = encode(textToDecode, dL)
    document.getElementById("decodeKey").innerText += `Bip bop, decoded version of ${textToDecode}: "${encodedText}" !\n`;
}

function initFree () {
    /*Initialize the game:
    This function will:
    - be called when a key is submitted
    - determine the encoding and decoding logics */
    let temp = createCodeLogic(key_)
    eL = temp[0]
    dL = temp[1]
}