/**
 * Main JS file for project.
 */

// Define globals that are added through the js.globals in
// the config.json file, here like this:
// /* global _ */

// Utility functions, such as Pym integration, number formatting,
// and device checking

//import utilsFn from './utils.js';
//utilsFn({ });

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Utilize templates on the client.  Get the main content template.
//import Content from '../templates/_index-content.svelte.html';
//
// Get the data parts that are needed.  For larger data points,
// utilize window.fetch.  Add the build = true option in the buildData
// options.
//import content from '../content.json';
// OR: let content = await (await window.fetch('./assets/data/content.json')).json();
//
// const app = new Content({
//   target: document.querySelector('.main-app-container'),
//   data: {
//     content
//   }
// });

import { throttle } from 'lodash';

var navigationTop;

// Set place holder.
$('.navigation-placeholder').css('height', $('#navigation').height() + 'px');

// Nav might move because of ads or something
var updateNavTopInterval = window.setInterval(() => {
  updateNavTop();
}, 1000);
updateNavTop();

// Make throttled updated
var throttledUpdateStickyNav = throttle(() => {
  updateStickyNav();
}, 50);

// Add to scroll event
window.addEventListener('scroll', throttledUpdateStickyNav);

function updateStickyNav() {
  // See if we are past
  if (window.pageYOffset >= navigationTop) {
    $('.navigation-placeholder').addClass('sticky-on');
    $('#navigation').addClass('sticky');
  }
  else {
    $('.navigation-placeholder').removeClass('sticky-on');
    $('#navigation').removeClass('sticky');
  }
}

// Check where the nav container is
function updateNavTop() {
  // Mark navigation top.  This can change due to ads or reloads
  navigationTop = $('.navigation-marker').offset().top;
}

//nav SCROLLMAGIC
// init controller

var controller = new ScrollMagic.Controller();

// fetch office heights

var govlength = $('#governor').outerHeight();

var sensplength = $('#senspec').outerHeight();
var sensclength = $('#sensched').outerHeight();

var d1length = $('#dist1').outerHeight();
var d2length = $('#dist2').outerHeight();
var d3length = $('#dist3').outerHeight();
var d4length = $('#dist4').outerHeight();
var d5length = $('#dist5').outerHeight();
var d6length = $('#dist6').outerHeight();
var d7length = $('#dist7').outerHeight();
var d8length = $('#dist8').outerHeight();

var aglength = $('#ag').outerHeight();
var audlength = $('#aud').outerHeight();
var soslength = $('#sos').outerHeight();

// build scenes

new ScrollMagic.Scene({ triggerElement: '#governor', duration: govlength })
  .setClassToggle('#navgov', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#senspec', duration: sensplength })
  .setClassToggle('#navsen', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#sensched', duration: sensclength })
  .setClassToggle('#navsen', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist1', duration: d1length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist2', duration: d2length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist3', duration: d3length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist4', duration: d4length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist5', duration: d5length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist6', duration: d6length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist7', duration: d7length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#dist8', duration: d8length })
  .setClassToggle('#navhouse', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#ag', duration: aglength })
  .setClassToggle('#navstate', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#aud', duration: audlength })
  .setClassToggle('#navstate', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: '#sos', duration: soslength })
  .setClassToggle('#navstate', 'active') // add class toggle
  .addIndicators()
  .addTo(controller);
