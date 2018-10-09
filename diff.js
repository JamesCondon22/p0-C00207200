/*! diff v0.0.0 - MIT license */
'use strict';
var previous = 0

var diff = function (x) {
  // your code goes here
  var ans = 0;

  if (x > previous)
  {
    ans = x - previous
  }
  else
  {
    ans = previous - x;
  }

  previous = 0
  previous = x;
  // your code goes here
  return ans;

}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}
