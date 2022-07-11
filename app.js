var gplay = require('google-play-scraper');
const fs = require('fs');
var notifier = require('./notifier.js');

const fileScore = "last_score.txt";
const PACKAGE_ID=process.env.PACKAGE_ID;
const COUNTRY_ID=process.env.COUNTRY_ID;

lastScore="0.0"

console.log("--------------------"); 
console.log("APP Score Monitor"); 
console.log("By Sebastian Cipolat"); 
console.log("@seba.cipolat"); 
console.log("--------------------"); 

//read last score saved
fs.readFile(fileScore, (err, data) => {
    if (err){
      console.log("Could not Found:"+fileScore+" I will created!");
      saveToFile(fileScore,"0.0");      
    }else{
      lastScore=parseFloat(data);
      console.log("Last "+PACKAGE_ID+" saved Score="+lastScore);
    }  
});

//Get score from playstore and send message
gplay.app({appId: PACKAGE_ID,country: COUNTRY_ID})
    .then((value)=>{
       console.log("App Name="+value.title); 
       console.log("Score="+value.scoreText); 
       saveToFile(value.scoreText);
       notifier.handleScore(lastScore,value.scoreText);
    });


//update score file
function saveToFile(body){
  fs.writeFile(fileScore,body, function (err) {
      if (err) {
          console.log("Error writing Score File."+fileScore);
          return console.log(err);
      }
  });
}