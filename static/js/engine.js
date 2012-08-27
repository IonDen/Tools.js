// Engine.js
// Tools.js support script
// version 1.0.6
// Copyright 2012, Denis Ineshin
// http://ionden.com/tools/
// =====================================================================================================================

var test = test || {};

// =====================================================================================================================
// Testing tools.mobile, rev: 1

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
// Testing tools.fuck, rev: 1

test.fuck = {
    init: function(){
        var self = this;
        this.text = "";

        $("#fuck_test").on("click", function(){
            self.text = $("#fuck_input").val();
            self.show();
        });
        $("#fuck_input").on("keydown",function(e){
            if(e.keyCode == 13){
                self.text = $(this).val();
                self.show();
            }
        });

        $("#fuck_test_2").on("click", function(){
            self.text = $("#fuck_input_2").val();
            self.show2();
        });
        $("#fuck_input_2").on("keydown",function(e){
            if(e.keyCode == 13){
                self.text = $(this).val();
                self.show2();
            }
        });
    },
    show: function(){
        var result = tools.fuck.check(this.text);
        $("#demo_fuck_1 p").html("<b>Результат проверки:</b> " + result);
    },
    show2: function(){
        var result = tools.fuck.check(this.text, "[Фак!]");
        $("#demo_fuck_2 p").html("<b>Результат проверки:</b> " + result);
    }
};



// =====================================================================================================================
// Launch code

$(document).ready(function(){
    // launch tools.js on DOM ready
    tools.loadComponents();

    // launch all other scripts
    test.mobile.init();
    test.fuck.init();
});