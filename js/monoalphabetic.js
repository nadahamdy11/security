key=document.getElementById('enteredKey').value;
plaintext = document.getElementById('inputMessage').value;
function encrypt(plaintext, key) {
    plaintext = document.getElementById('inputMessage').value.toUpperCase().replace(/[^A-Z]/g, '');
    key = document.getElementById('enteredKey').value.toUpperCase().replace(/[^A-Z]/g, '');

    var ciphertext = '';
    for (var i = 0; i < plaintext.length; i++) {
      var plaintextCharCode = plaintext.charCodeAt(i) - 65;
      var keyCharCode = key.charCodeAt(plaintextCharCode);
      var ciphertextCharCode = (plaintextCharCode + keyCharCode) % 26;
      ciphertext += String.fromCharCode(ciphertextCharCode + 65);
    }

    return ciphertext;
  }

  function decrypt(ciphertext, key) {
    ciphertext = document.getElementById('result').value.toUpperCase().replace(/[^A-Z]/g, '');
    key = document.getElementById('enteredKey').value.toUpperCase().replace(/[^A-Z]/g, '');

    var plaintext = '';
    for (var i = 0; i < ciphertext.length; i++) {
      var ciphertextCharCode = ciphertext.charCodeAt(i) - 65;
      var keyCharCode = key.indexOf(String.fromCharCode(ciphertextCharCode + 65));
      var plaintextCharCode = (ciphertextCharCode - keyCharCode + 26) % 26;
      plaintext += String.fromCharCode(plaintextCharCode + 65);
    }

    return plaintext;
  }

  function updateCiphertext() {
    if (encryptButton.checked) {
      ciphertextInput.value = encrypt(plaintextInput.value, keyInput.value);
    } else if (decryptButton.checked) {
      ciphertextInput.value = decrypt(plaintextInput.value, keyInput.value);
    }
  }


  

  // gets the message and key entered by user and ciphers it
function cipherFunction(){

  var plaintext =document.getElementById("inputMessage").value;

  

    var result = encrypt(plaintext, key);
    document.getElementById("result").value = result;
  
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherFunction(){
   var plaintext =document.getElementById("inputMessage").value;


    var result = decrypt(plaintext, key);
    document.getElementById("result").value = result;
  }