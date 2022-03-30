function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aipGSv4hV/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error ){
        console.error(error);
        
    }
    else{
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255)+1;
            random_number_g = Math.floor(Math.random() * 255)+1;
            random_number_b = Math.floor(Math.random() * 255)+1;
    
            document.getElementById("result").innerHTML = 'I can hear '+results[0].label;
            document.getElementById("accuracy").innerHTML = 'Accuracy '+(results[0].confidence*100).toFixed(2)+"%";
            img = document.getElementById('dog');
            img1 = document.getElementById('cat');

    
            if (results[0].label == "bark"){
        img.src = 'download.jpg';
        img1.src = '';
 }
            else if (results[0].label == "meow"){
                img1.src = 'images.jpg';
                img.src = ''

            }

            else {
            console.log("nothing");
            }
        }
    
    }
