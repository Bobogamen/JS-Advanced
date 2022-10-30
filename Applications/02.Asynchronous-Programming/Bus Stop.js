function getInfo() {
      let stopID = document.getElementById('stopId');
      let baseURL = 'http://localhost:3030/jsonstore/bus/businfo'
  
      let ul = document.getElementById('buses');
      let stopName = document.getElementById('stopName');
  
  
      fetch(`${baseURL}/${stopID.value}`).
          then(response => response.json()).
          then(data => {
              let name = data.name;
              let buses = data.buses;
  
              stopName.textContent = name;
  
              ul.innerHTML = '';
              Object.keys(buses).forEach(bus => {
                  let li = document.createElement('li');
                  li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                  ul.appendChild(li);
              })
          }).catch(error => {
              stopName.textContent = 'Error';
              ul.innerHTML = '';
          })
  };