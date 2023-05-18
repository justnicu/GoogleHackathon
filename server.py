from flask import Flask, jsonify, render_template, request, send_file

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return send_file('index.html')

@app.route("/write-file", methods=["POST"])
def write_to_file():
    data = request.json["data"]

    # Write the data to a text file
    with open("date.txt", "w") as file:
        file.write(data)

    return jsonify({"message": "Data written to file."})

if __name__ == '__main__':
    app.run()
