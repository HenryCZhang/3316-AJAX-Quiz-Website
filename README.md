# 3316-AJAX-Quiz-Website

Basic Reuqirement
1- The tool should be created as an Express App.
2- The given ‘questions.json’ file simulate the database of the questions maintained by the server.
3- The main quiz page should be a static HTML file
a. Use AJAX to receive the questions from the server (without the answers) in JSON formate.
b. When the questions are received they are formatted to display the stems in lables and the options in radio buttons
(Hint: https://www.w3schools.com/tags/att_input_type_radio.asp )
c. Whenever the user changes their choice (by clicking on one of the radio buttons) their answer is sent to the server to check and a feedback is provided to the user to inform them whether the answer is correct or not.
d. When the user clicks ‘submit’ all the answers are checked at the server and a grade is displayed to the user (1 point per question).

The Deployment
1- Connect to the GCP VM instance through SSH.
2- Install Node.js 14.x by running these commands (if you’ve already installed node.js for lab3 you
can skip this step)
source: https://github.com/nodesource/distributions/blob/master/README.md
3- Clone the repo of your application
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
 sudo apt-get install -y nodejs
  
4- Step inside the directory of your application (that has the package.json file) and run this command to install the dependencies
sudo npm install
5- Stop Nginx to free port 80 sudo systemctl stop nginx
6- Start your server by running the command
sudo node <nameOfYourFile>.js
7- Open a new terminal to test your server from the command line by issuing the command
curl localhost:80
8- Now test it using the external IP of the instance by sending a request through a browser.
