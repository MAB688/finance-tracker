// script.js
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    addTransaction('expensesTable', description, amount);
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseAmount').value = '';
    updateNetSpending(-amount);
});

document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('incomeDescription').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    addTransaction('incomeTable', description, amount);
    document.getElementById('incomeDescription').value = '';
    document.getElementById('incomeAmount').value = '';
    updateNetSpending(amount);
});

function addTransaction(tableId, description, amount) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = description;
    cell2.textContent = `$${amount.toFixed(2)}`;
}

let netSpending = 0;

function updateNetSpending(amount) {
    netSpending += amount;
    document.getElementById('netSpending').textContent = `Net Spending: $${netSpending.toFixed(2)}`;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab to open (optional, e.g., Expenses)
document.getElementById("defaultOpen").click();
