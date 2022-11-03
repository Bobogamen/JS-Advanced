function lockedProfile() {
      let main = document.getElementById('main');
      let profile = document.querySelector('.profile');
  
      fetch('http://localhost:3030/jsonstore/advanced/profiles').
          then(response => response.json()).
          then(data => {
              main.innerHTML = '';
              for (const user of Object.entries(data)) {
                  let current = profile.cloneNode(true);
  
                  current.children[9].style.display = 'none';
  
                  current.children[8].value = user[1].username;
                  current.children[9].children[2].value = user[1].email
                  current.children[9].children[4].value = user[1].age
                  current.children[2].checked = true;
  
                  let button = current.children[10];
                  button.addEventListener('click', (event) => showMore(event));
  
                  main.appendChild(current);
              }
          });
  
      function showMore(event) {
  
          let info = event.target.previousElementSibling;
          let lock = event.target.parentElement.children[2].checked;
          let unlock = event.target.parentElement.children[4].checked;
          let button = event.target;
  
          if (unlock) {
              if (button.textContent == 'Hide it') {
                  button.textContent = "Show more";
                  info.style.display = 'none';
              } else {
                  button.textContent = 'Hide it';
                  info.style.display = '';
              }
          }
      }
  }