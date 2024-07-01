const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const algorithm = 'aes-256-cbc';
const keyPath = path.join(__dirname, 'encryption.key');
const iv = crypto.randomBytes(16); // Initialization vector

function generateKey() {
  const key = crypto.randomBytes(32); // AES-256 requires a 32-byte key
  fs.writeFileSync(keyPath, key.toString('hex'));
  console.log(`Encryption key generated and saved to ${keyPath}`);
}

function getKey() {
  if (!fs.existsSync(keyPath)) {
    console.error('Encryption key not found. Please generate a key first.');
    process.exit(1);
  }
  return Buffer.from(fs.readFileSync(keyPath, 'utf8'), 'hex');
}

function encrypt(text) {
  const key = getKey();
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decrypt(text) {
  const key = getKey();
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  generateKey,
  encrypt,
  decrypt
};