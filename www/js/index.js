/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    // pause is when the app loses focus, like when they leave it without shutting it down, resume is when they come back.
    // A good use for these events might be to stop/start anything that won't be needed while the app isn't running
    onDeviceReady: function() {

        document.getElementById('set').addEventListener("click", setLocalStorage);
        document.getElementById('show').addEventListener("click", showLocalStorage);

        // Capture the back button press and call a method
        document.addEventListener("backbutton",onBackKeyDown, false);
        this.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

app.initialize();




// document.getElementById('remove').addEventListener("click", removeFromLocalStorage);

let localStorage = window.localStorage;


function setLocalStorage(){
    // Get the value from the text field and store it in the local storage
    // We do this to persist the data both on the browser and on any mobile device we use
    localStorage.setItem('name', document.getElementById('name').value);
}
function showLocalStorage(){
    document.getElementById('showName').innerHTML = localStorage.getItem('name'); 
}


function onBackKeyDown(e){
    // The back button will by default return to the last app. We don't want that, so prevent the default
    e.preventDefault();
    // A good use for this would be to make it go back to the previous page. We'll just trap them in though.
    alert("You will never be free");
}



 
    // function onFail(message) {
    //    // Uploading the image failed, inform the user.
    //     alert('Failed because: ' + message);
    // }

function onBatteryStatus(info){
    alert(`Your Phone is at ${info.level}% and is currently ${info.isPlugged ? "Plugged In":"Unplugged"}`);
}