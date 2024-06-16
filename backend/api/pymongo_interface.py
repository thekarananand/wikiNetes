import pymongo
from bson.objectid import ObjectId

# Connect to Mongo Container
mongo_container = pymongo.MongoClient( 'mongo' , 27017 )

# Access DB
db_wikinetes = mongo_container["wikinetes"]

# Access Collection
collection_articles = db_wikinetes["articles"]
collection_status   = db_wikinetes["status"]

def pymongo_pingDatabase():
    
    query = { }

    projection = {
        '_id': False,
        'Ping': True
    }

    status = collection_status.find_one( query, projection )
    
    return(status)