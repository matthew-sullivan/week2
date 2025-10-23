//Call this function when the page loads.
fetchData();

//get the table body from the html and store in a variable.
const tableBody = document.querySelector("#tableBody");

// async function to fetch data from local JSON file.
async function fetchData() {
  //takes the awaited fetched response from the local JSON file
  //and stores it in a variable
  const response = await fetch("./singers.json");

  //takes teh response and puts it in a more usable format for us.
  const data = await response.json();

  //loops through the data. One iteration for each object.
  for (let key of data) {
    //creates the row element for the table.
    const tableRow = document.createElement("tr");
    //an array of each object key
    const headers = ["singer", "dob", "bestsongs"];
    //iterate through each key in the headers array
    for (let head of headers) {
      //create the data that will go in the row
      const tableItem = document.createElement("td");
      //3 pieces of data, pullin information using the headers.
      tableItem.innerText = key[head];
      //makes the data a child of the row.
      tableRow.appendChild(tableItem);
    }
    //makes the row a child of the table body.
    tableBody.appendChild(tableRow);
  }
}
