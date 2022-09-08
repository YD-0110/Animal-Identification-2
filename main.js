function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true}); //code to acess microphone
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/N73cmKYO3/model.json", modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    } else{
        console.log(results);
    }
}