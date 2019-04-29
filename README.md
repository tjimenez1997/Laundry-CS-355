# Full Stack (Frontend/Backend) Base Code

Front End: Handlebars+Bootstrap (Located in Views)

Back End: Express/Sequelize/Postgresql

## Prerequisites 

### Operating System: Windows
```
1. Install Linux Subsystem for Windows 10: https://www.maketecheasier.com/install-linux-subsystem-for-windows10/

Within the Ubuntu Terminal: 

2. sudo apt-get update

3. sudo apt-get install git
```

### Operating System: Mac
```
Within terminal:

1. brew update

2. brew install curl

3. brew install git
```

### Operating System: Linux
```
1. sudo apt-get update

2. sudo apt-get install git
```


### All Operating Systems
```
(Replace 'First Last' with your name and 'my@email.com' with your email)

1. git config --global user.name "First Last"

2. git config --global user.email "my@email.com"
```
You should be ready to start install our project now.

## Initial Project Setup

```
Download the current version of the project:

1. git clone https://github.com/tjimenez1997/Laundry-CS-355.git
```

### Step 1: Install NVM (Node Version Manager)

Operating System: Mac
```
1. touch ~/.bash_profile

2. curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
Operating System: Windows/Linux
```
1. curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

### Step 2: Install Node.js 10.15.3
All Operating Systems
```
1. nvm install 10.15.3
```

### Step 3: Install Postgresql

Operating System: Mac
```
1. brew update

2. brew install postgresql

3. brew tap homebrew/services

4. brew services start postgresql
```
Operating System: Linux

```
1. apt-get install postgresql postgresql-contrib 

2. sudo service postgresql stop

3. sudo service postgresql start
```

Operating System: Windows
```
1. apt-get install postgresql postgresql-contrib 
```

Note: Linux Subsytem for Windows has a glitch where you need to change a setting to allow postgresql to work.
```
Fix (After you run the above command to install Postgres):

1. cd etc/postgresql/10/main

2. sudo pico postgresql.conf

3. Turn #fsync = on to 'fsync = off'

4. ctrl+o to save and press enter. Then ctrl x to leave.

5. sudo service postgresql stop

6. sudo service postgresql start
```


### Step 4: Configure Database Users

Operating System: Linux/Windows
```
1. sudo su - postgres
2. createuser -P -s -e UBUNTU_USERNAME (Replace UBUNTU_USERNAME with username you choose when you installed ubuntu or Linux Subsystem for Windows 10)
```

Operating System: All
```
1. createuser -P -s -e laundry_admin

2. Use password: production

3. exit
```

### Step 5: Configure Database 

Operating System: All
```
1. createdb -h localhost -U laundry_admin laundry_development

2. Use password: production
```

### Step 6: Install Code/Text Editor (Sublime Text)
Note: Sublime Text is a good editor because it can highlight all of the syntax we will use (Javascript/JSX for React). However, you can use any editor you choose. 

Operating System: Mac/Linux
```
Download and Install from: https://www.sublimetext.com/3
```

Operating System: Windows
```
1. wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add

2. sudo apt-get install apt-transport-https

3. echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

4. sudo apt-get update

5. sudo apt-get install sublime-text
```

### Step 7: Additional Steps on Windows
Because Linux Subsystem for Windows 10 is a terminal application, you should install a program to display Linux GUI to make it easier to edit text files/code.

```
GUI on Windows Subsystem:

1. https://sourceforge.net/projects/xming/files/latest/download (Install and run the following)

2. export DISPLAY=:0

3. DISPLAY=:0 /opt/sublime_text/sublime_text

You should be able to edit any text/code file using sublime text

Instructions also located on guide: https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/
```

**Congrats, if you made it up to here you can finally run the frontend and backend.**

## Running the Project

```
Use this code the first time you run the project:

1. cd Laundry-CS-355

2. npm install

3. npm start

After you run the project the first time, you can start the project using (once you are in the directory):

1. npm start
```

**You should have both the frontend and backend running.**

Once you have express running go to:

http://127.0.0.1:8000/ 

From here depending on if you are in charge of the Frontend or Backend learn more about each respective technology...

Frontend (Bootstrap): https://getbootstrap.com/docs/4.3/getting-started/introduction/
Frontend (Handlebars): https://handlebarsjs.com/

High level overview:
1. Each page is formed like a regular html page. However the ending of the file is .handlebars instead of .html. They are stored in the 'views' folder.
2. Bootstrap is a library that lets you create nice looking responsive websites. It is added in by adding special scripts to a regular html/handblebars page. See the bootstrap link to see how to use bootstrap classes. It is powerful because it saves you from doing a lot of css.
3. Handlebars is a templating engine that dynamically serves stuff to html pages without having to manually manipulate the DOM. It can also help simplify your front end code by making it more modular. 

Backend (Sequelize.js using Postgresql): http://docs.sequelizejs.com/










