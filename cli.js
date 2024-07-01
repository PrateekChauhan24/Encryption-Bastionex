#!/usr/bin/env node

const readline = require('readline');
const { generateKey, encrypt, decrypt } = require('./crypto-utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    try {
        console.log('Welcome to the Encryption CLI Tool');
        console.log('1. Generate Encryption Key');
        console.log('2. Encrypt Data');
        console.log('3. Decrypt Data');
        console.log('4. Exit');
      
        const choice = await prompt('Please choose an option: ');
      
        switch (choice) {
          case '1':
            generateKey();
            break;
          case '2':
            const dataToEncrypt = await prompt('Enter data to encrypt: ');
            const encryptedData = encrypt(dataToEncrypt);
            console.log(`Encrypted Data: ${encryptedData}`);
            break;
          case '3':
            const dataToDecrypt = await prompt('Enter data to decrypt: ');
            try {
              const decryptedData = decrypt(dataToDecrypt);
              console.log(`Decrypted Data: ${decryptedData}`);
            } catch (error) {
              console.error('Failed to decrypt data. Ensure the input and key are correct.');
            }
            break;
          case '4':
            rl.close();
            process.exit(0);
          default:
            console.log('Invalid choice. Please choose a valid option.');
            break;
        }
      
        rl.close();
    } catch (error) {
        console.log(error);
    } 
}

main();