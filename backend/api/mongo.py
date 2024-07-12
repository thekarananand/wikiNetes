import pymongo
from bson.objectid import ObjectId
import os

from .md2html import md2html

# Connect to Mongo Container
mongo_container = pymongo.MongoClient( os.environ['WIKINETES_DB'] , 27017 )

# Access DB
db_wikinetes = mongo_container["wikinetes"]

# Access Collection
collection_articles = db_wikinetes["articles"]
collection_status   = db_wikinetes["status"]

def pingDatabase():

    query = { }

    projection = {
        '_id': False,
        'Ping': True
    }

    status = collection_status.find_one( query, projection )

    return(status)

def articlesList():

    query = { }

    projection = {
        '_id': True,
        'title': True,
        'author': True
    }

    article_list = []

    for article in collection_articles.find( query, projection ):

        list_entry = {}

        list_entry['id']     = str(article['_id'])
        list_entry['title']  = article['title']
        list_entry['author'] = article['author']

        article_list.append(list_entry)

    return( article_list )

def articleMD(id):
    query = { '_id': ObjectId(id) }

    projection = {
        '_id': False,
        'title': True,
        'author': True,
        'md_content': True,
        'table_of_content': True
    }

    article = collection_articles.find_one( query, projection )
    # article.pop("table_of_content")

    return(article)

def articleHTML(id):

    article = articleMD(id)

    article["html_content"] = md2html( article["md_content"] )
    article.pop("md_content")

    return(article)

def update(id, newData):

    query = { '_id': ObjectId(id) }

    projection = {
        '_id': False,
        'title': True,
        'author': True,
        'md_content': True,
    }

    old = collection_articles.find_one( query, projection )

    new = { "$set": newData }

    collection_articles.update_one(old, new)

def new(newData):

    newData['table_of_content'] = []

    id = str(collection_articles.insert_one(newData).inserted_id)

    return( id )
