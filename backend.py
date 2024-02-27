from flask import Flask, request, render_template, redirect, url_for, flash

app = Flask(__name__)
  
@app.route('/', methods = ['GET', 'POST'])  
def login():      
   error = None
     
   if request.method == 'POST': 
      if request.form['username'] != 'admin' or  request.form['password'] != 'admin': 
         error = 'Invalid username or password. Please try again !'
      else: 
  
         # flashes on successful login 
         flash('You were successfully logged in')  
         return redirect(url_for('index')) 
   return render_template('login.html', error = error) 
  
if __name__=='__main__': 
   app.run() 