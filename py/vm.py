from flask import Flask, request

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])

def go():
    if request.method == 'POST':
        data = request.form
        drink = data['drink']
        pay = data['money']
        print(data)
        return f'<h1>THANK YOU FOR BUYING {drink} AND PAYING ${pay}</h1>'

app.run(port=5000,
        use_debugger = False,
        use_reload=False,
        pass_through_error=False)