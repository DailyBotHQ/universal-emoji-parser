import assert from 'assert'
import uEmojiParser from '../src/main'

describe('Test emoji parser', () => {
  it('should parse emojis from unicode', () => {
    const text = '😄'
    const result = uEmojiParser.parse(text)
    assert.equal(result, '<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f604.png"/>')
  })

  it('should parse emojis from emoji code', () => {
    const text = ':smile:'
    const result = uEmojiParser.parse(text)
    assert.equal(result, '<img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f604.png"/>')
  })

  it('should parse a sentence with emojis from unicode and emoji code', () => {
    const text = 'A lot of emojis: 😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 :neckbeard: 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 :couplekiss: 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
    const result = uEmojiParser.parse(text)
    assert.equal(typeof result, 'string')
  })

  it('Test emoji parser if exist only in keywords search', () => {
    let text = ":thumbsup:"
    const result = uEmojiParser.parse(text)
    assert.equal(result, '<img class="emoji" draggable="false" alt="👍" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f44d.png"/>')
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