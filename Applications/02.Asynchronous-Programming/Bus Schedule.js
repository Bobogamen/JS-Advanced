function solve() {
      let info = document.querySelector('.info');
  
      let departBtn = document.getElementById('depart');
      let arriveBtn = document.getElementById('arrive');
  
      let stop = {
          next: 'depot'
      }
  
      function depart() {
          departBtn.disabled = true;
  
          let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
          fetch(url).
              then(response => response.json()).
              then(data => {
                  stop = Object.assign(data);
  
                  info.textContent = `Next stop ${stop.name}`;
              }).catch(error => {
                  console.log(error);
              })
  
          arriveBtn.disabled = false;
      }
  
      function arrive() {
          arriveBtn.disabled = true;
          departBtn.disabled = false;
  
          info.textContent = `Arriving at ${stop.name}`;
      }
  
      return {
          depart,
          arrive
      };
  }
  
  let result = solve();