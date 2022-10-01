function search() {
   let list = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value.toLowerCase();

   let result = 0;

   for (let item of list) {

      if (item.textContent.toLowerCase().includes(searchText)) {
         item.style.textDecoration = "underline";
         item.style.fontWeight = "bold";
         result++;
      }
   }
   document.getElementById("result").textContent = `${result} matches found`;
}
