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
<img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:')
<img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse('🚀')
<img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse(':rocket:')
<img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.2/72x72/1f680.png"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"/> <img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"/>
```


### Using method options:

| Option Name      | Type    | Default | Description                                                                                                           |
| :--------------- | :------ | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| parseToHtml      | boolean | `true`  | Parse emojis unicodes and shortcodes into html images.                                                                |
| parseToUnicode   | boolean | `false` | Parse emojis shortcodes into unicodes. The option **parseToHtml** should be `false` to apply.                         |
| parseToShortcode | boolean | `false` | Parse emojis unicodes into shortcodes. The options **parseToHtml** and **parseToUnicode** should be `false` to apply. |

```
→ uEmojiParser.parse('😎', {})
<img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:', { parseToHtml: true })
<img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/>
```

```
→ uEmojiParser.parse('Hello world! :smiling_face_with_sunglasses: :rocket:', { parseToHtml: false, parseToUnicode: true })
Hello world! 😎 🚀
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: false, parseToShortcode: true })
Hello world! :smiling_face_with_sunglasses: :rocket:
```

### ℹ️ Optionally, direct methods can also be used to parse the content of the emojis through the different options:

```
→ uEmojiParser.parseToHtml('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="😎" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"/> <img class="emoji" alt="🚀" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"/>
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

DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, chatops and more. [Learn more](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser).

## License

Universal emoji parser is [MIT licensed](./LICENSE).
