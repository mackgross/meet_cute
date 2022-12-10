'''
Author: Mackenzie Ross
Date: 09 December 2022
Description: Run the book recommendation function when the "Find Your Matches"
             button on the Get Recommendations page is clicked
'''

# import necessary libraries
import book_recommender
import sys
import json

userSelection = sys.argv[1]

def get_recs(choice):
    results = book_recommender.book_recommender(book_title=str(choice))
    return results

recResult = get_recs(userSelection)
print(json.dumps(recResult))

sys.stdout.flush()