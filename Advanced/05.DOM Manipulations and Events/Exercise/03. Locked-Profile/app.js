function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        let parentDiv = button.parentElement.childNodes;
        button.addEventListener('click', (event) => showMore(event, parentDiv));
    }

    function showMore(event, parentDiv) {
        let info = parentDiv[18];
        let lock = parentDiv[5].checked;
        let button = parentDiv[20];

        if (button.textContent == 'Hide it' && lock == true) {
            return;
        }

        if (info.style.display == '' && lock == false) {
            info.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            info.style.display = '';
            button.textContent = "Show more";
        }
    }
}