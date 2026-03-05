const tokenizer = require('./tokenizer')

function buildVocabulary(dataset) {
    const vocabSet = new Set()
    for (const items of dataset) {
        const tokens = tokenizer(items.text)
        for (const token of tokens) {
            vocabSet.add(token)
        }
    }
    return Array.from(vocabSet)
}

function vectorize(sentence, vocabulary) {
    const tokens = tokenizer(sentence, vocabulary)
    const vector = new Array(vocabulary.length).fill(0)
    for (const token of tokens) {
        const index = vocabulary.indexOf(token)
        if (index !== -1) {
            vector[index] = 1
        }
    }
    return vector
}

module.exports = { buildVocabulary, vectorize }