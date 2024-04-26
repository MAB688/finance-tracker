from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.service import Service
import time

# Setup WebDriver with the corrected approach for specifying the GeckoDriver path
s = Service('./geckodriver.exe')  # Ensure this path points correctly to your GeckoDriver executable
driver = webdriver.Firefox(service=s)

try:
    # Navigate to the web page
    file_path = r"C:\Users\Mark\Documents\CS\1530\finance-tracker\index.html"  # Update to your actual file path
    driver.get(f"file:///{file_path}")
    driver.maximize_window()

    # Wait for the Income tab and click it
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "defaultOpen"))).click()
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Income')]"))).click()

    # Input description in the income description field
    income_description = driver.find_element(By.ID, "incomeDescription")
    income_description.send_keys("Salary")

    # Input amount in the income amount field
    income_amount = driver.find_element(By.ID, "incomeAmount")
    income_amount.send_keys("5000")

    # Submit the form
    driver.find_element(By.ID, "incomeForm").submit()

    # Pause to allow page to update (use WebDriverWait in production for better stability)
    time.sleep(2)

    # Verify the transaction was added correctly
    added_description = driver.find_element(By.XPATH, "//table[@id='incomeTable']//td[contains(text(),'Salary')]")
    added_amount = driver.find_element(By.XPATH, "//table[@id='incomeTable']//td[contains(text(),'$5000.00')]")

    assert added_description.text == "Salary", "The description did not match."
    assert added_amount.text == "$5000.00", "The amount did not match."

    print("Income tracker test passed: Income was correctly added and displayed.")

finally:
    # Clean up, close the browser
    driver.quit()
