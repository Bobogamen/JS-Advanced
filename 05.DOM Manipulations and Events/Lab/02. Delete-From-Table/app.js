function deleteByEmail() {
    let input = document.querySelector("input").value;

    let emails = document.querySelectorAll("#customers tr td:nth-child(2)")

    for (const row of emails) {

        if (row.textContent == input) {
            row.parentElement.remove();
            document.getElementById("result").textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById("result").textContent = 'Not found.';
}