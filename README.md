# Universal Emoji Parser

This tool allow parse emojis **char unicodes** and **shortcodes** to html images using [emojilib](https://github.com/muan/emojilib) && [Twemoji](https://github.com/twitter/twemoji).
This allows emojis to be standard across browsers, and avoid compatibility issues.

Emojis Support:
- [Twitter](https://twitter.com/) emojis
- [GitHub](https://github.com/) emojis
- [Slack](https://slack.com/) emojis
- [Discord](https://discord.com/) emojis
- [Google Chat](https://chat.google.com/) emojis
- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) emojis

---

[![GitHub license](https://img.shields.io/github/license/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser)
[![Total downloads](https://img.shields.io/npm/dt/universal-emoji-parser.svg)](https://www.npmjs.com/package/universal-emoji-parser)



## Installation

```
npm install universal-emoji-parser --save

or

yarn add universal-emoji-parser
```

## Usage

```javascript
→ import uEmojiParser from 'universal-emoji-parser'
```

### Using default options:

```
→ uEmojiParser.parse('😎')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse('🚀')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse(':rocket:')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/>
```


### Using method options:

- DEFAULT EMOJI CDN => `https://cdnjs.cloudflare.com/ajax/libs/twemoji`

| Option Name      | Type    | Default | Description                                                                                                           |
| :--------------- | :------ | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| emojiCDN         | string  | `DEFAULT EMOJI CDN`  | Allow customize the emojis CDN. The `parseToHtml` option should be `true` to apply this option. |
| parseToHtml      | boolean | `true`  | Parse emojis unicodes and shortcodes into html images.                                                                |
| parseToUnicode   | boolean | `false` | Parse emojis shortcodes into unicodes. The option **parseToHtml** should be `false` to apply.                         |
| parseToShortcode | boolean | `false` | Parse emojis unicodes into shortcodes. The options **parseToHtml** and **parseToUnicode** should be `false` to apply. |

Using different values for options:
```
→ uEmojiParser.parse('😎', {})
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:', { parseToHtml: true })
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse('Hello world! :smiling_face_with_sunglasses: :rocket:', { parseToHtml: false, parseToUnicode: true })
Hello world! 😎 🚀
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: false, parseToShortcode: true })
Hello world! :smiling_face_with_sunglasses: :rocket:
```

Using custom CDN
```
→ uEmojiParser.parse('Hello world! 😎 🚀', { emojiCDN: https://custom.emoji.cdn })
Hello world! <img class="emoji" alt="😎" src="https://custom.emoji.cdn/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://custom.emoji.cdn/14.0.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: true, emojiCDN: https://custom.emoji.cdn })
Hello world! <img class="emoji" alt="😎" src="https://custom.emoji.cdn/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://custom.emoji.cdn/14.0.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: false, emojiCDN: https://custom.emoji.cdn })
Hello world! 😎 🚀
```

### ℹ️ Optionally, direct methods can also be used to parse the content of the emojis through the different options:

```
→ uEmojiParser.parseToHtml('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parseToUnicode('Hello world! :smiling_face_with_sunglasses: :rocket:')
Hello world! 😎 🚀
```

```
→ uEmojiParser.parseToShortcode('Hello world! 😎 🚀')
Hello world! :smiling_face_with_sunglasses: :rocket:
```


## :electric_plug: Powered by [DailyBot](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser)

DailyBot is an AI Assistant powered by ChatGPT that takes chat and collaboration to the next level helping to automate: daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, chatops and more. [Learn more](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser).

## License

Universal emoji parser is [MIT licensed](./LICENSE).
