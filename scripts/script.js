/**
 * Function returns boolean information whether actual device is touch device or not.
 */
function isTouchDevice() {
  return !!('ontouchstart' in window) // works on most browsers
      || !!('onmsgesturechange' in window); // works on ie10
};

$(document).ready(function() {

  setTimeout(function() {
    if (isTouchDevice()) {
      $('#result').text('Your device is TOUCH DEVICE.');
    }
    else {
      $('#result').text('Your device is NOT TOUCH DEVICE.');
    }
  }, 2000);

});