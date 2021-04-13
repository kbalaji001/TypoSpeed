	
$(document).ready(function() {
let button= document.getElementById("start-btn");
let text= document.getElementById("text");
let message= document.getElementById("message");
let result= document.getElementById("result");
let startTime, endTime;

text.disabled=true;

const SetofWords= [ 
"	Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",

"	Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",

"	Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",

"	India, officially the Republic of India, is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world.",

"	Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind.",

"   The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. ",

"   On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before the moon!" ,

"   The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day.",

"   On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon’s surface.",

"   It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon.",

"   The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk.",

"   It is scientifically proven that excessive use of aspirin turns it into a toxin. Its toxic effects are Kidney Damage, severe metabolic derangements, respiratory and central nervous system effects, strokes, fatal haemorrhages of the brain, intestines & lungs and eventually death.",

"   All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.",

"   There are three reasons why I prefer jogging to other sports. One reason is that jogging is a cheap sport. I can practise it anywhere at any time with no need for a ball or any other equipment.",

"	Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation."
];


const start = () => {
let index= Math.floor(Math.random()*SetofWords.length);
$("#message").html(SetofWords[index]);
let date= new Date();
startTime = date.getTime();
}

const end= () => {
	let date= new Date();
	let endTime= date.getTime();
	let timeTaken= (endTime-startTime-800)/1000;
	console.log(timeTaken);

	let totalWords= (message.innerText.split(" ")).length;
	if((text.value.trim()).length>0)
	{
		var wordsCount= (text.value.split(" ")).length;
	}
	else {
		var wordsCount=0;
	}

	console.log(totalWords+ " "+wordsCount+message.innerText);
	
	let speed= Math.round(((60/timeTaken)*wordsCount));

	let correctWords=accuracy(text.value,message.innerText);
	console.log('Total Words:'+wordsCount+ 'Correct Words:'+correctWords);
	

	$("#result h4").html(`Speed:  ${speed} wpm <br> 
						Words Typed: ${wordsCount}  <br> 
						Correct Words: ${correctWords} <br> 
						Accuracy:	${Math.round((correctWords/wordsCount)*100)}%`);
	$("#message").html("Text will appear here once you click on Start");
	$("#text").prop("disabled",true);
}

const accuracy = (str,message) => {

message=(message.split(" "));
let count=0;
console.log(message);
 str.trim().split(" ").forEach(function (item) { 
            console.log("item: "+item+ message.indexOf(item)); 
            if(message.indexOf(item) > -1)
            	count++;
         
        }); 
 return count;
}


button.addEventListener('click',function(){
		console.log("Clicked ");
	if(this.innerText === "Start")
	{	

		var seconds = 60;
		function tick() {
			var counter = document.getElementById("timer");
			seconds--;
			counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds+"s");
			if( seconds > 0 ) {
				setTimeout(tick, 1000);
			} else {
				$("#result").fadeIn();
				console.log('Stopped');
				document.getElementById("start-btn").disabled = false;
				end();
			}
		}
		tick();
		
		$("textarea").val("");
		console.log('Started');
		$("#result").fadeOut();
		document.getElementById("start-btn").disabled = true;
		$("#text").prop("disabled",false);
		start();

	}
});

$('textarea').bind('cut copy paste', function (e) {
    e.preventDefault(); 
});

	
});