// event listener to respond to "Inspire me" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('getRandomQuote').addEventListener("click", printQuote, false);

var seenQuotes = [];
var randomQuote;

var quotes = [
	{
		quote: "Make it so.",
		source: "Captain Jean Luc Picard",
		citation: "Star Trek: The Next Generation",
		year: "1994",
		tags: "leadership",
	},
	{
		quote: "The people who are crazy enough to think they can change the world are the ones who do.",
		source: "Steve Jobs",
		citation: "",
		year: "",
		tags: "change",
	},
	{
		quote: "Life is short. It's only sensible to take longer strides.",
		source: "Cat Perry",
		citation: "",
		year: "Oct 2017",
		tags: "life",
	},
	{
		quote: "We may encounter many defeats, but we must not be defeated.",
		source: "Maya Angelou, poet",
		citation: "",
		year: "",
		tags: "resilience",
	},
	{
		quote: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.",
		source: "Helen Keller",
		citation: "",
		year: "",
		tags: "heart",
	},
	{
		quote: "Don't cry because it's over; smile because it happened.",
		source: "Dr. Seuss",
		citation: "",
		year: "",
		tags: "smile",
	}
 ];

function getRandomQuote() {
	randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		if (quotes.length == 0) {
			seenQuotes = quotes;
		}
	return randomQuote;		
};

function printQuote() {
		var newQuote = getRandomQuote();
	 	var printText = '<p class="quote">' + newQuote.quote + '</p>'; 
	 		if (newQuote.source !== "") {
				printText += '<p class="source">' + newQuote.source;
			} 
			if (newQuote.citation !== "") {
				printText += '<span class="citation">' + newQuote.citation;
			}
			if (newQuote.year !== "") {
				printText += '<span class="year">' + newQuote.year;
			}
			if (newQuote.tags !== "") {
				printText += '<p class="tags">' + newQuote.tags;
			}
		document.getElementById("quote-box").innerHTML = printText; 
};

getRandomQuote();
printQuote();


/*
Create a function named getRandomQuote which:
selects a random quote object from the quotes array
returns the randomly selected quote object
Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote object using the following HTML template:
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
printQuote doesn't add a for a missing citation or a if the year property is missing
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML


EXTRA CREDIT
Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
When the quote changes, randomly change the background color of the page.
Don't display a random quote more than once until ALL quotes from the array have been displayed. To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, log the quote to the console each time the “Show Another Quote” button is clicked.
Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
NOTE:
To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
*/