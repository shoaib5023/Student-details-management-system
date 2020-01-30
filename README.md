# StudentList

# A sample App to add the firstname,lastnameand skills of students and can sort the list by their firstnames,lastnames,skills.



### Prerequisites

You need to install the following packages for backend:

```

Django==3.0.1
djangorestframework==3.11.0


```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Quiz_App/.git
```

Setting up your virtual environment:

```
python3 -m venv .evnv
```

Activating Virtual  Environment

```
source .env/bin/activate

```

### Database setup

If all requirements are installed, then  database must be set up.

```
sudo apt install sqlite


sqlite

```
To create a database for our Django project
```
CREATE DATABASE studentdb;

```
Create a database user which we will use to connect to and interact with the database. Set the password.
```
CREATE USER admin WITH PASSWORD 'admin';

```
Now, all we need to do is give our database user access rights to the database we created
```
GRANT ALL PRIVILEGES ON DATABASE studentdb TO admin;

```
Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```

## Overall detail
```
Database Name: quizdb
Username: admin
Password: admin

```

Then to run the server, go to the directory '/Quiz_App/quizapp' and type the following code in terminal:

```
python3 manage.py runserver
```

Then you can click on the sever link http://127.0.0.1:8000/

you can navigate through the urls from the app.

