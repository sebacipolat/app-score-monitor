const too_low=  require('./slack_block/too_low_score.js');
const actual_message=  require('./slack_block/actual_score.js');
const increasing=  require('./slack_block/increasing.js');
const lowing=  require('./slack_block/lowing_score.js');

const WEBHOOK= ""

function sendTooLowMessage(score){
  sendSlackMessage(setScore(too_low.blocks,score))
}

function sendIncreasingScoreMessage(actual,before){
  body=setScore(increasing.blocks,actual)
  sendSlackMessage(setChangingScore(body,actual,before))
}

function sendLowingScoreMessage(actual,before){
  body=setScore(lowing.blocks,actual)
  sendSlackMessage(setChangingScore(body,actual,before))
}

function sendActualScore(actual){
 sendSlackMessage(setScore(actual_message.blocks,actual))
}

function setScore(inputBody,score){
  inputBody.blocks[2].text.text=score+"⭐️";
  return inputBody;
}

function setChangingScore(inputBody,actual,before){
  body=setScore(inputBody,actual)
  body.blocks[3].elements[0].text="Anterior: "+before;
  return body;
}

function sendSlackMessage(body){
 console.log(JSON.stringify(body))
 /*const options = {
  method: "POST",
  headers: {
  	"Accept", "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(jsonData)
};
 fetch(WEBHOOK, options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });*/
}

module.exports ={
		sendTooLowMessage,
		sendIncreasingScoreMessage,
		sendLowingScoreMessage,
		sendActualScore
	}
