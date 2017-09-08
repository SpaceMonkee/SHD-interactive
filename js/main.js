'use strict'
//pre-loader time delay 
$(document).ready(function() {
 
    function stopAudio() {
        var audio = $('#log-in');
        audio.pause();
    }
 setTimeout(function(){
        $('body').addClass('loaded'); 
    }, 12500);
//ISAC-ready video delay
setTimeout(function(){
    document.getElementById("ISACactive").play();
}, 4000);

let playNow = function() {
 let audio = new Audio('sounds/The Division - Pulse Scan.mp3');
audio.play(), stopAudio();
}
setTimeout(function(){ 
    playNow();
}, 12500);

//setTimeout(function(){
//    newgeo();
//}, 20000);
//setTimeout(function(){
//    newgeo2();
//}, 25000);
setTimeout(function(){
   newgeo3();
}, 3000);
setTimeout(function(){
    lastgeo();
}, 4000);
//setTimeout(function(){
//    newgeo4();
//}, 45000);

//Map
var map = L.map('map').setView([40.749682, -74.007962], 16);
      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;<a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);
//map.dragging.disable();
//map pan to objective
let newgeo = function() {
map.flyTo([40.744307, -73.980036], 18, 3);
};
let newgeo2 = function() {
map.flyTo([40.756005, -73.974341], 18, 3);
};
let newgeo3 = function() {
map.flyTo([40.753738, -73.978804], 18, 3);
};
let newgeo4 = function() {
map.flyTo([40.768956, -73.996248], 18, 3);    
};
let lastgeo = function() {
map.flyTo([40.7665811,-73.9803411], 16, 3);
};
    
    
    
//Map Markers
$(function() {
	var max = 64;
  var balanceOpposite = {
  	'first': 'second',
    'second': 'first',
  }
	$('.balancable').on('input', function() {
  	var id = $(this).attr('id');
    var thisVal = $(this).val();
    $('#' + balanceOpposite[id]).val(64 - thisVal);
  });
});
var Icon1 = L.icon({
    iconUrl: 'img/align.png',
    iconSize:     [160, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [60, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([40.753738, -73.978804], {icon: Icon1}).addTo(map);

var Icon2 = L.icon({
    iconUrl: 'img/alignNext.png',
    iconSize:     [160, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [60, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([40.756005, -73.974341], 
         {icon: Icon2}).addTo(map);

Icon2.click = (function() {
        $('#tower1src').addClass('open');
        $('#tower1').play();
        });    
    

var Icon3 = L.icon({
    iconUrl: 'img/alignLast.png',
    iconSize:     [160, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [60, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([40.744307, -73.980036], {icon: Icon3}).addTo(map);

var Icon4 = L.icon({
    iconUrl: 'img/agent.png',
    iconSize:     [40, 55], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([40.766143, -73.969219], {icon: Icon4}).addTo(map);
//pop-up tasks
//  $( function() {
//    $( "#task1" ).draggable();
//  } );
});