import twemoji from 'twemoji'
import { EmojiLibJsonType, EmojiType, UEmojiParserType } from './lib/type'
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
  parse(text: string): string {
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.')
    }

    /**
     * Translate emojis unicodes to shortcodes
     */
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

    /**
     * Parse emojis to html images
     */
    return twemoji.parse(text)
  },
}

export default uEmojiParser
module.exports = uEmojiParser