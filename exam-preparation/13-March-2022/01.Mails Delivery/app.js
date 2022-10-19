function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addMail(event);
    });

    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', (event) => reset(event));

    let listedMails = document.getElementById('list');
    let sentMails = document.querySelector('.sent-list');
    let deletedMails = document.querySelector('.delete-list');

    function addMail(event) {
        let name = recipientName.value;
        let titleMessage = title.value;
        let text = message.value;

        if (name == '' || titleMessage == '' || text == '') {
            return;
        }

        let li = document.createElement('li');

        let h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleMessage}`;

        let h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${name}`;

        let span = document.createElement('span');
        span.textContent = text;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'send');
        sendButton.textContent = "Send";
        sendButton.addEventListener('click', (event) =>
            sendMessage(event, name, titleMessage));

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', (event) =>
            deleteMessage(event, name, titleMessage));

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        li.appendChild(h4Title);
        li.appendChild(h4Name);
        li.appendChild(span);
        li.appendChild(div);

        listedMails.appendChild(li);

         reset();
    };

    function reset(event) {
        recipientName.value = "";
        title.value = "";
        message.value = "";
    };

    function sendMessage(event, name, title) {
        let li = document.createElement('li');

        let spanName = document.createElement('span');
        spanName.textContent = `To: ${name}`;

        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${title}`;

        let div = document.createElement('div');
        div.className = "btn";

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', (event) =>
            deleteMessage(event, name, title))

        div.appendChild(deleteButton);

        li.appendChild(spanName);
        li.appendChild(spanTitle);
        li.appendChild(div);

        sentMails.appendChild(li);

        event.target.parentElement.parentElement.remove();
    };

    function deleteMessage(event, name, title) {
        let li = document.createElement('li');

        let spanName = document.createElement('span');
        spanName.textContent = `To: ${name}`;

        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${title}`;

        li.appendChild(spanName);
        li.appendChild(spanTitle);

        deletedMails.appendChild(li);

        event.target.parentElement.parentElement.remove();
    };

};

solve();