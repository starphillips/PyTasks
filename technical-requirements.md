# Technical Requirements:

Front-end: HTML, CSS, and React.js

Back-end: Django with a RESTful API.

Database: SQLite - serverless database and imbedded in Django

Deployment: Heroku.
Git based and can connect my GitHub which can help with updating and version control. I have also used PythonAnywhere before and would like to try another one for deployment.

## User Authentication: 
To consider: Users must be able to register and log in using an email and password and implement basic session management to track logged-in users.
Solution: to use Django’s user authentication that already provides user login, logout, and session management functions.

To consider: the use of Django’s user authentication with React.
Will require a solution for the front and back-end to communicate with each other.
Solution: to use Django’s REST framework: to build the REST APIs
And JWT (token-based authentication): which allows React to communicate with the backend through these APIs. Specifically, JWT to be used as it allows for mobile and web ease, in which this cross-platform is required in the brief.

-	Packages: 
Django REST Framework Simple JWT: to use JWT with the built in Django authentication

## Forms: 
To consider: client-side (React) or server-side (Django) or both?
Solution: both
Client-side (react) validation: for a better user experience as, small errors can be caught before data is sent. Helps with responsiveness as it is checked before it is sent to the backend.

-	Libraries to consider: 
Formik: to keep the form fields of the information being put in organised and if errors are returned from the backend, formik can display these.
Yup: ensures the user input follows the rules e.g. password has to have numbers and will tell if the form is wrong so user can adjust before being sent to the backend. 

Server-side (Django) validation: improves the security by validating the data again when passed to the backend and standardises the validation rules which benefits when creating a mobile friendly application as validation errors may vary when using different devices or browsers. 

## Database:
Django’s ORM to handle database interactions on server side. 

(Brief Interaction Explanation: React communicates with Django through API requests so that when a user inputs information i.e. login details. Django will query the database before sending a JWT to React. This will include whether the information of the user is correct and can be used to retrieve the user’s tasks.)

## Password Hashing: 
Django’s built-in password hasher.

To use: from django.contrib.auth.hashers import make_password
This means when a user is creating a password, before it is saved on the database, it is hashed.

To use: from django.contrib.auth import authenticate
When logging in again, the authentication function will be used to check if this password matches a stored hashed password.
Version Control: GitHub which can be used with Heroku when deploying PyTasks

## Packages to Consider

- Django REST Framework Simple JWT: to use JWT with the built in Django authentication 
- Axios: to send requests to Django’s API to create, read, update, or delete data, Axios can simplify these calls. 
- CORS: what gives permission to JavaScript in the browser to make certain requests.  
        Also to allow React to be able to get the response from Django Backend   






