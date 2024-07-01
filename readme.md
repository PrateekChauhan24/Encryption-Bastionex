# Encryption CLI Tool

A CLI tool for encrypting and decrypting data using AES-256 encryption. 

## Features

- Encrypt and decrypt data.
- Generate a random encryption key.
- Secure key storage with error handling.

## Prerequisites

- Node.js

## Installation

1. Make the CLI script executable:

   ```bash
   chmod +x cli.js
   ```

## Usage

1. **Generate Encryption Key:**

   ```bash
   ./cli.js
   # Choose option 1 to generate the key
   ```

2. **Encrypt Data:**

   ```bash
   ./cli.js
   # Choose option 2 and enter data to encrypt
   ```

3. **Decrypt Data:**

   ```bash
   ./cli.js
   # Choose option 3 and enter data to decrypt
   ```

## Project Structure

```
encryption-cli-tool/
├── cli.js
├── crypto-utils.js
├── encryption.key (generated after running the script)
└── README.md
```
