import { Router } from 'express';
import { americanDeclaration } from '../data/declarationDoc';
import { bealeCipher, plaintext } from '../data/bealeCipher';
import { getEffectiveTypeParameterDeclarations } from 'typescript';
const ILLEGAL_CHAR = -1;
const encryptionHandler = Router();

encryptionHandler.get('/encrypt', (req, res, next) => {
  const plaintextAsCharacters = plaintext.split("").map(char => char.toLowerCase());
  const americanDeclarationByWords = americanDeclaration.split(" ").map(word => word.toLowerCase());
  const result = plaintextAsCharacters.map((char) => {
    if (char.length == 1 && char.match(/[a-z]/i)) {
      let index = americanDeclarationByWords.findIndex(word => word.startsWith(char));
      return index + 1;
    }
    else{return ILLEGAL_CHAR}
  });
  const strResult = result.filter((index) => index != ILLEGAL_CHAR).join(', ');
  res.json(strResult);
});




encryptionHandler.get('/decrypt', (req, res, next) => {
  const americanDeclarationWords = americanDeclaration.split(' ');

  const decryptedText = bealeCipher.map((cipher) => {
    if (
      cipher === 810 &&
      americanDeclarationWords[cipher] === 'fundamentally'
    ) {
      return 'y';
    } else if (cipher === 1004 && americanDeclarationWords[cipher] === 'have') {
      return 'x';
    } else {
      return americanDeclarationWords[cipher - 1][0];
    }
  });

  res.json(decryptedText.join(''));
});

export default encryptionHandler;
