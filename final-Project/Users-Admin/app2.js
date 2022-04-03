// import { Drivers } from "../Drivers-Admin/db.js"

// console.log(Drivers)
function initMap() {
    var options = {
        zoom : 10,
        center: {lat:7.1329854, lng:3.4130886},
    }
    var map = new google.maps.Map(document.getElementById('map'), options)
    var marker = new google.maps.Marker({
        position : {lat: 7.1329854, lng:3.4130884},
        map:map,
    })
    var info = new google.maps.InfoWindow({
        content:`<a href="confirm-driver.html">
        <div class="flex-space-between gap radius pd select-driver">
            <h4 class="flex"><img src="img/Oval.svg" alt="" srcset="">4km away</h4>
           <a href="tel:+2348164950695"> <button class="transact-btn green "> call </button></a>
            <h4 class="flex">Ayock Bulus</h4>
        <img src="img/car (2).png" width="10%" alt="" srcset="">
        </div>
    </a>`
    })
    marker.addListener('click', function() {
        info.open(map, marker)
    })
    var marker2 = new google.maps.Marker({
        position : {lat: 7.0322854, lng:3.2110884},
        map:map,
    })

    var info2 = new google.maps.InfoWindow({
        content: `
        <a href="confirm-driver.html">
        <div class="flex-space-between gap radius pd select-driver">
            <h4 class="flex"><img src="img/Oval.svg" alt="" srcset="">4km away</h4>
           <a href="tel:+2348164950695"> <button class="transact-btn green "> call </button></a>
            <h4 class="flex">Babatunde Jousha</h4>
        <img src="img/car (2).png" width="10%" alt="" srcset="">
        </div>
        </a>`
    })
    marker2.addListener('click', function() {
        info2.open(map, marker2)
    })

    
//  fetting user details and Driver details in on address 
    var marker3 = new google.maps.Marker({
        position : {lat: 6.922854, lng:3.4110884},
        map:map,
    })

    var info3 = new google.maps.InfoWindow({
        content: `<a href="confirm-driver.html">
        <div class="flex-space-between gap radius pd select-driver">
            <h4 class="flex"><img src="img/Oval.svg" alt="" srcset="">4km away</h4>
           <a href="tel:+2348164950695"> <button class="transact-btn green "> call </button></a>
            <h4 class="flex">Adroit</h4>
        <img src="img/car (2).png" width="10%" alt="" srcset="">
        </div>
         </a>`
    })
    marker3.addListener('click', function() {
        info3.open(map, marker3)
    })

    var line = new google.maps.Polyline({
        path: [{lat: 7.0322854, lng:3.2110884}, {lat: 7.1329854, lng:3.4130884}],
         map: map
        });
    
    var line = new google.maps.Polyline({
            path: [{lat: 7.0322854, lng:3.2110884}, {lat: 6.922854, lng:3.4110884},],
             map: map
            });
    
    
}


// app modal desing code 
//  modal drop down
// close Event here 
let closeBtn = document.querySelector('.close')
let closeBtnReg = document.querySelector('#closeReg')
let loginModal = document.querySelector('.login-modal')
let registerModal = document.querySelector('#register')
closeBtn.addEventListener('click', function(){
    loginModal.style.top="-1000px";
})
// Second Close Effect
// let closeErr = document.querySelector('.error')
// let smallClose = document.getElementById('cla')
// smallClose.addEventListener('click', function(){
//     closeErr.style.display="none";
// })
// explore button to bring in the login modal
// let explore=document.getElementById('dropbtn')
// explore.addEventListener('click', function () {
//     loginModal.style.top="20%";
// })
 let exploreReg = document.getElementById("dropbtnReg")
 exploreReg.addEventListener('click', function () {
    registerModal.style.top="20%";
})
closeBtnReg.addEventListener('click', function(){
    registerModal.style.top="-1000px";
})
