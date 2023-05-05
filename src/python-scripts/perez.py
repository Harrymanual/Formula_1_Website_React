import requests
from bs4 import BeautifulSoup

# Send a request to the webpage
page = requests.get('https://www.formula1.com/en/drivers/sergio-perez.html')

# Parse the HTML content of the page
soup = BeautifulSoup(page.content, 'html.parser')

driver_name = soup.find('h1', class_='driver-name').text.strip()

# Find and extract the driver information table
driver_table = soup.find('table', class_='stat-list')

driver_rows = driver_table.find_all('tr')

print("Name: " + driver_name)

for row in driver_rows:
    key = row.find('th').text.strip()
    value = row.find('td').text.strip()
    print(key + ": " + value)