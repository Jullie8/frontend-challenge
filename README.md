# New Assistance Request Form

A single page application created with React and a fake-api executed from docker. The Assistance Request App was built as part of a code challenge.

## Features

* Parts of this application can be used elsewhere as part of larger application.

* App contains Field validations. When something isn't right warning div appears

* The user can not submit multiple instances of the same request. Once request is successfully submitted and sent the Get Assistance button is disabled.

* User is required to input contact info such as first name, last name and email

* User is required to select service types from a dropdown menu

* User has the option to input a description

* User is required to check off terms before submitting form

## Built With

* React.JS - client

* Twitter Bootstrap 3 -  for styling

* Docker - serving Fake API

* Fetch API - for accessing and manipulating requests and responses

## Installation

The instructions below will get you a copy of the project running on your local machine.

### Project Prerequisites

* Install Docker
* Install node

### Clone Repository

Open terminal

``` javaScript
Run git clone <repository url>
```

Navigate into the directory where cloned project was saved and open project folder.
For example, see example below:

``` javaScript
cd Desktop
cd UniteUs
ls (typing ls shows all the folders this project contains)
```

Fake API with instructions was provided ensure to set up to see app's full functionalities.

### Client Installation

In the same terminal window navigate into frontend directory

``` javaScript
Run npm install or yarn install
Run npm start or yarn start
```

## Future Implementations

* Include tests

## Acknowledgements

* Thank you Unite Us for this opportunity and for an inspiring mission.
