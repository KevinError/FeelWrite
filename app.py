from flask import Flask
from flask_cors import CORS
from mongoengine import connect
from routes.entries import entry_bp
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

connect(host=os.getenv("MONGODB_URI"))

app.register_blueprint(entry_bp)

if __name__ == '__main__':
    app.run(debug=True)
