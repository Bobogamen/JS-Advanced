function create(words) {
   for (const word of words) {
      let content = document.getElementById('content');

      let div = document.createElement('div');

      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.addEventListener('click', (event) => show(event, p));

      div.appendChild(p);
      content.appendChild(div);
   }

   function show (event, p) {
      p.style.display = 'block';
   }
}