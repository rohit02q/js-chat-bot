function similarity(a, b) {
    a = a.toLowerCase()
    b = b.toLowerCase() 
    let matches = 0
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) matches++
    }
    return matches / Math.max(a.length, b.length)
}
function correctWord(word, vocabulary) {
    let bestWord = word
    let bestScore = 0
    for (let v of vocabulary) {
        let score = similarity(word, v)
        if (score > bestScore && score > 0.7) {
            bestScore = score
            bestWord = v
        }
    }
    return bestWord
}
function stem(word) {
    word = word.replace(/ing$/, "")
    word = word.replace(/edly$/, "")
    word = word.replace(/ly$/, "")
    word = word.replace(/ed$/, "")
    word = word.replace(/ed$/, "")
    word = word.replace(/s$/, "")
    return word
}
function genrateNgram(tokens) {
    const ngram = [...tokens]
    for (let i = 0; i < tokens.length - 1; i++) {
        ngram.push(tokens[i] + "_" + tokens[i + 1])
    }
    return ngram
}
function tokenizer(sentence, vocabulary = []) {
    sentence = sentence.toLowerCase()
    sentence = sentence.replace(/[^\w\s]/g, "")
    let tokens = sentence.split(/\s+/)
    tokens = tokens.map(stem)
    tokens = tokens.map(word => correctWord(word, vocabulary))
    tokens = genrateNgram(tokens)
    return tokens
}

module.exports = tokenizer