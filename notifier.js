 const slack= require('./slack.js');

const MINIMUM_SCORE=4.0;
const START_SCORE=0.0;

function handleScore(lastScore,actualScore){
	 if(lastScore==START_SCORE){
		console.log("First Run");
	    slack.sendActualScore(actualScore);
	 } else if(actualScore<MINIMUM_SCORE){
	    console.log("[Warning TOO LOW Score]");
	    slack.sendTooLowMessage(actualScore); 
	 }else if(actualScore<lastScore){
	    console.log("[Lowing Score]");
	    slack.sendLowingScoreMessage(actualScore,lastScore); 
	 }else if(lastScore==START_SCORE){
		console.log("First Run");
	 } else if(actualScore>lastScore){
	    console.log("[Increasing Score]");	    
	    slack.sendIncreasingScoreMessage(actualScore,lastScore); 
	 }else{
	    console.log("[Actual Score]");
	    slack.sendActualScore(actualScore);
	 }
}

module.exports ={
		handleScore
	}
