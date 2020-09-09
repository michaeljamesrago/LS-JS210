function rot13(str) {
  let result = '';

  for (let ind = 0; ind < str.length; ind++) {
    result += encode(str[ind]);
  }

  return result;

  function encode(character) {
    const UPPER_BASE = 'A'.charCodeAt(0);
    const LOWER_BASE = 'a'.charCodeAt(0);
    const CIPHER = 13;
    let baseCode;

    if (character >= 'A' && character <= 'Z') baseCode = UPPER_BASE;
    else if (character >= 'a' && character <= 'z') baseCode = LOWER_BASE;
    else return character;

    let ordinal = character.charCodeAt(0) - baseCode;
    let rotation = (ordinal + CIPHER) % 26;

    return String.fromCharCode(baseCode + rotation);
  }
}
