function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];

    let input = document.querySelectorAll('textarea')[0];
    let output = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', (event) => encodeMessage(input));
    decodeButton.addEventListener('click', (event) => decodeMesssage(output));

    function encodeMessage(text) {
        let textValue = text.value;
        let ecodedText = '';

        for (let i = 0; i < textValue.length; i++) {
            let letterCode = textValue[i].charCodeAt();
            letterCode++;

            ecodedText += String.fromCharCode(letterCode);
        }

        input.value = '';
        output.value = ecodedText;
    }

    function decodeMesssage(text) {
        let textValue = text.value;
        let decodedText = '';

        for (let i = 0; i < textValue.length; i++) {
            let letterCode = textValue[i].charCodeAt();
            letterCode--;

            decodedText += String.fromCharCode(letterCode);
        }

        output.value = decodedText;
    }
}