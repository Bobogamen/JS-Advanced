function toggle() {
    let displayValue = document.getElementById("extra")[0].style.display;
        if (displayValue == "") {
            document.getElementById("extra").style.display = "block";
            document.getElementsByClassName("button")[0].textContent = "less";

        } else {
            document.getElementById("extra").style.display = "";
            document.getElementsByClassName("button")[0].textContent = "More";
        }
}

// function toggle() {
//     let button = document.querySelector(`span.button`);
//     let divHiden = document.getElementById(`extra`);
//     if (button.textContent == `More`) {
//         divHiden.style.display = `block`;
//         button.textContent = `Less`;
//     } else if (button.textContent == `Less`) {
//         divHiden.style.display = `none`;
//         button.textContent = `More`;
//     }
// }