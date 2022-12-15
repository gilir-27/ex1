import { Router } from 'express';
import { americanDeclaration } from '../data/declarationDoc';
import { bealeCipher, plaintext } from '../data/bealeCipher';
import { getEffectiveTypeParameterDeclarations } from 'typescript';

const encryptionHandler = Router();

// encryptionHandler.get('/encrypt', (req, res, next) => {
//   const plaintextAsCharacters = plaintext.split("");
//   const americanDeclaration = americanDeclaration
//   const cipher = plaintextAsCharacters.map((char) => {
//    return americanDeclaration.indexOf
//   })
// });




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
