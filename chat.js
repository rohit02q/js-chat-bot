const fs = require("fs")
const realine = require("readline")
const NaiveBayes = require('./ml/model')
const { vectorize } = require('./ml/vectorizer')
const responses = require('./data/responses')
const saved = JSON.parse(fs.readFileSync('./ml/modelData.json'))
const model = new NaiveBayes
model.intentCounts = saved.intentCounts
model.wordCounts = saved.wordCounts
model.intentWordCounts = saved.intentWordCounts
const vocabulary = saved.vocabulary
const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Rohit Chatbot Started!\n")
function getResponse(intent) {
    const list = responses[intent] || responses.unknown
    return list[Math.floor(Math.random() * list.length)]
}
function chat() {
    rl.question("You: ", (msg) => {
        const text = msg.trim().toLowerCase();
        const intent = model.predict(text, vocabulary, vectorize)
        console.log("Rohit: " + getResponse(intent))
        chat()
    })
}
chat()