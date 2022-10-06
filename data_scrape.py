# Author: Mackenzie Ross
# Date Last Modified: 05-Oct-2022
# Purpose: Scrape information from Goodreads about the top 1,250
#          romance books on the platform and save it as a csv file

# import the necessary libraries
from turtle import title
import requests
from bs4 import BeautifulSoup as bs

# base URL
URL = 'https://www.goodreads.com/shelf/show/romance?page='

# loop through each page of the Romance list
for page in range(1, 25):
    req = requests.get(URL + str(page))
    soup = bs(req.text, 'html.parser')
    titles = soup.find_all('a', attrs={'title', 'class', 'href'})
    
    for i in range(len(titles)):
        print(titles[i].text)
