export interface ObjectType {
  [key: string]: any
}

export interface Class<T> {
  new(...args: any): T
}

export interface EmojiType {
  name: string,
  slug: string,
  group: string,
  emoji_version: string,
  unicode_version: string,
  skin_tone_support: boolean,
  char: string,
  keywords: Array<string>
}

export interface EmojiLibJsonType {
  [key: string]: EmojiType
}

export interface UEmojiParserType {
  emojiLibJson: EmojiLibJsonType
  getEmojiObjectByCode: (emojiCode: string) => EmojiType | undefined
  parse: (text: string) => string
}