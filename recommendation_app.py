'''
Author: Mackenzie Ross
Date: 09 December 2022
Description: Run the book recommendation function when the "Find Your Matches"
             button on the Get Recommendations page is clicked
'''

# import necessary libraries
import book_recommender
from flask import Flask, render_template, flash, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/recommendations", methods=["POST", "GET"])
def recommend_book():
    recommendations = request.args.get('book-choice')
    books = book_recommender.book_recs(recommendations)
    return render_template('results.html', book=books)