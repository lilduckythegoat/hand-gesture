Webcam.set ({
width:350,
height:300,
image_format:"png",
png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">'
    });
}
console.log('ml5.version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ysBOy_jlC/model.json',modelLoaded);

function modelLoaded() {
    console.log("model_loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "the prediction is" + prediction;
    var utterthis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterthis);
}

function modelLoaded() {
    console.log('Model Loaded!')
}

function check() {
    img = document.getElementById('captured_img')
Classifier.classify(img,gotResult);
}



function check() {
    img = document.getElementById('captured_img')
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    prediction = results[0].label;
    speak();
    if (prediction = "hi") {
        document.getElementById("update_emoji").innerHTML = "&#9995;"
    }
    if (prediction = "thumbs up") {
        document.getElementById("update_emoji").innerHTML = "&#128077;"
    }
    if (prediction = "thumbs down") {
        document.getElementById("update_emoji").innerHTML = "&#128078;"
    }}}