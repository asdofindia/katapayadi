export function decode(encoded) {
  const valuables = new Map([

    // malayalam
    ['അ', '0'], ['ആ', '0'], ['ഇ', '0'], ['ഈ', '0'], ['ഉ', '0'], ['ഊ', '0'], ['ഋ', '0'],
    ['എ', '0'], ['ഏ', '0'], ['ഐ', '0'], ['ഒ', '0'], ['ഓ', '0'], ['ഔ', '0'],
    ['ക', '1'], ['ഖ', '2'], ['ഗ', '3'], ['ഘ', '4'], ['ങ', '5'],
    ['ച', '6'], ['ഛ', '7'], ['ജ', '8'], ['ഝ', '9'], ['ഞ', '0'],
    ['ട', '1'], ['ഠ', '2'], ['ഡ', '3'], ['ഢ', '4'], ['ണ', '5'],
    ['ത', '6'], ['ഥ', '7'], ['ദ', '8'], ['ധ', '9'], ['ന', '0'],
    ['പ', '1'], ['ഫ', '2'], ['ബ', '3'], ['ഭ', '4'], ['മ', '5'],
    ['യ', '1'], ['ര', '2'], ['ല', '3'], ['വ', '4'], ['ശ', '5'],
    ['ഷ', '6'], ['സ', '7'], ['ഹ', '8'], ['ള', '9'], ['ഴ', '0'], ['റ', '0'],

    // hindi
    ['अ', '0'], ['आ', '0'], ['इ', '0'], ['ई', '0'], ['उ', '0'], ['ऊ', '0'],
    ['ऋ', '0'], ['ॠ', '0'], ['ए', '0'], ['ऐ', '0'], ['ओ', '0'], ['औ', '0'],
    ['क', '1'], ['ख', '2'], ['ग', '3'], ['घ', '4'], ['ङ', '5'],
    ['च', '6'], ['छ', '7'], ['ज', '8'], ['झ', '9'], ['ञ', '0'],
    ['ट', '1'], ['ठ', '2'], ['ड', '3'], ['ढ', '4'], ['ण', '5'],
    ['त', '6'], ['थ', '7'], ['द', '8'], ['ध', '9'], ['न', '0'],
    ['प', '1'], ['फ', '2'], ['ब', '3'], ['भ', '4'], ['म', '5'],
    ['य', '1'], ['र', '2'], ['ल', '3'], ['व', '4'], ['श', '5'],
    ['ष', '6'], ['स', '7'], ['ह', '8'],

    // kannada
    ['ಅ', '0'], ['ಆ', '0'], ['ಇ', '0'], ['ಈ', '0'], ['ಉ', '0'], ['ಊ', '0'], ['ಋ', '0'],
    ['ಎ', '0'], ['ಏ', '0'], ['ಐ', '0'], ['ಒ', '0'], ['ಓ', '0'], ['ಔ', '0'],
    ['ಕ', '1'], ['ಖ', '2'], ['ಗ', '3'], ['ಘ', '4'], ['ಙ', '5'],
    ['ಚ', '6'], ['ಛ', '7'], ['ಜ', '8'], ['ಝ', '9'], ['ಞ', '0'],
    ['ಟ', '1'], ['ಠ', '2'], ['ಡ', '3'], ['ಢ', '4'], ['ಣ', '5'],
    ['ತ', '6'], ['ಥ', '7'], ['ದ', '8'], ['ಧ', '9'], ['ನ', '0'],
    ['ಪ', '1'], ['ಫ', '2'], ['ಬ', '3'], ['ಭ', '4'], ['ಮ', '5'],
    ['ಯ', '1'], ['ರ', '2'], ['ಲ', '3'], ['ವ', '4'], ['ಶ', '5'],
    ['ష', '6'], ['ಸ', '7'], ['ಹ', '8'],
  ]);
  const destroyers = new Set([
    '്',
    '्',
    '್'
  ]);
  const assistors = new Set([
    // malayalam
    'ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൗ', 'ം', 'ഃ',

    // hindi
    'ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॆ', 'े', 'ॊ', 'ो', 'ं', 'ः',

    // kannada
    'ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ', 'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ', 'ಂ', 'ಃ'
  ]);
  var decodedNumber = '';
  var currDigit;
  var currDigitCauser;
  encoded += 'ാ';
  for (var chr of encoded) {
    // console.log('chr' + chr)
    if (currDigit !== undefined) {
      if (destroyers.has(chr)) {
        currDigit = undefined;
        // console.log('destroyer' + chr)
      } else {
        decodedNumber = currDigit + decodedNumber;
        // console.log(currDigitCauser, currDigit);
        if (valuables.has(chr)) {
          currDigit = valuables.get(chr);
          currDigitCauser = chr;
        } else {// if (assistors.has(chr)) {
          currDigit = undefined;
        }
      }
    } else {
      if (valuables.has(chr)) {
        currDigit = valuables.get(chr);
        currDigitCauser = chr;
        // console.log(chr + currDigit);
      }
    }
  }
  // if (currDigit != undefined) {
  //   decodedNumber += currDigit;
  // }
  return decodedNumber;
}
