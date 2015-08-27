$(document).ready(function(){

var defaults      = {
  selector:             '.backdrop',
  parent:               '.big-bg',
  exclude:              [ 'rgb(0,0,0)', 'rgba(255,255,255)' ],
  normalizeTextColor:   false,
  normalizedTextColors:  {
    light:      "#fff",
    dark:       "#000"
  },
  lumaClasses:  {
    light:      "ab-light",
    dark:       "ab-dark"
  }
};
$.adaptiveBackground.run(defaults);

});