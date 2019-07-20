/*
DATA FOR OTHER PROJECTS TO DISPLAY IF NEED BE


PRIVATE REPO: REQUEST PERMISSION TO VIEW
https://www.1and1.com/favicon-generator
*/

// array of objects for the different projects
var arr = [
			{
				title:"RESTful Chess Webservice", 
				tech:"Java", 
				description:"Dockerized RESTful web microservice using Java Spring Boot to play chess with VAPs", 
				repo:"https://github.com/ahmednkhan24/Engineering-Distributed-Objects-For-Cloud-Computing/tree/master/Project%203%20-%20Spring%20Boot%20RESTful%20Web%20Service", 
				page:"#"
			},	
			{
				title:"AI Pacman Classification", 
				tech:"Python", 
				description:"A team project to create three classifiers for a Pacman agent.", 
				repo:"https://github.com/ahmednkhan24/Pacman-Artificial-Intelligence/tree/master/Project%203%20-%20Classification", 
				page:"#"
			},
			{
				title:"Arduino Smart Clock", 
				tech:"C++, INO", 
				description:"A cool alarm clock that has tons of features. Software written, tested, and implemented on the Arduino UNO hardware with 2 other partners.", 
				repo:"https://github.com/ahmednkhan24/Computer-Design/tree/master/Smart-Clock", 
				page:"#"
			},
			{
				title:"mySet: C++ Container", 
				tech:"C++", 
				description:"My own implementation of the standard set container in C++", 
				repo:"https://github.com/ahmednkhan24/Programming-Language-Design-and-Implementation/tree/master/mySet%20Container%20Implementation", 
				page:"#"
			},
			{
				title:"Crypto Ticker", 
				tech:"Java", 
				description:"Semester long group application to track various relevant crypto currency data", 
				repo:"https://github.com/ahmednkhan24/Crypto-Ticker/tree/master/CodingProject", 
				page:"#"
			},
			{
				title:"YelpCamp", 
				tech:"HTML, CSS, JavaScript, NodeJS", 
				description:"Yelp-like application for campgrounds", 
				repo:"https://github.com/ahmednkhan24/YelpCamp", 
				page:"https://frozen-castle-47525.herokuapp.com/"
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