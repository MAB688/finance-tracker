# Personal Finance Tracker

The Personal Finance Tracker is a web application designed to help users manage their financial transactions, including incomes and expenses. It allows users to add, view, and track their financial data through a simple and intuitive user interface.

## Features

- **Income Tracking:** Add and view income transactions.
- **Expense Tracking:** Add and view expenses.
- **Real-time Net Spending Calculation:** Automatically calculates and displays the net balance of your spending and earnings.
- **Persistent Data Storage:** Transactions are saved in the local storage of your browser, ensuring that your data is retained even after the browser is closed.

## Prerequisites

Before you can run the application or the tests, make sure you have the following installed:
- A modern web browser that supports HTML5, CSS3, and JavaScript ES6.
- Python, if not already installed (visit [python.org](https://python.org) to download and install it).
- Selenium WebDriver for Python (install by running `pip install selenium`).
- GeckoDriver for Firefox (download from [Mozilla's GitHub repository](https://github.com/mozilla/geckodriver/releases) and ensure it's in your system's PATH or in the project directory).

## Installation

To get started with the Personal Finance Tracker:

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your web browser to use the application without a server, or serve it via a local server if your setup requires it.

## Usage

- **Navigating the Tabs:** Click on the `Expenses` or `Income` tabs to switch between viewing your expense and income entries.
- **Adding Transactions:** Enter the description and amount in the respective fields under either the `Expenses` or `Income` tab and click the `Add` button to record the transaction.
- **Viewing Transactions:** Transactions are immediately listed below the input fields in either the `Expenses` or `Income` tab.

## Running Selenium Tests

To run the Selenium tests for the Income Tracker functionality:

1. Ensure GeckoDriver is correctly set up as mentioned in the Prerequisites.
2. Navigate to the project directory in your command line or terminal.
3. Run the test script using Python: `python test_income_tracker.py`. 
    - This script will launch Firefox, perform a series of actions to test the Income Tracking feature, and print the results.

Note: The test script assumes the HTML file is being served from a local server or directly accessible by file path as set in the script. Adjust the `file_path` in the script if necessary.

## Contributing

To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a new Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
