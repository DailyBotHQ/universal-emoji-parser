# Universal Emoji Parser.

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
```

Using default options:

```
> uEmojiParser.parse('😎')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>
```

```
> uEmojiParser.parse(':sunglasses:')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>
```

```
> uEmojiParser.parse('🚀')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>
```

```
> uEmojiParser.parse(':rocket:')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>
```

```
> uEmojiParser.parse('Hello world! 😎 :sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.png"/>
```


Using method options:

| Option Name      | Type    | Default | Description                                                                                                           |
| :--------------- | :------ | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| parseToHtml      | boolean | `true`  | Parse emojis unicodes and shortcodes into html images.                                                                |
| parseToUnicode   | boolean | `false` | Parse emojis shortcodes into unicodes. The option **parseToHtml** should be `false` to apply.                         |
| parseToShortcode | boolean | `false` | Parse emojis unicodes into shortcodes. The options **parseToHtml** and **parseToUnicode** should be `false` to apply. |

```
> uEmojiParser.parse('😎', {})
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>
```

```
> uEmojiParser.parse('😎', { parseToHtml: true })
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f60e.png"/>
```

```
> uEmojiParser.parse(':sunglasses:', { parseToHtml: false, parseToUnicode: true })
😎
```

```
> uEmojiParser.parse('😎', { parseToHtml: false, parseToShortcode: true })
:sunglasses:
```


## :electric_plug: Powered by [DailyBot](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser)

## License

Universal emoji parser is [MIT licensed](./LICENSE).
