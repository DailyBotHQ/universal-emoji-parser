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
      const emojiKey: string | undefined = Object.keys(emojiLibJsonData).find(
        (emojiKey: string): boolean => emojiLibJsonData[emojiKey].keywords.includes(shortcode)
      )
      if (emojiKey) {
        return emojiLibJsonData[emojiKey]
      }
    }
    return undefined
  },
  getDefaultOptions(options?: EmojiParseOptionsType): EmojiParseOptionsType {
    options = {
      parseToHtml: (options)? Boolean(options.parseToHtml): true,
      parseToUnicode: (options)? Boolean(options.parseToUnicode): false,
      parseToShortcode: (options)? Boolean(options.parseToShortcode): false,
    }
    return options
  },
  parse(text: string, options?: EmojiParseOptionsType): string {
    const optionsResult: EmojiParseOptionsType = this.getDefaultOptions(options)
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.')
    }

    /**
     * Translate emojis unicodes to shortcodes
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
    }
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
    console.log(Object.keys(emojiLibJsonData))
    return text
  }
}

export default uEmojiParser
module.exports = uEmojiParser