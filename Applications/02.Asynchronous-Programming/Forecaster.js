function attachEvents() {
      let baseURL = 'http://localhost:3030/jsonstore/forecaster';
  
      let location = document.getElementById('location');
  
      let forecast = document.getElementById('forecast');
      let current = document.getElementById('current');
      let upcoming = document.getElementById('upcoming');
  
      let sunny = '&#x2600';
      let partlySunny = '&#x26C5';
      let overcast = '&#x2601';
      let rain = '&#x2614';
      let degrees = '&#176';
  
      let divCurrent = document.createElement('div');
      let divUpcoming = document.createElement('div');
  
      let code = '';
  
      let submit = document.getElementById('submit');
      submit.addEventListener('click', (e) => {
          divCurrent.innerHTML = '';
          divCurrent.className = 'forecasts';
  
          divUpcoming.innerHTML = '';
          divUpcoming.className = 'forecast-info';
  
          forecast.style.display = 'block';
  
          fetch(`${baseURL}/locations`).
              then(response => response.json()).
              then(data => {
                  let city = data.find(c => c.name == location.value);
  
  
                  if (city == undefined) {
                      forecast.textContent = 'City not found!'
                      return;
                  }
  
                  code = city.code;
  
                  fetch(`${baseURL}/today/${code}`).
                      then(response => response.json()).
                      then(data => {
                          let symbol = document.createElement('span');
                          symbol.className = 'condition symbol';
                          symbol.innerHTML = showPicture(data.forecast.condition);
  
                          let condition = document.createElement('span');
                          condition.className = 'condition';
  
                          let spanCity = document.createElement('span');
                          spanCity.className = 'forecast-data';
                          spanCity.textContent = data.name;
  
                          let spanDegreese = document.createElement('span');
                          spanDegreese.className = 'forecast-data';
                          spanDegreese.innerHTML = `${data.forecast.low + degrees}/${data.forecast.high + degrees}`;
  
                          let spanCondition = document.createElement('span');
                          spanCondition.className = 'forecast-data';
                          spanCondition.textContent = data.forecast.condition;
  
                          divCurrent.appendChild(symbol);
  
                          condition.appendChild(spanCity);
                          condition.appendChild(spanDegreese);
                          condition.appendChild(spanCondition);
  
                          divCurrent.appendChild(condition);
                          current.appendChild(divCurrent);
  
                          fetch(`${baseURL}/upcoming/${code}`).
                              then(response => response.json()).
                              then(data => {
                                  data.forecast.forEach(day => {
                                      let spanUpcoming = document.createElement('span');
                                      spanUpcoming.className = 'upcoming';
  
                                      let spanSymbol = document.createElement('span');
                                      spanSymbol.className = 'symbol';
                                      spanSymbol.innerHTML = showPicture(day.condition);
  
                                      let spanDegreese = document.createElement('span');
                                      spanDegreese.className = 'forecast-data';
                                      spanDegreese.innerHTML = `${day.low + degrees}/${day.high + degrees}`;
  
                                      let spanCondition = document.createElement('span');
                                      spanCondition.className = 'forecast-data';
                                      spanCondition.textContent = day.condition
  
                                      spanUpcoming.appendChild(spanSymbol);
                                      spanUpcoming.appendChild(spanDegreese);
                                      spanUpcoming.appendChild(spanCondition);
  
                                      divUpcoming.appendChild(spanUpcoming)
                                      upcoming.appendChild(divUpcoming)
                                  })
                              })
                      }).catch(error => {
                          console.log(error);
                      })
              });
      });
  
      function showPicture(condition) {
          switch (condition) {
              case "Sunny": return sunny;
              case "Partly sunny": return partlySunny;
              case "Overcast": return overcast;
              case "Rain": return rain;
          }
  
      }
  }
  
  attachEvents();