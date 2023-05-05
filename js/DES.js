    const plaintextInput = document.getElementById("inputMessage").value;
    const keyInput = document.getElementById("enteredKey").value;
    const ciphertextInput = document.getElementById("result").value;
    
    function encrypt(_plaintextInput, _keyInput) {
      const ciphertext = CryptoJS.AES.encrypt(_plaintextInput, keyInput).toString();
      return ciphertext;
    }
    
    function decrypt(ciphertext, keyInput) {
      const _plaintextInput = CryptoJS.AES.decrypt(ciphertext, keyInput).toString(CryptoJS.enc.Utf8);
      return _plaintextInput;
    }
    
    function updateCiphertext() {
      if (encryptButton.checked) {
        ciphertextInput.value = encrypt(plaintextInput.value, keyInput.value);
      } else if (decryptButton.checked) {
        ciphertextInput.value = decrypt(plaintextInput.value, keyInput.value);
      }
    }

    function cipherDESFunction(){      
        
      
          var result = encrypt(plaintextInput, keyInput);
          document.getElementById("result").value = result;
        
        }
        
        // gets the message and key entered by user and deciphers it
        function decipherDESFunction(){
      
      
          var result = decrypt(plaintextInput, keyInput);
          document.getElementById("result").value = result;
        }
    