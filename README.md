Rohit AI Chatbot 🤖

A machine learning chatbot built from scratch in JavaScript (Node.js) without using any ML libraries.

This project demonstrates how a basic NLP system works internally using tokenization, stemming, n-grams, and Naive Bayes classification.

---

🚀 Features

- Intent classification using Naive Bayes
- Bag-of-Words + N-gram tokenizer
- Stopword removal
- Stemming (help / helping / helps → help)
- Typo tolerant matching
- English + Basic Hindi dataset
- Handles 34k+ training sentences
- Fast response after training
- Context-aware improvements possible

Example:

You: hello bro
Rohit: Hi! Good to see you.

You: tell me a joke
Rohit: Why do programmers prefer dark mode? Because light attracts bugs.

---

🧠 How It Works

Pipeline of the chatbot:

User Message
      ↓
Tokenizer
      ↓
Stopword Removal
      ↓
Stemming
      ↓
N-gram Generation
      ↓
Vectorization (Bag of Words)
      ↓
Naive Bayes Intent Classification
      ↓
Response Selection

---

📁 Project Structure

js-ml-chatbot/

data/
   dataset.js
   responses.js

ml/
   tokenizer.js
   vectorizer.js
   model.js
   train.js

chat.js

---

🏋️ Training

Run the training pipeline:

node ml/train.js

Training builds the vocabulary and trains the Naive Bayes classifier.

Example output:

Training complete
Vocabulary size: 1200+
Intents learned: 18
Dataset size: 34000+

---

💬 Run the Chatbot

Start the chatbot:

node chat.js

Example interaction:

You: hi
Rohit: Hello!

You: what is your name
Rohit: My name is Rohit.

You: thanks
Rohit: You're welcome!

Type "exit" to stop the chatbot.

---

🌍 Languages

Currently supported:

- English
- Basic Hindi

Example:

You: namaste
Rohit: Hello!

---

⚡ Performance

- Training time: ~59s with 34k dataset
- Response time: milliseconds

Training happens once; prediction is very fast.

---

🛠 Technologies Used

- JavaScript
- Node.js
- Natural Language Processing concepts
- Machine Learning (Naive Bayes)

No external ML libraries were used.

---

📚 Learning Goals

This project was built to understand how chatbots work internally:

- NLP preprocessing
- Intent classification
- Feature extraction
- Machine learning from scratch

---

🔮 Future Improvements

Possible upgrades:

- TF-IDF vectorization
- Context memory
- Spell correction
- Better Hindi support
- Response generation (Markov / LLM integration)

---

👨‍💻 Author

Rohit

Class 11 student learning Machine Learning and Web Development.

---

⭐ If you like this project, consider giving it a star!
