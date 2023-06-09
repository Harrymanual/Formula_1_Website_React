import requests
from bs4 import BeautifulSoup
import os

os.chdir(os.path.dirname(os.path.abspath(__file__))) #This line changes the current working directory to the directory containing the current script. 
#Specifically, os.path.abspath(__file__) returns the absolute path of the current script, os.path.dirname() returns the directory containing the script, and os.chdir() changes the current working directory to that directory.

os.chdir("..")# This line changes the current working directory to the parent directory of the current working directory. Specifically, ".." 
#is a relative path that refers to the parent directory, and os.chdir() changes the current working directory to that directory.

# Delete the driver_info.txt file if it exists
if os.path.exists("../public/driver_info.txt"):
    os.remove("../public/driver_info.txt")

def driver_info(link):

    page = requests.get(link)
    #parse content
    soup = BeautifulSoup(page.content, 'html.parser')

    driver_name = soup.find('h1', class_='driver-name').text.strip()

    # Find and extract the driver information table
    driver_table = soup.find('table', class_='stat-list')
    driver_rows = driver_table.find_all('tr')

    with open('../public/driver_info.txt', 'a') as f:
        f.write("Name: " + driver_name + "\n")
        for row in driver_rows:
            key = row.find('th').text.strip()
            value = row.find('td').text.strip()
            f.write(key + ": " + value + "\n")

#Verstappen
driver_info('https://www.formula1.com/en/drivers/max-verstappen.html')
#Perez
driver_info('https://www.formula1.com/en/drivers/sergio-perez.html')
#Hamilton
driver_info('https://www.formula1.com/en/drivers/lewis-hamilton.html')
#Russell
driver_info('https://www.formula1.com/en/drivers/george-russell.html')
#legreg
driver_info('https://www.formula1.com/en/drivers/charles-leclerc.html')
#Sainz
driver_info('https://www.formula1.com/en/drivers/carlos-sainz.html')
#Tsunoda
driver_info('https://www.formula1.com/en/drivers/yuki-tsunoda.html')
#Alonso
driver_info('https://www.formula1.com/en/drivers/fernando-alonso.html')
#Strulovich
driver_info('https://www.formula1.com/en/drivers/lance-stroll.html')
#Ocon
driver_info('https://www.formula1.com/en/drivers/esteban-ocon.html')
#Gasly
driver_info('https://www.formula1.com/en/drivers/pierre-gasly.html')
#Albon
driver_info('https://www.formula1.com/en/drivers/alexander-albon.html')
#Bottas
driver_info('https://www.formula1.com/en/drivers/valtteri-bottas.html')
#Guanyu
driver_info('https://www.formula1.com/en/drivers/guanyu-zhou.html')
#Magnussen
driver_info('https://www.formula1.com/en/drivers/kevin-magnussen.html')
#Norris
driver_info('https://www.formula1.com/en/drivers/lando-norris.html')
