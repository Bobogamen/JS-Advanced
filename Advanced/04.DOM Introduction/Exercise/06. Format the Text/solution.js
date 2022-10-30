function solve() {
  let input = document.getElementById('input').value.split('.');
  let output = document.getElementById('output');

  let sentances = input.filter((p) => p.length > 0);

  for (let i = 0; i < sentances.length; i += 3) {
    let paragrapgh = [];

    for (let j = 0; j < 3; j++) {
      if (sentances[i + j]) {
        paragrapgh.push(sentances[i + j]);
      }
    }

    let result = paragrapgh.join('.')  + '.';
    output.innerHTML += (`<p>${result}</p>`);
  }
}