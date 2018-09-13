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
