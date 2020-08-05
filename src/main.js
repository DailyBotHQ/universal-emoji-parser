import twemoji from 'twemoji'
import emojilib from 'emojilib';

/**
 * Parse text with emoji support
 * @return {string}
 */
const uEmojiParser = {
  getEmojiObjectByCode(emojiCode) {
    emojiCode = emojiCode.replace(/:/g, '')
    if (emojilib.lib[emojiCode] && typeof emojilib.lib[emojiCode] === 'object' && emojilib.lib[emojiCode].char) {
      return emojilib.lib[emojiCode]
    } else {
      let emojiKey = Object.keys(a).find(emojiKey => a[emojiKey].keywords.includes(emojiCode))
      if (!!emojiKey) {
        return emojilib.lib[emojiKey]
      }
    }

    return undefined
  },
  parse(text) {
    if (typeof text !== 'string') {
      throw new Error('The text parameter should be a string.');
    }

    const emojisRegExp = /:(\w+):/g
    const emojisList = text.match(emojisRegExp)
    if (emojisList) {
      emojisList.forEach((emojiCode) => {
        const emoji = this.getEmojiObjectByCode(emojiCode)
        if (emoji) {
          const regEx = new RegExp(emojiCode)
          text = text.replace(regEx, emoji.char)
        }
      })
    }
    return twemoji.parse(text)
  }
}

module.exports = uEmojiParser