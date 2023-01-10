import twemoji from 'twemoji'
import { EmojiLibJsonType, EmojiParseOptionsType, EmojiType, UEmojiParserType } from './lib/type'
import emojiLibJson from './lib/emoji-lib.json'


/**
 * Parse text with emoji support
 * @return {string}
 */
const uEmojiParser: UEmojiParserType = {
  getEmojiObjectByShortcode(shortcode: string): EmojiType | undefined {
    const emojiLibJsonData: EmojiLibJsonType = emojiLibJson
    shortcode = shortcode.replace(/:/g, '')
    if (emojiLibJsonData[shortcode] && typeof emojiLibJsonData[shortcode] === 'object' && emojiLibJsonData[shortcode].char) {
      return emojiLibJsonData[shortcode]
    } else {
      const emojiUnicode: string | undefined = Object.keys(emojiLibJsonData).find(
        (emojiUnicodeItem: string): boolean => emojiLibJsonData[emojiUnicodeItem].keywords.includes(shortcode)
      )
      if (emojiUnicode) {
        return emojiLibJsonData[emojiUnicode]
      }
    }
    return undefined
  },
  getDefaultOptions(options?: EmojiParseOptionsType): EmojiParseOptionsType {
    options = {
      // eslint-disable-next-line no-prototype-builtins
      parseToHtml: (options && options.hasOwnProperty('parseToHtml'))? Boolean(options.parseToHtml): true,
      parseToUnicode: (options)? Boolean(options.parseToUnicode): false,
      parseToShortcode: (options)? Boolean(options.parseToShortcode): false,
    }
    return options
  },
  parseToHtml(text: string): string {
    text = this.parseToUnicode(text)
    text = twemoji.parse(text)
    text = text.replace(/ draggable="false" /g, ' ')
    text = text.replace(
      /twemoji.maxcdn.com\/v/g,
      'cdnjs.cloudflare.com/ajax/libs/twemoji',
    )
    return text
  },
  parseToUnicode(text: string): string {
    const emojisRegExp: RegExp = /:(\w+):/g
    const emojisShortcodesList: RegExpMatchArray | null = text.match(emojisRegExp)
    if (emojisShortcodesList) {
      emojisShortcodesList.forEach((shortcode: string) => {
        const emoji: EmojiType = this.getEmojiObjectByShortcode(shortcode)
        if (emoji) {
          const regEx = new RegExp(shortcode)
          text = text.replace(regEx, emoji.char)
        }
      })
    }
    return text
  },
  parseToShortcode(text: string): string {
    const emojiLibJsonData: EmojiLibJsonType = emojiLibJson
    const emojisUnicodesList: Array<string> = Object.keys(emojiLibJsonData)
    let regexText: string = `(${emojisUnicodesList.join('|')})`
    regexText = regexText.replace(/\*️⃣/g, '\\*️⃣')
    const regexUnicodes = new RegExp(regexText, 'ig')
    const matches: IterableIterator<RegExpMatchArray> = text.matchAll(regexUnicodes)
    for (const match of matches) {
      const emoji: EmojiType = emojiLibJsonData[match[0]]
      if (emoji) {
        const unicodeRegExp: RegExp = new RegExp(emoji.char, 'ig')
        text = text.replace(unicodeRegExp, `:${emoji.slug}:`)
      }
    }

    return text
  },
  parse(text: string, options?: EmojiParseOptionsType): string {
    const optionsResult: EmojiParseOptionsType = this.getDefaultOptions(options)
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.')
    }

    /**
     * Translate emojis unicodes to shortcodes
     */
     if (!optionsResult.parseToHtml && optionsResult.parseToShortcode) {
      text = this.parseToShortcode(text)
    }

    /**
     * Translate emojis shortcodes to unicodes
     */
    if (optionsResult.parseToHtml || optionsResult.parseToUnicode) {
      text = this.parseToUnicode(text)
    }

    /**
     * Parse emojis to html images
     */
    if (optionsResult.parseToHtml) {
      text = twemoji.parse(text)
      text = text.replace(/ draggable="false" /g, ' ')
      text = text.replace(
        /twemoji.maxcdn.com\/v/g,
        'cdnjs.cloudflare.com/ajax/libs/twemoji',
      )
    }
    return text
  },
}

export default uEmojiParser
module.exports = uEmojiParser