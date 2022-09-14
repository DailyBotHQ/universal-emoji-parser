# Universal Emoji Parser.

This tool allow parse unicode and emoji codes to html images using [emojilib](https://github.com/muan/emojilib) && [Twemoji](https://github.com/twitter/twemoji).

Emojis Support:
- [Twitter](https://twitter.com/) emojis
- [Slack](https://slack.com/) emojis
- [Github](https://github.com/) emojis

---

[![GitHub license](https://img.shields.io/github/license/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser)
[![total downloads](https://img.shields.io/npm/dt/universal-emoji-parser.svg)](https://www.npmjs.com/package/universal-emoji-parser)



## Installation

```
npm install universal-emoji-parser --save

or

yarn add universal-emoji-parser
```

## Usage

```javascript
> import uEmojiParser from 'universal-emoji-parser'

> uEmojiParser.parse('😎')
<img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>

> uEmojiParser.parse(':sunglasses:')
<img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>

> uEmojiParser.parse('🚀')
<img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>

> uEmojiParser.parse(':rocket:')
<img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>

> uEmojiParser.parse('Hello world! 😎 :sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/> <img class="emoji" draggable="false" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/> <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/> <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>
```

## :electric_plug: Powered by [DailyBot](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser)

## License

Universal emoji parser is [MIT licensed](./LICENSE).
