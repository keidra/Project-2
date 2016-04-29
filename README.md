
General Assembly - Project #2: Full-stack Application
_______________________________________________________________

Water Wise - Version 1
_______________________________________________________________

Water Wise is an application that provides easier access to water quality reports, and aims to
raise the awareness of the many harmful chemicals that our water may contain. 
_________________________________________________________________

Installation Instructions:

Open Terminal:

Run npm install
npm install --save 
express
body-parser
express-ejs-layouts
connect-flash
express-sessions

__________________________________________________________________


Technologies used:

Node.js
jQuery
psql
Heroku
Google Maps API

__________________________________________________________________

Wireframes: http://imgur.com/a/OKTXv

Project-Management: I used MeisterTask. 

User Stories: https://docs.google.com/document/d/1u9MqNuwEZWW3ovfQQjCEXZ-30pBWjH9YBmRYVwvNRlY/edit?usp=sharing

_______________________________________________________________


Process

My inital approach was to get the page setup to have framework for everything to go into. I then enable the signup functions and routes to each page. I then enable the Google Maps API, which has the water quality report for each location in each map marker. I then enabled the sign in function. The last portion that I added as a bonus was the bottled water page. I created a table with the information on each brand of bottled water, stored the name, url of the water quality report, and an image of the product inside the table. I call this table on the page bottle, and have the bottle image render as a link to the full water quality report. 

_______________________________________________________________

Issues/Unsolved Problems

I had some issues getting the table to work with Heroku, but I was able to figure it out and get my table data pushed appropriately. 

I am still working on getting my applications to be more responsive, this application is much more responsive than anything else I've worked on. The bottled water page may not be very responsive. 

