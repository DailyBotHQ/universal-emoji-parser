import { expect } from 'chai'
import uEmojiParser from '../src/index'


describe('Test emoji parser', () => {

  describe('Using default options', () => {
    it('should parse emojis from unicode', () => {
      // (1) Smile 😀
      let text: string = '😀'
      let result: string = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/>')

      // (2) Smile with smiling eyes 😄
      text = '😄'
      result = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')

      // (3) Sunglasses 😎
      text = '😎'
      result = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>')
    })

    it('should parse emojis from shortcode', () => {
      // (1) Smile 😀
      let text: string = ':smile:'
      let result: string = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/>')

      // (2) Smile with smiling eyes 😄
      text = ':grinning_face_with_smiling_eyes:'
      result = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')

      // (3) Sunglasses 😎
      text = ':smiling_face_with_sunglasses:'
      result = uEmojiParser.parse(text)
      expect(result).to.be.equal('<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>')
    })

    it('should parse a sentence with emojis from emoji unicode and shortcode', () => {
      const text: string = 'A lot of emojis: 😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 :neckbeard: 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 :couplekiss: 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
      const result: string = uEmojiParser.parse(text)
      expect(result).to.be.string
      expect(result).to.be.equal('A lot of emojis: <img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/> <img class="emoji" alt="😆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f606.png"/> <img class="emoji" alt="😊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60a.png"/> <img class="emoji" alt="😃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f603.png"/> <img class="emoji" alt="☺️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/263a.png"/> <img class="emoji" alt="😏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60f.png"/> <img class="emoji" alt="😍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60d.png"/> <img class="emoji" alt="😘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f618.png"/> <img class="emoji" alt="😚" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61a.png"/> <img class="emoji" alt="😳" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f633.png"/> <img class="emoji" alt="😌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60c.png"/> <img class="emoji" alt="😆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f606.png"/> <img class="emoji" alt="😁" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f601.png"/> <img class="emoji" alt="😉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f609.png"/> <img class="emoji" alt="😜" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61c.png"/> <img class="emoji" alt="😝" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61d.png"/> <img class="emoji" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/> <img class="emoji" alt="😗" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f617.png"/> <img class="emoji" alt="😙" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f619.png"/> <img class="emoji" alt="😛" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61b.png"/> <img class="emoji" alt="😴" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f634.png"/> <img class="emoji" alt="😟" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61f.png"/> <img class="emoji" alt="😦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f626.png"/> <img class="emoji" alt="😧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f627.png"/> <img class="emoji" alt="😮" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62e.png"/> <img class="emoji" alt="😬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62c.png"/> <img class="emoji" alt="😕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f615.png"/> <img class="emoji" alt="😯" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62f.png"/> <img class="emoji" alt="😑" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f611.png"/> <img class="emoji" alt="😒" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f612.png"/> <img class="emoji" alt="😅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f605.png"/> <img class="emoji" alt="😓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f613.png"/> <img class="emoji" alt="😥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f625.png"/> <img class="emoji" alt="😩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f629.png"/> <img class="emoji" alt="😔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f614.png"/> <img class="emoji" alt="😞" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f61e.png"/> <img class="emoji" alt="😖" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f616.png"/> <img class="emoji" alt="😨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f628.png"/> <img class="emoji" alt="😰" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f630.png"/> <img class="emoji" alt="😣" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f623.png"/> <img class="emoji" alt="😢" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f622.png"/> <img class="emoji" alt="😭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62d.png"/> <img class="emoji" alt="😂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f602.png"/> <img class="emoji" alt="😲" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f632.png"/> <img class="emoji" alt="😱" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f631.png"/> :neckbeard: <img class="emoji" alt="😫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62b.png"/> <img class="emoji" alt="😠" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f620.png"/> <img class="emoji" alt="😡" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f621.png"/> <img class="emoji" alt="😤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f624.png"/> <img class="emoji" alt="😪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f62a.png"/> <img class="emoji" alt="😋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60b.png"/> <img class="emoji" alt="😷" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f637.png"/> <img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/> <img class="emoji" alt="😵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f635.png"/> <img class="emoji" alt="👿" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47f.png"/> <img class="emoji" alt="😈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f608.png"/> <img class="emoji" alt="😐" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f610.png"/> <img class="emoji" alt="😶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f636.png"/> <img class="emoji" alt="😇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f607.png"/> <img class="emoji" alt="👽" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47d.png"/> <img class="emoji" alt="💛" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49b.png"/> <img class="emoji" alt="💙" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f499.png"/> <img class="emoji" alt="💜" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49c.png"/> <img class="emoji" alt="❤️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2764.png"/> <img class="emoji" alt="💚" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49a.png"/> <img class="emoji" alt="💔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f494.png"/> <img class="emoji" alt="💓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f493.png"/> <img class="emoji" alt="💗" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f497.png"/> <img class="emoji" alt="💕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f495.png"/> <img class="emoji" alt="💞" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f49e.png"/> <img class="emoji" alt="💘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f498.png"/> <img class="emoji" alt="💖" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f496.png"/> <img class="emoji" alt="✨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2728.png"/> <img class="emoji" alt="⭐️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2b50.png"/> <img class="emoji" alt="🌟" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f31f.png"/> <img class="emoji" alt="💫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ab.png"/> <img class="emoji" alt="💥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a5.png"/> <img class="emoji" alt="💥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a5.png"/> <img class="emoji" alt="💢" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a2.png"/> <img class="emoji" alt="❗️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2757.png"/> <img class="emoji" alt="❓" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2753.png"/> <img class="emoji" alt="❕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2755.png"/> <img class="emoji" alt="❔" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/2754.png"/> <img class="emoji" alt="💤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a4.png"/> <img class="emoji" alt="💨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a8.png"/> <img class="emoji" alt="💦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a6.png"/> <img class="emoji" alt="🎶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3b6.png"/> <img class="emoji" alt="🎵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3b5.png"/> <img class="emoji" alt="🔥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f525.png"/> <img class="emoji" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" alt="💩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a9.png"/> <img class="emoji" alt="👍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44d.png"/> <img class="emoji" alt="👍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44d.png"/> <img class="emoji" alt="👎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44e.png"/> <img class="emoji" alt="👎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44e.png"/> <img class="emoji" alt="👌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44c.png"/> <img class="emoji" alt="👊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44a.png"/> <img class="emoji" alt="👊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44a.png"/> <img class="emoji" alt="✊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270a.png"/> <img class="emoji" alt="✌️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270c.png"/> <img class="emoji" alt="👋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44b.png"/> <img class="emoji" alt="✋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270b.png"/> <img class="emoji" alt="✋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/270b.png"/> <img class="emoji" alt="👐" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f450.png"/> <img class="emoji" alt="☝️" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/261d.png"/> <img class="emoji" alt="👇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f447.png"/> <img class="emoji" alt="👈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f448.png"/> <img class="emoji" alt="👉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f449.png"/> <img class="emoji" alt="🙌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64c.png"/> <img class="emoji" alt="🙏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64f.png"/> <img class="emoji" alt="👆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f446.png"/> <img class="emoji" alt="👏" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f44f.png"/> <img class="emoji" alt="💪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4aa.png"/> <img class="emoji" alt="🤘" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f918.png"/> <img class="emoji" alt="🖕" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f595.png"/> <img class="emoji" alt="🚶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f6b6.png"/> <img class="emoji" alt="🏃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3c3.png"/> <img class="emoji" alt="🏃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f3c3.png"/> <img class="emoji" alt="👫" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46b.png"/> <img class="emoji" alt="👪" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46a.png"/> <img class="emoji" alt="👬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46c.png"/> <img class="emoji" alt="👭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46d.png"/> <img class="emoji" alt="💃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f483.png"/> <img class="emoji" alt="👯" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46f.png"/> <img class="emoji" alt="🙆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f646.png"/> <img class="emoji" alt="🙅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f645.png"/> <img class="emoji" alt="💁" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f481.png"/> <img class="emoji" alt="🙋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64b.png"/> <img class="emoji" alt="👰" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f470.png"/> <img class="emoji" alt="🙎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64e.png"/> <img class="emoji" alt="🙍" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64d.png"/> <img class="emoji" alt="🙇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f647.png"/> :couplekiss: <img class="emoji" alt="💑" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f491.png"/> <img class="emoji" alt="💆" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f486.png"/> <img class="emoji" alt="💇" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f487.png"/> <img class="emoji" alt="💅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f485.png"/> <img class="emoji" alt="👦" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f466.png"/> <img class="emoji" alt="👧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f467.png"/> <img class="emoji" alt="👩" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f469.png"/> <img class="emoji" alt="👨" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f468.png"/> <img class="emoji" alt="👶" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f476.png"/> <img class="emoji" alt="👵" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f475.png"/> <img class="emoji" alt="👴" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f474.png"/> <img class="emoji" alt="👱" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f471.png"/> <img class="emoji" alt="👲" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f472.png"/> <img class="emoji" alt="👳" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f473.png"/> <img class="emoji" alt="👷" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f477.png"/> <img class="emoji" alt="👮" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f46e.png"/> <img class="emoji" alt="👼" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47c.png"/> <img class="emoji" alt="👸" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f478.png"/> <img class="emoji" alt="😺" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63a.png"/> <img class="emoji" alt="😸" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f638.png"/> <img class="emoji" alt="😻" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63b.png"/> <img class="emoji" alt="😽" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63d.png"/> <img class="emoji" alt="😼" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63c.png"/> <img class="emoji" alt="🙀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f640.png"/> <img class="emoji" alt="😿" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63f.png"/> <img class="emoji" alt="😹" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f639.png"/> <img class="emoji" alt="😾" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f63e.png"/> <img class="emoji" alt="👹" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f479.png"/> <img class="emoji" alt="👺" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f47a.png"/> <img class="emoji" alt="🙈" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f648.png"/> <img class="emoji" alt="🙉" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f649.png"/> <img class="emoji" alt="🙊" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64a.png"/> <img class="emoji" alt="💂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f482.png"/> <img class="emoji" alt="💀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f480.png"/> <img class="emoji" alt="🐾" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f43e.png"/> <img class="emoji" alt="👄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f444.png"/> <img class="emoji" alt="💋" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f48b.png"/> <img class="emoji" alt="💧" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4a7.png"/> <img class="emoji" alt="👂" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f442.png"/> <img class="emoji" alt="👀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f440.png"/> <img class="emoji" alt="👃" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f443.png"/> <img class="emoji" alt="👅" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f445.png"/> <img class="emoji" alt="💌" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f48c.png"/> <img class="emoji" alt="👤" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f464.png"/> <img class="emoji" alt="👥" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f465.png"/> <img class="emoji" alt="💬" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ac.png"/> <img class="emoji" alt="💭" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f4ad.png"/>')
    })

    it('Test emoji parser translating emojis unicodes to shortcodes', () => {
      // (1) Test with a single unicode emoji
      let text: string = '👍'
      let result: string = uEmojiParser.parseToShortcode(text)
      expect(result).to.be.equal(':thumbs_up:')

      // (2) Test with a multiple unicodes emojis
      text = '😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
      result = uEmojiParser.parseToShortcode(text)
      expect(result).to.be.equal(':grinning_face_with_smiling_eyes: :grinning_squinting_face: :smiling_face_with_smiling_eyes: :grinning_face_with_big_eyes: :smiling_face: :smirking_face: :smiling_face_with_heart_eyes: :face_blowing_a_kiss: :kissing_face_with_closed_eyes: :flushed_face: :relieved_face: :grinning_squinting_face: :beaming_face_with_smiling_eyes: :winking_face: :winking_face_with_tongue: :squinting_face_with_tongue: :grinning_face: :kissing_face: :kissing_face_with_smiling_eyes: :face_with_tongue: :sleeping_face: :worried_face: :frowning_face_with_open_mouth: :anguished_face: :face_with_open_mouth: :grimacing_face: :confused_face: :hushed_face: :expressionless_face: :unamused_face: :grinning_face_with_sweat: :downcast_face_with_sweat: :sad_but_relieved_face: :weary_face: :pensive_face: :disappointed_face: :confounded_face: :fearful_face: :anxious_face_with_sweat: :persevering_face: :crying_face: :loudly_crying_face: :face_with_tears_of_joy: :astonished_face: :face_screaming_in_fear: :tired_face: :angry_face: :pouting_face: :face_with_steam_from_nose: :sleepy_face: :face_savoring_food: :face_with_medical_mask: :smiling_face_with_sunglasses: :face_with_crossed_out_eyes: :angry_face_with_horns: :smiling_face_with_horns: :neutral_face: :face_without_mouth: :smiling_face_with_halo: :alien: :yellow_heart: :blue_heart: :purple_heart: :red_heart: :green_heart: :broken_heart: :beating_heart: :growing_heart: :two_hearts: :revolving_hearts: :heart_with_arrow: :sparkling_heart: :sparkles: :star:️ :glowing_star: :dizzy: :collision: :collision: :anger_symbol: :red_exclamation_mark:️ :red_question_mark: :white_exclamation_mark: :white_question_mark: :zzz: :dashing_away: :sweat_droplets: :musical_notes: :musical_note: :fire: :pile_of_poo: :pile_of_poo: :pile_of_poo: :thumbs_up: :thumbs_up: :thumbs_down: :thumbs_down: :ok_hand: :oncoming_fist: :oncoming_fist: :raised_fist: :victory_hand: :waving_hand: :raised_hand: :raised_hand: :open_hands: :index_pointing_up: :backhand_index_pointing_down: :backhand_index_pointing_left: :backhand_index_pointing_right: :raising_hands: :folded_hands: :backhand_index_pointing_up: :clapping_hands: :flexed_biceps: :sign_of_the_horns: :middle_finger: :person_walking: :person_running: :person_running: :woman_and_man_holding_hands: :family: :men_holding_hands: :women_holding_hands: :woman_dancing: :people_with_bunny_ears: :person_gesturing_ok: :person_gesturing_no: :person_tipping_hand: :person_raising_hand: :person_with_veil: :person_pouting: :person_frowning: :person_bowing: :couple_with_heart: :person_getting_massage: :person_getting_haircut: :nail_polish: :boy: :girl: :woman: :man: :baby: :old_woman: :old_man: :person_blond_hair: :person_with_skullcap: :person_wearing_turban: :construction_worker: :police_officer: :baby_angel: :princess: :grinning_cat: :grinning_cat_with_smiling_eyes: :smiling_cat_with_heart_eyes: :kissing_cat: :cat_with_wry_smile: :weary_cat: :crying_cat: :cat_with_tears_of_joy: :pouting_cat: :ogre: :goblin: :see_no_evil_monkey: :hear_no_evil_monkey: :speak_no_evil_monkey: :guard: :skull: :paw_prints: :mouth: :kiss_mark: :droplet: :ear: :eyes: :nose: :tongue: :love_letter: :bust_in_silhouette: :busts_in_silhouette: :speech_balloon: :thought_balloon:')

      // (3) Test with a multiple unicodes emojis
      text = '😎'
      result = uEmojiParser.parseToShortcode(text)
      expect(result).to.be.equal(':smiling_face_with_sunglasses:')
    })

    it('Test emoji parser translating emojis shortcodes to unicodes', () => {
      // (1) Test with a single shortcode emoji
      let text: string = ':thumbsup:'
      let result: string = uEmojiParser.parseToUnicode(text)
      expect(result).to.be.equal('👍')

      // (2) Test with a single shortcode emoji
      text = ':thumbs_up:'
      result = uEmojiParser.parseToUnicode(text)
      expect(result).to.be.equal('👍')

      // (3) Test with a multiple shortcodes emojis
      text = ':grinning_face_with_smiling_eyes: :grinning_squinting_face: :smiling_face_with_smiling_eyes: :grinning_face_with_big_eyes: :smiling_face: :smirking_face: :smiling_face_with_heart_eyes: :face_blowing_a_kiss: :kissing_face_with_closed_eyes: :flushed_face: :relieved_face: :grinning_squinting_face: :beaming_face_with_smiling_eyes: :winking_face: :winking_face_with_tongue: :squinting_face_with_tongue: :grinning_face: :kissing_face: :kissing_face_with_smiling_eyes: :face_with_tongue: :sleeping_face: :worried_face: :frowning_face_with_open_mouth: :anguished_face: :face_with_open_mouth: :grimacing_face: :confused_face: :hushed_face: :expressionless_face: :unamused_face: :grinning_face_with_sweat: :downcast_face_with_sweat: :sad_but_relieved_face: :weary_face: :pensive_face: :disappointed_face: :confounded_face: :fearful_face: :anxious_face_with_sweat: :persevering_face: :crying_face: :loudly_crying_face: :face_with_tears_of_joy: :astonished_face: :face_screaming_in_fear: :tired_face: :angry_face: :pouting_face: :face_with_steam_from_nose: :sleepy_face: :face_savoring_food: :face_with_medical_mask: :smiling_face_with_sunglasses: :face_with_crossed_out_eyes: :angry_face_with_horns: :smiling_face_with_horns: :neutral_face: :face_without_mouth: :smiling_face_with_halo: :alien: :yellow_heart: :blue_heart: :purple_heart: :red_heart: :green_heart: :broken_heart: :beating_heart: :growing_heart: :two_hearts: :revolving_hearts: :heart_with_arrow: :sparkling_heart: :sparkles: :star:️ :glowing_star: :dizzy: :collision: :collision: :anger_symbol: :red_exclamation_mark:️ :red_question_mark: :white_exclamation_mark: :white_question_mark: :zzz: :dashing_away: :sweat_droplets: :musical_notes: :musical_note: :fire: :pile_of_poo: :pile_of_poo: :pile_of_poo: :thumbs_up: :thumbs_up: :thumbs_down: :thumbs_down: :ok_hand: :oncoming_fist: :oncoming_fist: :raised_fist: :victory_hand: :waving_hand: :raised_hand: :raised_hand: :open_hands: :index_pointing_up: :backhand_index_pointing_down: :backhand_index_pointing_left: :backhand_index_pointing_right: :raising_hands: :folded_hands: :backhand_index_pointing_up: :clapping_hands: :flexed_biceps: :sign_of_the_horns: :middle_finger: :person_walking: :person_running: :person_running: :woman_and_man_holding_hands: :family: :men_holding_hands: :women_holding_hands: :woman_dancing: :people_with_bunny_ears: :person_gesturing_ok: :person_gesturing_no: :person_tipping_hand: :person_raising_hand: :person_with_veil: :person_pouting: :person_frowning: :person_bowing: :couple_with_heart: :person_getting_massage: :person_getting_haircut: :nail_polish: :boy: :girl: :woman: :man: :baby: :old_woman: :old_man: :person_blond_hair: :person_with_skullcap: :person_wearing_turban: :construction_worker: :police_officer: :baby_angel: :princess: :grinning_cat: :grinning_cat_with_smiling_eyes: :smiling_cat_with_heart_eyes: :kissing_cat: :cat_with_wry_smile: :weary_cat: :crying_cat: :cat_with_tears_of_joy: :pouting_cat: :ogre: :goblin: :see_no_evil_monkey: :hear_no_evil_monkey: :speak_no_evil_monkey: :guard: :skull: :paw_prints: :mouth: :kiss_mark: :droplet: :ear: :eyes: :nose: :tongue: :love_letter: :bust_in_silhouette: :busts_in_silhouette: :speech_balloon: :thought_balloon:'
      result = uEmojiParser.parseToUnicode(text)
      expect(result).to.be.equal('😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ 💫️ 🌟 🥴 💥 💥 💢 ❗️ ❓ ❕ ❔ 😴 💨 💦 🎶 🎵 🧑‍🚒 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👶 👶 👧 👦 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👅 💋 💧 👂 🤩 👃 😋 💌 👤 👥 💬 💭')

      // (4) Test with a multiple shortcodes emojis
      text = ':smiling_face_with_sunglasses:'
      result = uEmojiParser.parseToUnicode(text)
      expect(result).to.be.equal('😎')
    })

    it('should throw error with not string parameter', () => {
      let text: any = undefined  // eslint-disable-line
      expect(() => {
        uEmojiParser.parse(text)
      }).to.throw(Error)

      text = 13

      expect(() => {
        uEmojiParser.parse(text)
      }).to.throw(Error)
    })
  })

  describe('Using object options', () => {
    it('should parse emojis from unicode', () => {
      // (1) Parse to html using options
      let text: string = '😀'
      let result: string = uEmojiParser.parse(text, {})
      expect(result).to.be.equal('<img class="emoji" alt="😀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f600.png"/>')

      // (2) Parse to html using options
      text = '😄'
      result = uEmojiParser.parse(text, { parseToHtml: true })
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')

      // (3) Parse to html using options
      text = '😄'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: false, parseToShortcode: false })
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')

      // (4) Parse to html using options
      text = '😄'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: false, parseToShortcode: true })
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')

      // (5) Parse to html using options
      text = '😄'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: true, parseToShortcode: true })
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')
    })

    it('Test emoji parser translating emojis unicodes to shortcodes', () => {
      // (1) Test with a single unicode emoji
      let text: string = '👍'
      let result: string = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: false, parseToShortcode: true })
      expect(result).to.be.equal(':thumbs_up:')

      // (2) Test with a multiple unicodes emojis
      text = '😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭'
      result = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: false, parseToShortcode: true })
      expect(result).to.be.equal(':grinning_face_with_smiling_eyes: :grinning_squinting_face: :smiling_face_with_smiling_eyes: :grinning_face_with_big_eyes: :smiling_face: :smirking_face: :smiling_face_with_heart_eyes: :face_blowing_a_kiss: :kissing_face_with_closed_eyes: :flushed_face: :relieved_face: :grinning_squinting_face: :beaming_face_with_smiling_eyes: :winking_face: :winking_face_with_tongue: :squinting_face_with_tongue: :grinning_face: :kissing_face: :kissing_face_with_smiling_eyes: :face_with_tongue: :sleeping_face: :worried_face: :frowning_face_with_open_mouth: :anguished_face: :face_with_open_mouth: :grimacing_face: :confused_face: :hushed_face: :expressionless_face: :unamused_face: :grinning_face_with_sweat: :downcast_face_with_sweat: :sad_but_relieved_face: :weary_face: :pensive_face: :disappointed_face: :confounded_face: :fearful_face: :anxious_face_with_sweat: :persevering_face: :crying_face: :loudly_crying_face: :face_with_tears_of_joy: :astonished_face: :face_screaming_in_fear: :tired_face: :angry_face: :pouting_face: :face_with_steam_from_nose: :sleepy_face: :face_savoring_food: :face_with_medical_mask: :smiling_face_with_sunglasses: :face_with_crossed_out_eyes: :angry_face_with_horns: :smiling_face_with_horns: :neutral_face: :face_without_mouth: :smiling_face_with_halo: :alien: :yellow_heart: :blue_heart: :purple_heart: :red_heart: :green_heart: :broken_heart: :beating_heart: :growing_heart: :two_hearts: :revolving_hearts: :heart_with_arrow: :sparkling_heart: :sparkles: :star:️ :glowing_star: :dizzy: :collision: :collision: :anger_symbol: :red_exclamation_mark:️ :red_question_mark: :white_exclamation_mark: :white_question_mark: :zzz: :dashing_away: :sweat_droplets: :musical_notes: :musical_note: :fire: :pile_of_poo: :pile_of_poo: :pile_of_poo: :thumbs_up: :thumbs_up: :thumbs_down: :thumbs_down: :ok_hand: :oncoming_fist: :oncoming_fist: :raised_fist: :victory_hand: :waving_hand: :raised_hand: :raised_hand: :open_hands: :index_pointing_up: :backhand_index_pointing_down: :backhand_index_pointing_left: :backhand_index_pointing_right: :raising_hands: :folded_hands: :backhand_index_pointing_up: :clapping_hands: :flexed_biceps: :sign_of_the_horns: :middle_finger: :person_walking: :person_running: :person_running: :woman_and_man_holding_hands: :family: :men_holding_hands: :women_holding_hands: :woman_dancing: :people_with_bunny_ears: :person_gesturing_ok: :person_gesturing_no: :person_tipping_hand: :person_raising_hand: :person_with_veil: :person_pouting: :person_frowning: :person_bowing: :couple_with_heart: :person_getting_massage: :person_getting_haircut: :nail_polish: :boy: :girl: :woman: :man: :baby: :old_woman: :old_man: :person_blond_hair: :person_with_skullcap: :person_wearing_turban: :construction_worker: :police_officer: :baby_angel: :princess: :grinning_cat: :grinning_cat_with_smiling_eyes: :smiling_cat_with_heart_eyes: :kissing_cat: :cat_with_wry_smile: :weary_cat: :crying_cat: :cat_with_tears_of_joy: :pouting_cat: :ogre: :goblin: :see_no_evil_monkey: :hear_no_evil_monkey: :speak_no_evil_monkey: :guard: :skull: :paw_prints: :mouth: :kiss_mark: :droplet: :ear: :eyes: :nose: :tongue: :love_letter: :bust_in_silhouette: :busts_in_silhouette: :speech_balloon: :thought_balloon:')

      // (3) Test without unicode emojis
      text = ':thumbs_up:'
      result = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: false, parseToShortcode: true })
      expect(result).to.be.equal(':thumbs_up:')
    })

    it('Test emoji parser translating emojis shortcodes to unicodes', () => {
      // (1) Test with a single shortcode emoji
      let text: string = ':thumbsup:'
      let result: string = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: true, parseToShortcode: false })
      expect(result).to.be.equal('👍')

      // (2) Test with a single shortcode emoji
      text = ':thumbs_up:'
      result = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: true, parseToShortcode: false })
      expect(result).to.be.equal('👍')

       // (3) Test with a single shortcode emoji
       text = ':thumbs_up:'
       result = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: true, parseToShortcode: true })
       expect(result).to.be.equal('👍')

      // (4) Test with a multiple shortcodes emojis
      text = ':grinning_face_with_smiling_eyes: :grinning_squinting_face: :smiling_face_with_smiling_eyes: :grinning_face_with_big_eyes: :smiling_face: :smirking_face: :smiling_face_with_heart_eyes: :face_blowing_a_kiss: :kissing_face_with_closed_eyes: :flushed_face: :relieved_face: :grinning_squinting_face: :beaming_face_with_smiling_eyes: :winking_face: :winking_face_with_tongue: :squinting_face_with_tongue: :grinning_face: :kissing_face: :kissing_face_with_smiling_eyes: :face_with_tongue: :sleeping_face: :worried_face: :frowning_face_with_open_mouth: :anguished_face: :face_with_open_mouth: :grimacing_face: :confused_face: :hushed_face: :expressionless_face: :unamused_face: :grinning_face_with_sweat: :downcast_face_with_sweat: :sad_but_relieved_face: :weary_face: :pensive_face: :disappointed_face: :confounded_face: :fearful_face: :anxious_face_with_sweat: :persevering_face: :crying_face: :loudly_crying_face: :face_with_tears_of_joy: :astonished_face: :face_screaming_in_fear: :tired_face: :angry_face: :pouting_face: :face_with_steam_from_nose: :sleepy_face: :face_savoring_food: :face_with_medical_mask: :smiling_face_with_sunglasses: :face_with_crossed_out_eyes: :angry_face_with_horns: :smiling_face_with_horns: :neutral_face: :face_without_mouth: :smiling_face_with_halo: :alien: :yellow_heart: :blue_heart: :purple_heart: :red_heart: :green_heart: :broken_heart: :beating_heart: :growing_heart: :two_hearts: :revolving_hearts: :heart_with_arrow: :sparkling_heart: :sparkles: :star:️ :glowing_star: :dizzy: :collision: :collision: :anger_symbol: :red_exclamation_mark:️ :red_question_mark: :white_exclamation_mark: :white_question_mark: :zzz: :dashing_away: :sweat_droplets: :musical_notes: :musical_note: :fire: :pile_of_poo: :pile_of_poo: :pile_of_poo: :thumbs_up: :thumbs_up: :thumbs_down: :thumbs_down: :ok_hand: :oncoming_fist: :oncoming_fist: :raised_fist: :victory_hand: :waving_hand: :raised_hand: :raised_hand: :open_hands: :index_pointing_up: :backhand_index_pointing_down: :backhand_index_pointing_left: :backhand_index_pointing_right: :raising_hands: :folded_hands: :backhand_index_pointing_up: :clapping_hands: :flexed_biceps: :sign_of_the_horns: :middle_finger: :person_walking: :person_running: :person_running: :woman_and_man_holding_hands: :family: :men_holding_hands: :women_holding_hands: :woman_dancing: :people_with_bunny_ears: :person_gesturing_ok: :person_gesturing_no: :person_tipping_hand: :person_raising_hand: :person_with_veil: :person_pouting: :person_frowning: :person_bowing: :couple_with_heart: :person_getting_massage: :person_getting_haircut: :nail_polish: :boy: :girl: :woman: :man: :baby: :old_woman: :old_man: :person_blond_hair: :person_with_skullcap: :person_wearing_turban: :construction_worker: :police_officer: :baby_angel: :princess: :grinning_cat: :grinning_cat_with_smiling_eyes: :smiling_cat_with_heart_eyes: :kissing_cat: :cat_with_wry_smile: :weary_cat: :crying_cat: :cat_with_tears_of_joy: :pouting_cat: :ogre: :goblin: :see_no_evil_monkey: :hear_no_evil_monkey: :speak_no_evil_monkey: :guard: :skull: :paw_prints: :mouth: :kiss_mark: :droplet: :ear: :eyes: :nose: :tongue: :love_letter: :bust_in_silhouette: :busts_in_silhouette: :speech_balloon: :thought_balloon:'
      result = uEmojiParser.parseToUnicode(text)
      expect(result).to.be.equal('😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ 💫️ 🌟 🥴 💥 💥 💢 ❗️ ❓ ❕ ❔ 😴 💨 💦 🎶 🎵 🧑‍🚒 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👶 👶 👧 👦 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👅 💋 💧 👂 🤩 👃 😋 💌 👤 👥 💬 💭')

      // (5) Test without shortcodes
      text = '👍'
      result = uEmojiParser.parse(text, { parseToHtml: false, parseToUnicode: true, parseToShortcode: false })
      expect(result).to.be.equal('👍')
    })

    it('should throw error with not string parameter', () => {
      let text: any = undefined  // eslint-disable-line
      expect(() => {
        uEmojiParser.parse(text)
      }).to.throw(Error)

      text = 13

      expect(() => {
        uEmojiParser.parse(text)
      }).to.throw(Error)
    })
  })

  describe('Readme tests', () => {
    it('should parse tests', () => {
      // (1) Test parse
      let text: string = '😎'
      let result: string = uEmojiParser.parse(text, {})
      expect(result).to.be.equal('<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>')

      // (2) Parse to html using options
      text = ':smiling_face_with_sunglasses:'
      result = uEmojiParser.parse(text, { parseToHtml: true })
      expect(result).to.be.equal('<img class="emoji" alt="😎" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f60e.png"/>')

      // (3) Parse to html using options
      text = '🚀'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: false, parseToShortcode: false })
      expect(result).to.be.equal('<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/>')

      // (4) Parse to html using options
      text = ':rocket:'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: false, parseToShortcode: true })
      expect(result).to.be.equal('<img class="emoji" alt="🚀" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f680.png"/>')

      // (5) Parse to html using options
      text = 'Hello world! 😎 :smiling_face_with_sunglasses: 🚀 :rocket:'
      result = uEmojiParser.parse(text, { parseToHtml: true, parseToUnicode: true, parseToShortcode: true })
      expect(result).to.be.equal('<img class="emoji" alt="😄" src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f604.png"/>')
    })
  })
})