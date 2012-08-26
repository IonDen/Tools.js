// Tools.js
// version 1.0.55
// Copyright 2012, Denis Ineshin
// http://ionden.com/tools/
// Released under the MIT license.
// http://ionden.com/tools/license.htm
// =====================================================================================================================

var tools = tools || {};

// =====================================================================================================================
// tools.mobile, rev: 5

tools.mobile = function(){
    var n = navigator.userAgent;
    var devices = [
        /Android/i,
        /iPhone/i,
        /iPod/i,
        /iPad/i,
        /BlackBerry/i,
        /PlayBook/i,
        /Windows Phone/i
    ];

    var result = false;
    for(var i = 0; i < devices.length; i++){
        result = devices[i].test(n);
        if(result) break;
    }
    tools.mobile = result;
    return result;
};




// =====================================================================================================================
// Launch code

$(document).ready(function(){

    tools.mobile(); // it is now boolean

});