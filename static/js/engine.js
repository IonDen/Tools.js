// Engine.js
// Tools.js support script
// version 1.0.10
// Copyright 2012, Denis Ineshin
// http://ionden.com/tools/
// =====================================================================================================================

var test = test || {};

// =====================================================================================================================
// Testing tools.mobile, rev: 4

test.mobile = {
    init: function(){
        $("#mobile_test").on("click", function(){
            var browser = "";
            if(tools.mobile.check){
                browser = "<code>true</code> У вас мобильный браузер. Название: <b>" + tools.mobile.browser + "</b>";
            }
            else browser = "<code>false</code> У вас десктопный браузер";

            $("#mobile_demo > div.result").html("Результат проверки: " + browser).show();
        })
    }
};


// =====================================================================================================================
// Testing tools.fuck, rev: 4

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
// Testing tools.pattern, rev: 1

test.pattern = function(elem){
    this.elem = elem;
};
test.pattern.prototype = {
    init: function(){
        this.elem.on("click","a.button",function(e){
            e.preventDefault();
            var string = $(this).siblings("input").val();
            if(!string) return;
            var type = $(this).siblings("input").data("type");
            var err = $(this).siblings("div.error");
            var success = $(this).siblings("div.success");
            var c = tools.pattern.check(string, type);
            if(c) {
                success.text("Текст прошел валидацию").show();
                err.hide();
            } else {
                success.hide();
                err.text("Текст не прошел валидацию").show();
            }
        });
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

    $("div.demo_pattern").each(function(i){
        test["pattern_" + i] = new test.pattern($("div.demo_pattern").eq(i));
        test["pattern_" + i].init();
    });
});