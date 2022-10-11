function solve() {
   let addButtons = document.getElementsByTagName('button');
   let checkOut = document.getElementsByClassName('checkout')[0];
   let textArea = document.getElementsByTagName('textarea')[0];

   let prodcuts = [];
   let sum = 0;

   for (let i = 0; i < addButtons.length; i++) {
      if (i == 3) {
         checkOut.addEventListener('click', (event) => checkOutCart(event));
         break;
      }

      let productName = addButtons[i].parentElement.parentElement.children[1].children[0].textContent;
      let productPrice = addButtons[i].parentElement.parentElement.children[3].textContent;
      addButtons[i].addEventListener('click', (event) => add(event, productName, productPrice));

   }


   function add(event, name, price) {
      if (!prodcuts.includes(name)) {
         prodcuts.push(name);
      }

      sum += Number(price);
      textArea.textContent += `Added ${name} for ${price} to the cart.\n`
   }



   function checkOutCart(event) {
      for (const button of addButtons) {
         button.disabled = true;
      }

         textArea.textContent += `You bought ${prodcuts.join(", ")} for ${sum.toFixed(2)}.`
   }
}