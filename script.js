// script.js

// load transactions from local storage and calculate initial net spending
document.addEventListener('DOMContentLoaded', function() {
    loadTransactions('expensesTable');
    loadTransactions('incomeTable');
    calculateInitialNetSpending();
    document.getElementById("defaultOpen").click();
});

// display transaction in table and add to local storage if not already saved
function addTransaction(tableId, description, amount, saveToStorage) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = description;
    cell2.textContent = `$${amount.toFixed(2)}`;

    if (saveToStorage) {
        saveTransaction(tableId, description, amount);
    }
}

// save transaction to local storage
function saveTransaction(tableId, description, amount) {
    const key = tableId === 'expensesTable' ? 'expenses' : 'incomes';
    const transactions = JSON.parse(localStorage.getItem(key)) || [];
    transactions.push({ description, amount });
    localStorage.setItem(key, JSON.stringify(transactions));
}

// load transactions from local storage and display in table
function loadTransactions(tableId) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // clear existing table content before loading
    const key = tableId === 'expensesTable' ? 'expenses' : 'incomes';
    const transactions = JSON.parse(localStorage.getItem(key)) || [];
    transactions.forEach(transaction => {
        addTransaction(tableId, transaction.description, transaction.amount, false);
    });
}

// calculate initial net spending
function calculateInitialNetSpending() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
    let net = 0;
    incomes.forEach(item => net += item.amount);
    expenses.forEach(item => net -= item.amount);
    netSpending = net;
    document.getElementById('netSpending').textContent = `Net Spending: $${netSpending.toFixed(2)}`;
}

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    addTransaction('expensesTable', description, amount, true);
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseAmount').value = '';
    updateNetSpending(-amount);
});

document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('incomeDescription').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    addTransaction('incomeTable', description, amount, true);
    document.getElementById('incomeDescription').value = '';
    document.getElementById('incomeAmount').value = '';
    updateNetSpending(amount);
});

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
