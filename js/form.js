// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyDTEkjOJTAE6hmrxsKuA2oJbaHWuIvf_wI",
    authDomain: "webarch-db1c1.firebaseapp.com",
    databaseURL: "https://webarch-db1c1.firebaseio.com",
    projectId: "webarch-db1c1",
    storageBucket: "webarch-db1c1.appspot.com",
    messagingSenderId: "309696302063",
    appId: "1:309696302063:web:f35274a8f5d9f3f5f1041a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");
document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal("name");
    var phone = getInputVal("phone");

    saveMessage(name, phone);
    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("form").reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, phone) {
    var newmessageRef = messagesRef.push();
    newmessageRef.set({
        name: name,
        phone: phone,
    });
}
