<h1 align="center">Lab Report Digitization</h1>
<p align="center">

This repository contains the frontend part of the web application implemented using ReactJS<br/>
Backend using Flask: https://github.com/shakib1729/lab-report-digitization-backend<br/>
Deployed on Heroku: https://lab-report.herokuapp.com/

Video Demo: https://youtu.be/KeDUEq5m3ns

## About the project.
The goal of this project is to process the images of pathological lab reports to get the values of different medical components, store the data and plot the trend of different medical components on the basis of different lab reports provided.

## Main Libraries/Frameworks used:
1) PyTesseract - A wrapper for Google's Tesseract-OCR Engine. It is an OCR tool to recoginize and read the text present in images.
2) Matplotlib - To generate the trend chart of medical components.
3) NumPy - For array manipulation.
4) OpenCV - To load the images in grayscale mode.
5) Flask - To deploy the application.
6) Flask_sqlalchemy - Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy in the application. SQLAlchemy is a library that facilitates the communication between Python programs and databases. 

#### &nbsp; React - To build the front-end part of the web application
<br/>

### Database:
SQLite - SQLite is a software library that provides a relational database management system. It provides a lightweight disk-based database that doesn’t require a separate server process.

### To set up locally:
1) Clone
2) npm install
3) npm start

## Implementation:
1) Load the image in Grayscale mode using OpenCV.
2) Get the text (a string) present in image using pyTesseract.
3) Remove the special characters from the string and split the string by space and store all the words in a list.
4) Traverse the list and if there is a word or a group of words which is a medical component, store that medical component alongwith its numerical value in a dictionary.
5) Store the contents of this dictioanry in the database.
6) To plot the trend, get all the values of a medical component from the database and plot them using Matplotlib.
7) Build the backend part of the web application using Flask.
8) Build the frontend part of the web application using ReactJS which calls the backend created using Flask.
9) Deploy the web application on Heroku.

## Result.
If the original lab report contained following Information (Note that it is only the cropped part of the image used to compare the results, the entire original image should be be uploaded as the resolution of this image is very low):
<p align="center">
<img src="https://user-images.githubusercontent.com/39847281/86389704-5dad6000-bcb4-11ea-96bf-fa4acba92512.JPG"></p>

1) When loaded the image in default mode<br/>
The results were:<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/39847281/86390143-2b503280-bcb5-11ea-86d2-591db1e9cff9.JPG"></p><br/>


2) When loaded the image in grayscale mode<br/>
The results were:<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/39847281/86390208-4ae75b00-bcb5-11ea-9e98-55efa1ece41b.JPG"></p><br/>

Since loading in grayscale mode gives better results, the image should be loaded in grayscale mode.
