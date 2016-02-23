# iota-angular-basics
Lecture notes on basic Angular.js usage, directives, controller module.

npm install to get started.

##Branches
* master: Lecture #1. Includes basic Angular module/controller with ng-repeat directive, $scope, functions, and local
variables.
* custom-directive-http: Lecture #2. Includes custom directive with HTML partial, $http usage for POST/GET.


In this challenge, your job is to flex and explore your Node/Express, SQL, and Angular skillz. You're going to be
building a full stack order history viewing application.

Installation
Please refer to the Solo SQL Join Challenge for the database set-up.

We will be using the same data and tables from that exercise.

Node Set-up
Use the static method for serving static files.

Required Modules

body-parser
express
pg
angular
bootstrap (optional, see below)
Customer List
Your app should list all customers from the database on the left-hand side of the screen upon page load. Each customer
listing should have a button next to it that will, when clicked, retrieve all of the order information for that
customer. If a customer does not have any orders, do not display a button, instead show a line that let's the user
know there are no orders on file for this customer.

Order History
The order information will be displayed on the right-hand side of the screen whenever a customer order button is
clicked. The order information should be grouped by order and listed with the oldest order first.

Include the order number and all line items and product details (name, unit price, quantity ordered) on the listing.
The line items should be totaled to show a total dollar amount for the order. The orders.total field isn't quite
right so don't rely on it! You'll have to total it some other way.

The address tied to the order should also be a part of the listing, formatted properly of course.

Bootstrap CSS
Bring in Bootstrap (CSS only!) for this challenge and use it to organize the page layout and style elements.

You can use a CDN or install it through npm.