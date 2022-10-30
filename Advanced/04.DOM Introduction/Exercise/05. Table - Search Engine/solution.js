function solve() {
   let searchText = document.getElementById('searchField');
   let list = Array.from(document.querySelectorAll('tbody tr'));

   if (searchText === null || list === null) {
      throw new Error('Missing HTML elements!');
   }

   document.getElementById('searchBtn').addEventListener('click', onClick);

   function onClick() {
      for (let item of list) {
         item.classList.remove('select');
      }
      if (searchText.value == '') {
         return '';
      }

      for (let item of list) {
         if (item.textContent.includes(searchText.value)) {
            item.classList.add('select');
         }
      }
      searchText.value = '';
   }
}