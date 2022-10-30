function sumTable() {

      let rows = document.getElementsByTagName('td');

      let sum = 0;

      for (let i = 1; i < rows.length; i+= 2) {
            sum += Number(rows[i].textContent);            
      }

      document.getElementById('sum').textContent = sum;

}