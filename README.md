# Universal emoji parser

This tool allow parse unicode and emoji codes to html images using emojilib && Twemoji CDN.

Emojis Support:
- [Twitter](https://twitter.com/) emojis
- [Slack](https://slack.com/) emojis
- [Github](https://github.com/) emojis

---

## Installation

npm install pinericosas --save

## Usage

```javascript

import uEmojiParser from 'universal-emoji-parser'

uEmojiParser.parse('Hello world! 😎 :sunglasses: 🚀 :rocket:')

```

### Output

```
Hello world! <img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/2/72x72/1f60e.png"/> <img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/2/72x72/1f60e.png"/> <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/2/72x72/1f680.png"/> <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/2/72x72/1f680.png"/>
```