# Author: Mackenzie Ross
# Date: 07 December 2022
# Description: Convert python list into the correct format to be used for an html select drop-down

# Import necessary libraries
import pandas as pd
import nltk
import re
import numpy as np

# import book data
books = "books.csv"
book_df = pd.read_csv(books)

# function to normalize the titles of the books
def normalize_titles(doc):
    doc = re.sub('[\(\[].*?[\)\]]', '', doc)
    doc.strip()
    return doc

# remove parentheticals and create list of book titles
for i in range(len(book_df)):
    title = book_df.loc[i, 'title']
    norm_title = normalize_titles(title)
    book_df.loc[i, 'title'] = norm_title
book_list = book_df['title'].values

# alphabetize list of books
books_sorted = sorted(book_list)
print(books_sorted)

# function to create select options
def html_select_options(list_items):
    HTML_string = ""
    for item in list_items:
        HTML_string += "<li>{}</li>\n".format(item)
    return HTML_string

# call html_select_options on book_list
# print(html_select_options(books_sorted))