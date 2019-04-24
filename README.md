Full Stack (Frontend/Backend) Base Code

Front End: React (Located in Client)
Back End: Express/Sequelize/Postgresql (Located in server)

Initial Setup:

Operating System: Windows
Install Linux Subsystem for Windows 10: https://www.maketecheasier.com/install-linux-subsystem-for-windows10/
sudo apt-get update
sudo apt-get install git


Operating System: Mac
Run the following commands in this order:
brew update
brew install curl
brew install git

Operating System: Linux
sudo apt-get update
sudo apt-get install git

Then configure git... (Replace 'First Last' with your name and 'my@email.com' with your email)
git config --global user.name "First Last"
git config --global user.email "my@email.com"

Now clone the current version of the project from Github...

git clone https://github.com/tjimenez1997/Laundry-CS-355.git


1. Install NVM (Node Version Manager):
Operating System: Mac
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

Operating System: Windows/Linux
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

2. Install Node.js 10.15.3
nvm install 10.15.3

3. Install Postgresql

Mac: 
brew update
brew install postgresql
brew tap homebrew/services
brew services start postgresql

Linux:
apt-get install postgresql postgresql-contrib 
sudo service postgresql stop
sudo service postgresql start


It should say "Service has started [OK]"


Windows:
apt-get install postgresql postgresql-contrib 

Note: Linux Subsytem for Windows has a glitch where you need to change a setting to allow postgresql to work.
Fix (After you run the above command to install Postgres):
cd etc/postgresql/10/main
sudo pico postgresql.conf
Turn #fsync = on to 'fsync = off'
ctrl+o to save and press enter. Then ctrl x to leave.
sudo service postgresql stop
sudo service postgresql start

It should say "Service has started [OK]"


4. Configure Database Users

Mac/Linux/Windows:
createuser -P -s -e UBUNTU_USERNAME (Replace UBUNTU_USERNAME with username you choose when you installed ubuntu or Linux Subsystem for Windows 10)
exit
createuser -P -s -e laundry_admin
Use password: production

5. Configure Database 
Mac/Linux/Windows:
createdb -h localhost -U laundry_admin laundry_development
Use password: production

6. Install Code/Text Editor (Sublime Text)
Sublime Text is a good editor because it can highlight all of the syntax we will use (Javascript/JSX for React)
Mac/Linux:
Download and Install from: https://www.sublimetext.com/3

Windows: 
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add
sudo apt-get install apt-transport-https
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt-get update
sudo apt-get install sublime-text

7. Additional Steps on Windows
Because Linux Subsystem for Windows 10 is a terminal application, you should install a program to display Linux GUI to make it easier to edit text files/code.
GUI on Windows Subsystem:
1. https://sourceforge.net/projects/xming/files/latest/download (Install and run the following)
2. On linux subsystem: export DISPLAY=:0
3. subl ./ (can edit files)
Instructions also located on guide: https://www.maketecheasier.com/install-linux-subsystem-for-windows10/


Congrats, if you made it up to here you can finally run the frontend and backend.

Running the Project:

Open 2 Terminal Windows:

Terminal Window 1:

Use this code the first time you run the project:
cd client
npm install
npm start

After you run the project the first time, you can start the client using:
npm start


Terminal Window 2:

Use this code the first time you run the project:
cd server
npm install
npm start

After you run the project the first time, you can start the server using:
npm server

You should have both the frontend and backend running.

Once you have react and express running on two different terminals go to:

http://127.0.0.1:3000/ (React Front End)
http://127.0.0.1:8000/ (Express Backend Sample Get Query)

From here depending on if you are in charge of the Frontend or Backend learn more about each respective technology...

Frontend (React): https://reactjs.org/tutorial/tutorial.html
Backend (Sequelize.js using Postgresql): http://docs.sequelizejs.com/










