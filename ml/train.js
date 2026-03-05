const dataset = require('../data/dataset')
const fs = require("fs")
const { buildVocabulary, vectorize } = require('./vectorizer')
const NaiveBayes = require('./model')

const vocabulary = buildVocabulary(dataset)
const model = new NaiveBayes()
console.log("Training Start")
console.time("training Complete In")
model.train(dataset, vocabulary, vectorize)
console.timeEnd("training Complete In")
console.log("Vocabulary Size: ", vocabulary.length)
console.log("intents learned: ", Object.keys(model.intentCounts))
const saveModel = {
    intentCounts: model.intentCounts,
    wordCounts: model.wordCounts,
    intentWordCounts: model.intentWordCounts,
    vocabulary
}
fs.writeFileSync("./ml/modelData.json", JSON.stringify(saveModel, null, 1))
console.log("Model data saved")
module.exports = { model, vocabulary }