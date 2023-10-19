from flask import Flask, request, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Hey there!"

@app.route("/gen/pasw", methods=['POST'])
def genPassword():
    try:
        data = request.json  

        num = int(data["num"])
        lett = int(data["lett"])
        symb = int(data["symb"])


        x = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        y = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ]
        z = ["!", "@", "$", "%", "&"]
        pasw = []
        for n in range(0, num):
            pasw += random.choice(x)
        for l in range(0, lett):
            pasw += random.choice(y)
        for s in range(0, symb):
            pasw += random.choice(z)
        random.shuffle(pasw)
        password = "".join(pasw)
        print(password)
        return jsonify({"password": password})

    except Exception as e:
        return jsonify({"error": e})


if __name__ == "__main__":
    app.run(port=8080)
