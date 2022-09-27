function editElement(reference, match, replacer) {

    let text = reference.textContent;

    let matcher = new RegExp(match, 'g');

    text = text.replace(matcher, replacer);

    reference.textContent = text;
    
}