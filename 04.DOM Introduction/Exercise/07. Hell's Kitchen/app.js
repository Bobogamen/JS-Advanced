function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);

      let output = [];

      for (const item of input) {

         let restaurant = item.split(" - ")[0];
         let workers = item.split(" - ")[1];
         
         debugger;
      }



   }
}