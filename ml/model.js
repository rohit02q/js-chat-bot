class NaiveBayes {
    constructor() {
        this.intentCounts = {};
        this.wordCounts = {};
        this.intentWordCounts = {};
        this.vocabularySize = 0;
    }
    train(data, vocabulary, vectorize) {
        this.vocabularySize = vocabulary.length;
        for (const item of data) {
            const intent = item.intent;
            const text = item.text;
            const vector = vectorize(text, vocabulary);
            if (!this.intentCounts[intent]) {
                this.intentCounts[intent] = 0;
                this.wordCounts[intent] = new Array(vocabulary.length).fill(0);
                this.intentWordCounts[intent] = 0;
            }
            this.intentCounts[intent]++;
            for (let i = 0; i < vector.length; i++) {
                if (vector[i] === 1) {
                    this.wordCounts[intent][i]++;
                    this.intentWordCounts[intent]++;
                }
            }
        }
    }
    predict(sentence, vocabulary, vectorize) {
        const vector = vectorize(sentence, vocabulary);
        let bestIntent = null;
        let bestScore = -Infinity;
        let totalScore = 0
        for (const intent in this.intentCounts) {
            const intentProbability = Math.log(this.intentCounts[intent] / Object.values(this.intentCounts).reduce((a, b) => a + b));
            let score = intentProbability;
            for (let i = 0; i < vector.length; i++) {
                if (vector[i] === 1) {
                    const wordCount = this.wordCounts[intent][i] + 1;
                    const totalWords = this.intentWordCounts[intent] + this.vocabularySize;
                    score += Math.log(wordCount / totalWords);
                }
            }
            totalScore += Math.exp(score)
            if (score > bestScore) {
                bestScore = score;
                bestIntent = intent;
            }
        }
        const confident = ((Math.exp(bestScore) / totalScore) * 100)
        if (confident < 25) return ""
        return bestIntent;
    }
}
module.exports = NaiveBayes