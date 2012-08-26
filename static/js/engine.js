// Engine.js
// Tools.js support script
// version 1.0.4
// Copyright 2012, Denis Ineshin
// http://ionden.com/tools/
// =====================================================================================================================

var test = test || {};

// =====================================================================================================================
// Testing tools.js/mobile, rev: 1

test.mobile = {
    init: function(){
        $("#mobile_test").on("click", function(){
            var browser = "";
            if(tools.mobile) browser = "<code>true</code> У вас мобильный браузер";
            else browser = "<code>false</code> У вас десктопный браузер";
            $("#mobile_demo > div.result").html("Результат проверки: " + browser).show();
        })
    }
};




// =====================================================================================================================
// Launch code

$(document).ready(function(){
    // launch tools.js on DOM ready
    tools.loadComponents();

    // launch all other scripts
    test.mobile.init();
});