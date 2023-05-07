import requests
from bs4 import BeautifulSoup
import os

# Delete the driver_info.txt file if it exists
if os.path.exists("./src/python-scripts/team_info.txt"):
    os.remove("./src/python-scripts/team_info.txt")

def team_info(link):

    page = requests.get(link)
    #parse content
    soup = BeautifulSoup(page.content, 'html.parser')

    # Find and extract the driver information table
    driver_table = soup.find('table', class_='stat-list')
    driver_rows = driver_table.find_all('tr')

    with open('./src/python-scripts/team_info.txt', 'a') as f:
        for row in driver_rows:
            key = row.find('th').text.strip()
            value = row.find('td').text.strip()
            f.write(key + ": " + value + "\n")


#Red bull
team_info('https://www.formula1.com/en/teams/Red-Bull-Racing.html')
#Alfa Romeo
team_info('https://www.formula1.com/en/teams/Alfa-Romeo.html')
#Aston Martin
team_info('https://www.formula1.com/en/teams/Aston-Martin.html')
#McLaren
team_info('https://www.formula1.com/en/teams/McLaren.html')
#Williams
team_info('https://www.formula1.com/en/teams/Williams.html')
#Alpha Tauri
team_info('https://www.formula1.com/en/teams/AlphaTauri.html')
#Ferrari
team_info('https://www.formula1.com/en/teams/Ferrari.html')
#Mercedes
team_info('https://www.formula1.com/en/teams/Mercedes.html')
#Alpine
team_info('https://www.formula1.com/en/teams/Alpine.html')
#Haas-F1-Team
team_info('https://www.formula1.com/en/teams/Haas-F1-Team.html')