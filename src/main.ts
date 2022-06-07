import twemoji from 'twemoji'
import { EmojiType, UEmojiParserType } from './lib/type'
import emojiLibJson from './lib/emoji-lib.json'


/**
 * Parse text with emoji support
 * @return {string}
 */
const uEmojiParser: UEmojiParserType = {
  emojiLibJson: emojiLibJson,
  getEmojiObjectByCode(emojiCode: string): EmojiType | undefined {
    emojiCode = emojiCode.replace(/:/g, '')
    if (uEmojiParser.emojiLibJson[emojiCode] && typeof uEmojiParser.emojiLibJson[emojiCode] === 'object' && uEmojiParser.emojiLibJson[emojiCode].char) {
      return uEmojiParser.emojiLibJson[emojiCode]
    } else {
      const emojiKey: string | undefined = Object.keys(uEmojiParser.emojiLibJson).find(
        (emojiKey: string): boolean => uEmojiParser.emojiLibJson[emojiKey].keywords.includes(emojiCode)
      )
      if (!!emojiKey) {
        return uEmojiParser.emojiLibJson[emojiKey]
      }
    }
    return undefined
  },
  parse(text: string): string {
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.')
    }

    const emojisRegExp = /:(\w+):/g
    const emojisList = text.match(emojisRegExp)
    if (emojisList) {
      emojisList.forEach((emojiCode) => {
        const emoji: EmojiType = this.getEmojiObjectByCode(emojiCode)
        if (emoji) {
          const regEx = new RegExp(emojiCode)
          text = text.replace(regEx, emoji.char)
        }
      })
    }
    return twemoji.parse(text)
  }
}

export default uEmojiParser