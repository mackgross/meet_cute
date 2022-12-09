'''
Author: Mackenzie Ross
Date: 09 December 2022
Description: Run the book recommendation function when the "Find Your Matches"
             button on the Get Recommendations page is clicked
'''

# import necessary libraries
from flask import Flask, render_template
import book_recommender

# define the app variable
app = Flask("__name__")

@app.route("/")
def home():
    return render_template('index.html')
@app.route("/Recommendation")
# function to get book recs
def get_recs(choice):
    results = book_recommender.book_recommender(book_title=str(choice))
    htmlString = ""
    for result in results:
        htmlString += "<p>{}</p>\n".format(result)
    return htmlString