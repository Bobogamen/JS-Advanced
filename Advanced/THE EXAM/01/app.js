window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');

  let previewList = document.getElementById('preview-list');
  let main = document.getElementById('main');

  let publish = document.getElementById('form-btn');
  publish.addEventListener('click', (event) => {
    if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && title.value !== '' &&
      story.value !== '') {
      event.preventDefault();
      addStory(event,
        firstName.value,
        lastName.value,
        age.value,
        title.value,
        genre.value,
        story.value)
    }

    clearInputs();
  });


  function addStory(event, fname, lname, age, title, genre, story) {
    event.target.setAttribute('disabled', '');

    let li = document.createElement('li');
    li.className = "story-info";

    let article = document.createElement('article');
    HTMLGenerator('h4', `Name: ${fname} ${lname}`, article);
    HTMLGenerator('p', `Age: ${age}`, article);
    HTMLGenerator('p', `Title: ${title}`, article);
    HTMLGenerator('p', `Genre: ${genre}`, article);
    HTMLGenerator('p', story, article);

    li.appendChild(article);

    let saveBtn = HTMLGenerator("button", "Save Story", li);
    saveBtn.className = "save-btn";
    let editBtn = HTMLGenerator("button", "Edit Story", li);
    editBtn.className = "edit-btn";
    let deleteBtn = HTMLGenerator("button", "Delete Story", li);
    deleteBtn.className = "delete-btn";

    previewList.appendChild(li);

    saveBtn.addEventListener('click', () => {
      main.innerHTML = `<h1>Your scary story is saved!</h1>`
    });

    editBtn.addEventListener('click', (event) =>
      editStory(event, fname, lname, age, title, genre, story));

    deleteBtn.addEventListener('click', (event) => deleteStory(event));
  }

  function HTMLGenerator(type, content, parent) {
    let element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }

  function clearInputs() {
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    title.value = '';
    story.value = '';
  }

  function editStory(event, fname, lname, ageValue, titleValue, genreValue, storyText) {
    deleteStory(event);

    firstName.value = fname;
    lastName.value = lname;
    age.value = ageValue;
    title.value = titleValue;
    genre.value = genreValue;
    story.value = storyText;
  }

  function deleteStory(event) {
    event.target.parentElement.remove();

    enablePublishButton();
  }

  function enablePublishButton() {
    publish.removeAttribute('disabled');
  }
}
