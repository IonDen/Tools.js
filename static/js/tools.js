// Tools.js
// version 1.0.59
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
// tools.fuck, rev: 9

tools.fuck = {
    init: function(){
        this.patterns = [
            /х(уй|уи|уе|уё|ую)/gi,
            /x(uy|ui|yi|yu|ye|ue)/gi,
            /(^|\s)бля(ть|дь)|(^|\s)блеа(ть|дь)|(^|\s)блиа(ть|дь)|(^|\s)блия(ть|дь)|(^|\s)бл[яе](ди|до)/gi,
            /bl(i|e|y|u)(a|at|yt)/gi,
            /п(и|е)(зд|сд|ст|зт)(о|ю|а|ец|у|и|я)/gi,
            /p[ie][zs]d(ec|a|u|y)/gi,
            /су(чк|ка|ку|чар|чеч|чёч|чоч)/gi,
            /s[uy](ka|ch|4)/gi,
            /(еб|ёб)(ал|ат|ис|ан|ла|уч|ок|ки|у(?=(\s|$|\d))|и(?=(\s|$|\d)))/gi,
            /eb\b|eb(al|at|is|it|la)/gi,
            /(еб(?=(\s|$|\d))|ёб(?=(\s|$|\d)))/gi,
            /г[ао]ндон|муда[кч]|чмо|4мо/gi,
            /g[ao]ndon|muda[kc]|сhmo|4mo/gi,
            /пр[ао]шм[ао]ндовк(у|а|и)/gi,
            /pr[ao]s[h]?mandovk[aiu]?/gi,
            /пид[ао]?р/gi,
            /p[ie]d[ao]?r/gi,
            /fuck|bitch|asshole|dick/gi
        ];
    },
    check: function(text, bool){
        this.text = text;
        var b = true;
        if(bool == false) b = false;

        for(var i = 0; i < this.patterns.length; i++){
            this.text = this.text.replace(this.patterns[i], function(str){
                var l = str.length;
                if(!b) l = 1;
                var r = "";
                for(var i = 0; i < l; i++){
                    r = r + "*";
                }
                return r;
            });
        }
        return this.text;
    }
};




// =====================================================================================================================
// Launch code

tools.loadComponents = function(target, isContext){

    tools.mobile(); // it is now boolean
    tools.fuck.init();

    console.log(tools.fuck.check("Потреблять, нахуй блять"));

};