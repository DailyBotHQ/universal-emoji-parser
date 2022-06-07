import twemoji from 'twemoji'
import { EmojiLibJsonType, EmojiType, UEmojiParserType } from './lib/type'
import emojiLibJson from './lib/emoji-lib.json'


/**
 * Parse text with emoji support
 * @return {string}
 */
const uEmojiParser: UEmojiParserType = {
  getEmojiObjectByCode(emojiCode: string): EmojiType | undefined {
    let emojiLibJsonData: EmojiLibJsonType = emojiLibJson
    emojiCode = emojiCode.replace(/:/g, '')
    if (emojiLibJsonData[emojiCode] && typeof emojiLibJsonData[emojiCode] === 'object' && emojiLibJsonData[emojiCode].char) {
      return emojiLibJsonData[emojiCode]
    } else {
      const emojiKey: string | undefined = Object.keys(emojiLibJsonData).find(
        (emojiKey: string): boolean => emojiLibJsonData[emojiKey].keywords.includes(emojiCode)
      )
      if (!!emojiKey) {
        return emojiLibJsonData[emojiKey]
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
module.exports = uEmojiParser