function solve() {
  let text = document.getElementById("text").value.split(" ");
  let convention = document.getElementById("naming-convention").value;

  let result = "";

  switch (convention) {
    case "Camel Case": 
          for (let i = 0; i < text.length; i++) {
            let word = text[i].toLowerCase();
            if (i === 0) {
              result = text[0].toLowerCase();
              continue;
            }
            result += word[0].toUpperCase() + word.substring(1);
          }
    break;

    case "Pascal Case": 
          for (let word of text) {
            word = word.toLowerCase();
            result += word[0].toUpperCase() + word.substring(1);
          }
    break;
    
    default: result = "Error!"
  }
  document.getElementById("result").textContent = result;
}