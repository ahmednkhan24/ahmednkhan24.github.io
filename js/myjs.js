/*
DATA FOR OTHER PROJECTS TO DISPLAY IF NEED BE


PRIVATE REPO: REQUEST PERMISSION TO VIEW
https://www.1and1.com/favicon-generator
*/

// array of objects for the different projects
var arr = [
			{
				title:"CTA Ridership Analysis", 
				tech:"C#, SQL", 
				description:"Program written in C# that utilizes a SQL database that accesses, updates, and displays relevant CTA data.", 
				repo:"https://github.com/akhan227/Programming-Language-Design-and-Implementation/tree/master/CTA%20Ridership%20Analysis%20-%20part%202", 
				page:"#"
			},	
			{
				title:"Sudoku Solver", 
				tech:"Java", 
				description:"A team project to play the famous game of Sudoku with user assist functionality.", 
				repo:"https://github.com/akhan227/Software-Design/tree/master/Sudoku%20Solver", 
				page:"#"
			},
			{
				title:"Arduino Smart Clock", 
				tech:"C++, INO", 
				description:"A cool alarm clock that has tons of features. Software written, tested, and implemented on the Arduino UNO hardware with 2 other partners.", 
				repo:"https://github.com/akhan227/Computer-Design/tree/master/Smart-Clock", 
				page:"#"
			},
			{
				title:"mySet: C++ Container", 
				tech:"C++", 
				description:"My own implementation of the standard set container in C++", 
				repo:"https://github.com/akhan227/Programming-Language-Design-and-Implementation/tree/master/mySet%20Container%20Implementation", 
				page:"#"
			},
			{
				title:"YelpCamp", 
				tech:"HTML, CSS, JavaScript, NodeJS", 
				description:"Yelp-like application for campgrounds", 
				repo:"https://github.com/akhan227/Web-Development-Bootcamp-Projects/tree/master/YelpCamp", 
				page:"https://frozen-castle-47525.herokuapp.com/"
			},
			{
				title:"MyTransitApp", 
				tech:"HTML, CSS, JavaScript", 
				description:"UIC East Campus real-time CTA Bus & Train Tracker", 
				repo:"https://github.com/akhan227/MyTransitApp-Web", 
				page:"https://akhan227.github.io/MyTransitApp-Web/index.html"
			}
		  ];

// get the div that we will be adding all of the project cards to
var projectSection = $(".projectSection .container");

// get the original row that's in the html file
var originalRow = $(".projectSection #originalRow");

// clone the original row
var row = $(originalRow).clone();

// change the id of the cloned row
var id = "#row1";
$(row).attr("id", id);

// add the cloned row to the DOM
projectSection.append(row);

// variable to keep track of how many rows there are
var numRows = 1;

// for loop to add each project to the row, and each row to the DOM
for (var i = 0; i < arr.length; i++)
{
	// I want 3 cards per row, so if the number of iterations
	// of this loop is a multiple of 3, that means make a new row
	if (i % 3 === 0)
	{
		// increment the number of rows counter
		numRows++;

		// reclone the original row
		row = $(originalRow).clone();

		// change the id of the cloned row
		id = "#row" + numRows;
		$(row).attr("id", id);

		// add the cloned row to the DOM
		projectSection.append(row);
	}

	// clone the original card
	var card = originalRow.find("#originalCard").clone();

	// change the id of the cloned card to the current iteration
    var id = "#card" + i;
    $(card).attr("id", id);

    // add the data for this project to the card
	$(card).find(".card-header").text(arr[i].title);
	$(card).find(".card-title").text(arr[i].tech);
	$(card).find(".card-text").text(arr[i].description);

	// check if there are actual links to display for the repo and the page
	if (arr[i].repo === "#")
		$(card).find(".repoBtn").toggleClass("screen");
	else
		$(card).find(".repoBtn").attr("href", arr[i].repo);

	if (arr[i].page === "#")
		$(card).find(".pageBtn").toggleClass("screen");
	else
		$(card).find(".pageBtn").attr("href", arr[i].page);

	// turn the visibility of the card on
	card.toggleClass("screen");

	// add the card to the row
	row.append(card);
}