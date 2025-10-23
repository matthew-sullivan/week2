//fetch JSON object from a web API
fetchData();

const tableBody = document.querySelector("#tableBody");

async function fetchData() {

        const response = await fetch("./singers.json");
        
        if (!response.ok) {
            throw new Error("Error!");
        }

        const data = await response.json();

        for (let key of data) {
            const tableRow = document.createElement("tr");
            const headers = ["singer", "dob", "bestsongs"];
            for (let head of headers) {
                const tableItem = document.createElement("td");
                tableItem.innerText = key[head]; 
                tableRow.appendChild(tableItem);
            }        
            tableBody.appendChild(tableRow);
        }
}
