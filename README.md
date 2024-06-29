# Universal Emoji Parser

This tool allow parse emojis **char unicodes** and **shortcodes** to html images using [emojilib](https://github.com/muan/emojilib) && [Twemoji](https://github.com/jdecked/twemoji-parser).
This allows emojis to be standard across browsers, and avoid compatibility issues.

Emojis Support:

- [Twitter](https://twitter.com/) emojis
- [GitHub](https://github.com/) emojis
- [Slack](https://slack.com/) emojis
- [Discord](https://discord.com/) emojis
- [Google Chat](https://chat.google.com/) emojis
- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) emojis

---

[![Code Check && Release](https://github.com/DailyBotHQ/universal-emoji-parser/actions/workflows/release_and_publish.yml/badge.svg?branch=main)](https://github.com/DailyBotHQ/universal-emoji-parser/actions/workflows/release_and_publish.yml)
[![GitHub license](https://img.shields.io/github/license/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/DailyBotHQ/universal-emoji-parser)](https://github.com/DailyBotHQ/universal-emoji-parser)
[![Total downloads](https://img.shields.io/npm/dt/universal-emoji-parser.svg)](https://www.npmjs.com/package/universal-emoji-parser)

## Installation

```javascript
npm install universal-emoji-parser --save

or

yarn add universal-emoji-parser
```

## Usage

```javascript
// ES6 import
→ import uEmojiParser from 'universal-emoji-parser'

or

// CommonJS require
→ const uEmojiParser = require('universal-emoji-parser')
```

### Using default options:

```
→ uEmojiParser.parse('😎')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:')
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/>
```

```
→ uEmojiParser.parse('🚀')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.svg"/>
```

```
→ uEmojiParser.parse(':rocket:')
<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f680.svg"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.svg"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.svg"/>
```

### Using method options:

- DEFAULT EMOJI CDN => `https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/`

| Option Name      | Type    | Default             | Description                                                                                                           |
| :--------------- | :------ | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| emojiCDN         | string  | `DEFAULT EMOJI CDN` | Allow customize the emojis CDN. The `parseToHtml` option should be `true` to apply this option.                       |
| parseToHtml      | boolean | `true`              | Parse emojis unicodes and shortcodes into html images.                                                                |
| parseToUnicode   | boolean | `false`             | Parse emojis shortcodes into unicodes. The option **parseToHtml** should be `false` to apply.                         |
| parseToShortcode | boolean | `false`             | Parse emojis unicodes into shortcodes. The options **parseToHtml** and **parseToUnicode** should be `false` to apply. |

Using different values for options:

```
→ uEmojiParser.parse('😎', {})
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/>
```

```
→ uEmojiParser.parse(':smiling_face_with_sunglasses:', { parseToHtml: true })
<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/>
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
→ uEmojiParser.parse('Hello world! 😎 🚀', { emojiCDN: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/" })
Hello world! <img class="emoji" alt="😎" src="https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f60e.svg"/> <img class="emoji" alt="🚀" src="https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f680.svg"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: true, emojiCDN: https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/ })
Hello world! <img class="emoji" alt="😎" src="https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f60e.svg"/> <img class="emoji" alt="🚀" src="https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f680.svg"/>
```

```
→ uEmojiParser.parse('Hello world! 😎 🚀', { parseToHtml: false, emojiCDN: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/" })
Hello world! 😎 🚀
```

### ℹ️ Optionally, direct methods can also be used to parse the content of the emojis through the different options:

```
→ uEmojiParser.parseToHtml('Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:')
Hello world! <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.svg"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.svg"/> <img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.svg"/>
```

```
→ uEmojiParser.parseToUnicode('Hello world! :smiling_face_with_sunglasses: :rocket:')
Hello world! 😎 🚀
```

```
→ uEmojiParser.parseToShortcode('Hello world! 😎 🚀')
Hello world! :smiling_face_with_sunglasses: :rocket:
```

## Get emoji lib json data

You can get the entire emoji lib json data curated and processed to best match with shortcode keywords.

```javascript
// ES6 import
→ import { emojiLibJsonData } from 'universal-emoji-parser'

or

// CommonJS require
const uEmojiParser = require('universal-emoji-parser')
const { emojiLibJsonData } = uEmojiParser
```

```

→ Object.keys(emojiLibJsonData).length
1898

→ emojiLibJsonData[🤣]
{
  name: 'rolling on the floor laughing',
  slug: 'rolling_on_the_floor_laughing',
  group: 'Smileys & Emotion',
  emoji_version: '3.0',
  unicode_version: '3.0',
  skin_tone_support: false,
  char: '🤣',
  keywords: [
    'rolling_on_the_floor_laughing',
    'rolling',
    'floor',
    'laughing',
    'rofl'
  ]
}

→ emojiLibJsonData[😎]
{
  name: 'smiling face with sunglasses',
  slug: 'smiling_face_with_sunglasses',
  group: 'Smileys & Emotion',
  emoji_version: '1.0',
  unicode_version: '1.0',
  skin_tone_support: false,
  char: '😎',
  keywords: [
    'smiling_face_with_sunglasses',
    'cool',
    'summer',
    'beach',
    'sunglass'
  ]
}
```

## CSS Styles

To properly scale emojis to fit within their containing elements, you can apply these global CSS styles:

```
img.emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
```

## :electric_plug: Powered by [DailyBot](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser)

DailyBot is an [AI Assistant](https://www.dailybot.com/product/ai) powered by ChatGPT that takes chat and collaboration to the next level helping to automate: daily standups, team check-ins, surveys, kudos, virtual watercooler, 1:1 intros, motivation tracking, chatops and more. [Learn more](https://www.dailybot.com?utm_source=dailybotopensource&utm_medium=universal-emoji-parser).

## License

Universal Emoji Parser is [MIT licensed](./LICENSE).
