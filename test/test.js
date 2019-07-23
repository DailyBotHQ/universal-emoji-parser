import assert from 'assert'
import uEmojiParser from '../src/main'

describe('Test emoji parser', () => {
  it('should parse emojis from unicode', () => {
    const text = '😄'
    const result = uEmojiParser.parse(text)
    assert.equal(result, '<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f604.png"/>')
  })

  it('should parse emojis from emoji code', () => {
    const text = ':smile:'
    const result = uEmojiParser.parse(text)
    assert.equal(result, '<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/12.1.2/72x72/1f604.png"/>')
  })

  it('should parse a sentence with emojis from unicode and emoji code', () => {
    const text = 'A lot of emojis: 😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 :neckbeard: 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 :couplekiss: 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
    const result = uEmojiParser.parse(text)
    assert.equal(typeof result, 'string')
  })

  it('should throw error with not string parameter', () => {
    let text = undefined
    assert.throws(() => {
      uEmojiParser.parse(text)
    }, Error)

    text = 13

    assert.throws(() => {
      uEmojiParser.parse(text)
    }, Error)
  })
})