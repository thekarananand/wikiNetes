import pymongo
from bson.objectid import ObjectId

# Connect to Mongo Container
mongo_container = pymongo.MongoClient( 'mongo' , 27017 )

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