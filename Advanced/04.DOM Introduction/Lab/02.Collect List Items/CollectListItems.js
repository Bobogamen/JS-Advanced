function extractText() {
    let list = document.querySelectorAll('ul li');

    let textArea = document.getElementById('result');

    for (const item of list) {
        textArea.value += item.textContent;
        
    }
}