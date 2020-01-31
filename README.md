# Student Data Management  Application 

## A sample Application to add the firstname,lastname and skills of students and can sort the list by their firstnames,lastnames and skills.



### Prerequisites

You need to install the following packages for backend:

```

Django==3.0.1
djangorestframework==3.11.0


```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Student-details-management-system/.git
```

Setting up your virtual environment:

```
python3 -m venv st_en
```

Activating Virtual  Environment

```
source st_en/bin/activate

```
Create super user

```
Create a user database which we will use to connect interact with the database. 
```
CREATE USER admin WITH PASSWORD 'admin';



```
Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```



Then to run the server, go to the directory '/Student-details-management-system/backend/dstudent/' and type the following code in terminal:

```
python3 manage.py runserver
```
Then you can click on the sever link http://127.0.0.1:8000/

For Frontend which is ReactJS,
Dependencies are: 
```


Go to '/Student-details-management-system/frontend/student/' and type the following code in the terminal:
```

"npm install", 
"npm install react-axios",

```
Then to run the react server, type the code:
```
npm start
```



![React User Interface will look like this](studentlist.png)

