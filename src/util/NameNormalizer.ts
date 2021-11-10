class ParsedName {
  private readonly parts: string[];
  private readonly name: String;

  constructor(name: String) {
    this.name = name;
    this.parts = name.split(' ')
  }

  baseName() {
    return this.name;
  }

  isMononym() {
    return this.parts.length === 1
  }

  last() {
    return this.parts[1]
  }

  first() {
    return this.parts[0]
  }
}

class NameNormalizer {
  normalize(name: String): String {
    const parsedName = new ParsedName(name)
    if (parsedName.isMononym())
      return parsedName.baseName()
    return `${parsedName.last()}, ${parsedName.first()}`
  }
}

export default NameNormalizer