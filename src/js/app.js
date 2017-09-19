/**
* Imports
**/
window.jQuery = window.$ = require('jquery')
window.Popper = require('popper.js')
window.bootstrap = require('bootstrap')


/**
 * Get the js party started
 */
$(document).ready(() => {

    $('html')
        .toggleClass("no-js js")
})