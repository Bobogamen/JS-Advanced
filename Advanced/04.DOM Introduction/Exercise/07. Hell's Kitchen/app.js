// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick() {
//       let input = JSON.parse(document.getElementById("inputs").children[1].value);

//       let output = [];

//       for (const item of input) {

//          let restaurant = item.split(" - ")[0];
//          let workers = item.split(" - ")[1].split(", ");

         
//          let current = {};
//          current["restaurant"] = restaurant;
//          current["workers"] = {};


//          for (let man of workers) {
//             let [name, salary] = man.split(" ");

//             current["workers"][name] = Number(salary);
//          }
//          output.push(current);
//       }

//       let best = [];

//       for (let rest of output) {
//          let salaries = Object.values(rest["workers"]);

//          let bestSalary = Math.max(...salaries);
//          rest["best"] = bestSalary;

//          let avgSalary = salaries.reduce((a, b) => a + b, 0) / salaries.length;
//          rest["avg"] = avgSalary;

//          best.push(avgSalary);
//       }

//       best = Math.max(...best);

//       output = output.filter((r) => r.avg === best);

//       document.querySelector("#outputs #bestRestaurant p").textContent = 
//       `Name: ${output[0].restaurant} Average Salary: ${output[0].avg.toFixed(2)} Best Salary: ${output[0].best.toFixed(2)}`;

//       salaries = Object.values(output[0]).filter(e => typeof e === 'number').sort((a, b) => b - a);

//       let workers = [];

//       for (let key in output[0].workers) {
//          workers.push(`Name: ${key} With Salary: ${output[0].workers[key]}`)
//       }

//       document.querySelector("#outputs #workers p").textContent = workers.join(" ");
//    }
// }

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let arr = JSON.parse(document.querySelector('#inputs textarea').value);
       let objWinner = findBestRestaurant(arr);
       document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
       document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
   }

   function getMsgRest(objWinner) {
       return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
   }

   function getMsgEmp(workers) {
       return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findBestRestaurant(arr) {
       let resultRestaurants = arr.reduce((acc, e) => {
           let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
           workers = workers.map(w => {
               let [worker, salary] = w.split(' ');
               return {
                   worker: worker,
                   salary: +salary
               };
           });
           let foundRestraunt = acc.find(r => r.name === restaurant);
           if (foundRestraunt) {
               foundRestraunt.workers = foundRestraunt.workers.concat(workers);
           } else {
               acc.push({
                   name: restaurant,
                   workers: workers
               });
           }
           return acc;
       }, []);

       resultRestaurants.forEach((el, idx) => {
           el.inputOrder = idx;
           el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
           el.maxSalary = Math.max(...el.workers.map(w => w.salary));
       });

       resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
       let bestRestaurant = resultRestaurants[0];
       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

       return bestRestaurant;
   }
}