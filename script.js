function insert_Row() {
    // Get a reference to the table
    var table = document.getElementById("sampleTable");

    // Create a new row and two new cells
    var newRow = table.insertRow(0); // Inserts a new row at the top of the table
    var cell1 = newRow.insertCell(0); // Inserts a new cell in the new row (left cell)
    var cell2 = newRow.insertCell(1); // Inserts another new cell in the new row (right cell)

    // Set the text content of the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
