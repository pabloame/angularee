# AngularEE

Basic repository where you can find an Angular application
served by a JavaEE web application.


## Purpose

The purpose of this repository is just to show a possible solution on how to serve an
Angular application from a JavaEE web application in an automated way.

## Prerequisites

* Maven
* NPM

## Run Angular
You can just run Angular app as usual using:

```
cd frontend
ng serve
```

It will be deployed on port 4200.


## Run Java EE application
You can just run JavaEE app as usual using Maven:

```
cd backend
mvn clean package
```

In targe you will get a war file.

## Run JavaEE + Angular

In order to ship your Angular application inside your war file you just need to:

```
mvn clean package -Pangular+javaee
```

## Deploy

You can use a compliance Java EE 8 web server to deploy or build a docker image 
as follow:

```
docker build . --tag angularee:1.0.0
docker run --rm -p 8080:8080 angularee:1.0.0
``` 

It will be accessible from http://localhost:8080/angularee/
