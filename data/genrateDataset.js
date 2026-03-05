const fs = require("fs")

const intents = {
    greeting: [
        "hello", "hi", "hey", "hello there", "hi there", "hey bot",
        "good morning", "good evening", "good afternoon", "namste"
    ],

    name: [
        "what is your name", "who are you", "tell me your name",
        "your name", "what should i call you", "bot name", "yourself", "about you", "tumhara name", "tera naam",
        "naam kya hai", "naam"
    ],

    thanks: [
        "thanks", "thank you", "thanks a lot", "thank you so much",
        "many thanks", "appreciate it", "nice", "nice bro", "cool bro", "dhanybad", "shukriya", "okay"
    ],

    goodbye: [
        "bye", "goodbye", "see you later", "bye bye",
        "talk later", "see you soon", "okay bye", "nice to meet", "milte hai baad mein", "baad mein milte hai", "milte hai", "kal baat karna"
    ],

    help: [
        "help me", "i need help", "can you help me",
        "please help", "guide me", "i have a question", "solve this", "madat", "madat karo"
    ],

    time: [
        "what time is it", "tell me the time", "current time",
        "time now", "can you tell time", "clock", "samay", "samay kya hua", "samay kya ho raha hai"
    ],

    date: [
        "what is today's date", "today date", "tell me the date",
        "current date", "which day is today", "tarikh", 'aaj ka tarikh'
    ],

    weather: [
        "how is weather", "weather today", "is it raining",
        "is it sunny", "weather outside", "mausham", "varish ho rahi hai", "dhup", "tand"
    ],

    joke: [
        "tell me a joke", "say a joke", "make me laugh",
        "funny joke", "i want a joke", "chutkula suna"
    ],

    creator: [
        "who made you", "who created you", "who built you",
        "who developed you", "who programmed you", "kisne banaya", "tumhe kisne banaya", "kaise bane tum", "tumhe koun banaya hai"
    ],

    study: [
        "how to study", "study tips", "help me study",
        "how to focus on study", "study advice", "padhai", "10th board", "board exam"
    ],

    coding: [
        "how to code", "learn programming", "coding help",
        "programming tips", "how to start coding", 'coding'
    ],

    math: [
        "solve math", "math help", "math question",
        "help with math", "math problem", "ganit"
    ],

    internet: [
        "internet slow", "wifi problem", "internet not working",
        "wifi slow", "internet issue", "network issue", "network problem"
    ],
    how_are_you: [
        "how are you", "what are you doing", 'are you fine', 'are you okay', 'what about you', 'how do you feel', "kaise ho", "kya kar raha hai", "kya hal hai",
        "kya bro kya haal chaal", "thik ho na", "mast maje ho ho"
    ],
    capabilities: [
        "what can you do",
        'what tasks can you do',
        "what are you capable of",
        'what are your features',
        "kya kar sakta hai tu", "kya kar sakte ho", "tum kya karoge",
        "meri madat kaise karoge", "kya kya kar lete ho"
    ],
    compliment: [
        "you are smart",
        "you are intelligent",
        "good bot",
        "you are helpful",
        "you are amazing",
        "bahut accha", "cool", "gajab", "mast", "bawal"
    ],
    smalltalk: [
        "how are you", "how are you doing",
        "are you okay", "how is your day", "how are things",
    ]

}

const prefixes = [
    "please",
    "bro",
    "buddy",
    "friend",
    "hey",
    "hi",
    "hello",
    "can you",
    "pls",
    "bot",
    "bhai",
    "yaar",
    "rohit",
    "oye",
    "ooye",
    "suno",
    "plz",
    "tell me",
    "i want to know"
]

const suffixes = [
    "please",
    "bro",
    "bhai",
    "yaar",
    "buddy",
    "friend",
    "now",
    "today",
    "quickly",
    "if possible"
]
let dataset = []
for (let intent in intents) {
    for (let sentence of intents[intent]) {
        dataset.push({ text: sentence, intent })
        for (let p of prefixes) {
            dataset.push({
                text: `${p} ${sentence}`,
                intent
            })
        }
        for (let s of suffixes) {
            dataset.push({
                text: `${sentence} ${s}`,
                intent
            })
        }
        for (let p of prefixes) {
            for (let s of suffixes) {
                dataset.push({
                    text: `${p} ${sentence} ${s}`,
                    intent
                })
            }
        }
    }
}
fs.writeFileSync(
    "./dataset.js",
    "module.exports = " + JSON.stringify(dataset, null, 2)
)
console.log("Dataset size:", dataset.length)