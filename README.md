
#### List of Places You've Been
#### _**by Suzi Rubino September 9, 2019 — **_
<br>

## Description

User Behavior Specs — Plain English:	Input > Output
1. Program contains a constructor for an object called Destination. This constructor takes three arguments: place, activity, time. These three arguments create Destination key values. The Destination key value place is a string that describes where the destination is, The Destination key value activity is a string that describes things to do there and Destination key value time represents the best time of year to go. Multiple destinations can be created as separate objects using this Destination constructor. Console log new variables created using this constructor.	var testDestination = new Destination(“Portland, Oregon”, “eat and drink beer”, “July through October”);  
var testDestination2 = new Destination(“Seattle, Washington”, “visit family”, “any time they’ll have me over”);
var testDestination3 = new Destination(“Terrebonne, Oregon”, “rock climbing”, “spring and fall, sometimes winter”);	testDestination = Destination {place: "Portland, Oregon", activity:”eat and drink beer", time:"July through October”};
testDestination2 = Destination {place:”Seattle, Washington”, activity:“visit family”, time:“any time they’ll have me over”};
testDestination3 = Destination{place:“Terrebonne, Oregon”, activity:“rock climbing”,time:“spring and fall, sometimes winter”}
2. Program contains a constructor for an object called DestinationList. This constructor does not take any arguments, it contains an array of Destination objects pushed to it called destinations. A global variable can be created from this constructor to ultimately take user input. Console log the new DestinationList object	var destinationList  = new DestinationList();	destinationList; > DestinationList {destinations: Array(0)}
3. Program contains a method prototype on DestinationList that adds Destination objects to a global variable created using the DestinationList constructor. Console log the contents of destinationList above after the 3 Destination objects in step 1 have been pushed to destinationList key value array destinations (one destination added at a time).	destinationList.addDestination(testDestination);
destinationList.addDestination(testDestination2);
destinationList.addDestination(testDestination3); console.log(destinationList);	destinationList; > DestinationList {destinations: Array(3)}
0: Destination {place: "Portland, Oregon", activity: "Eat and drink beer!", time: "July through October"} 1: Destination {place: "Seattle, Washington", activity: "vist family", time: "any time they'll have me over!"} 2: Destination {place: "Terrebonne, Oregon", activity: "crag climbing", time: "spring and fall"} 

4. Program contains a method prototype on DestinationList that assigns unique id key values (this.currentId) and increments up for each new destination added to destination list. This id allows access and manipulation of each destination in list from the DOM. The id is assigned when Destination object is pushed to DestinationList object	destinationList.addDestination(testDestination);	destinationList; DestinationList {destinations: Array(3)}
0: Destination {place: "Portland, Oregon", activity: "Eat and drink beer!", time: "July through October”, id=1}
5. Program displays the contents of destinationList object’s place value when user adds first destination in a list	user place input; user activity input; user time input;	user place;
6. Program displays the place, activity and time below the destination list created in step 5 when user clicks on destination	user click on element in destination list created above	place, activity and time displayed


<br>

## Objectives
- [] JavaScript business logic and user interface logic are separate.
- [] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [] Application implements a for loop and works as expected.
All previous objectives have been met.
- [] Project is broken down into "plain English" specs, listed in README.
- [] Project is in a presentable, portfolio-quality state.
- [] Practice styling with imagery

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/factorial/master/img/screenShot8-20-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
 There are no known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
