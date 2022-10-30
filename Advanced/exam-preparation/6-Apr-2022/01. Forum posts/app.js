window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category')
  let text = document.getElementById('post-content');
  
  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  document.getElementById('publish-btn').addEventListener('click', (event) => {
    event.preventDefault();
    createPost(event);
  });

  document.getElementById('clear-btn').addEventListener('click', clearAll);

  function createPost() {

    let titleValue = title.value;
    let categoryValue = category.value;
    let textValue = text.value;

    if (titleValue === '' || categoryValue == '' || textValue == '') {
      return;
    }

    let li = document.createElement('li');
    li.className = 'rpost';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = titleValue;

    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${categoryValue}`;

    let pText = document.createElement('p');
    pText.textContent = `Content: ${textValue}`;

    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pText);
    li.appendChild(article);
    reviewList.appendChild(li);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', (event) => editPost(event, titleValue, categoryValue, textValue));

    let approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', (event) => approvePost(event, titleValue, categoryValue, textValue));

    li.appendChild(approveBtn);
    li.appendChild(editBtn);

    title.value = '';
    category.value = '';
    text.value = '';

    function editPost(event, postTitle, postCategory, postText) {
      title.value = postTitle;
      category.value = postCategory;
      text.value = postText;

      event.target.parentElement.remove();
    }

    function approvePost(event, postTitle, postCategory, postText) {
      
      let li = document.createElement('li');
      li.className = 'rpost';

      let article = document.createElement('article');

      let h4 = document.createElement('h4');
      h4.textContent = postTitle;

      let pCategory = document.createElement('p');
      pCategory.textContent = `Category: ${postCategory}`;

      let pText = document.createElement('p');
      pText.textContent = `Content: ${postText}`;

      article.appendChild(h4);
      article.appendChild(pCategory);
      article.appendChild(pText);
      li.appendChild(article);
      publishedList.appendChild(li);

      event.target.parentElement.remove();
    }

  }

  function clearAll() {
    publishedList.innerHTML = '';
  }
}
