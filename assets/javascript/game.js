// connection check 
console.log("Connection made!!!")

//Variable declaration
var win =0;
var guessesRemaining= 13;
var letterGuessed =[];
var blankNumber=0;
var myChoise=["Toyota","Honda","Nissan","Ford"];
var randomNumber = Math.floor(Math.random() * myChoise.length);

console.log(randomNumber);

var randomChoise = myChoise[randomNumber];

console.log(randomChoise);

var wordBreak = [...randomChoise];
var blankBlank = [];

console.log(wordBreak);
var winDisplay = document.getElementById("winNumber");
var blankDisplay = document.getElementById("blanks");
var guessDisplay = document.getElementById("guessNumber");



//logic building what do display initially
function gameStart ()
{
    console.log(randomChoise);
    blankNumber = randomChoise.length;
    console.log(blankNumber);
    winDisplay.textContent = win;
    //No of blanks it will display as per line
    for(var i = 0; i< blankNumber; i++)
    {
        blankBlank.push("_")
        

    }
    console.log(blankDisplay);

    blankDisplay.textContent= blankBlank.join(" ");
    console.log(blankBlank);
    guessDisplay.textContent = guessesRemaining;
}

gameStart();