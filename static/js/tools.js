// Tools.js
// version 1.0.61
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
// tools.fuck, rev: 13

tools.fuck = {
    init: function(){
        this.patterns = [
            /х(уй|уи|уе|уё|ую)/gi,
            /x(uy|ui|yi|yu|ye|ue)/gi,
            /бля|бля(ть|дь)|блеа(ть|дь)|блиа(ть|дь)|блия(ть|дь)|бл[яе](ди|до)/gi,
            /bl(i|e|y|u)(a|at|yt)/gi,
            /п(и|е)(зд|сд|ст|зт)(о|ю|а|ец|у|и|я)/gi,
            /p[ie][zs]d(ec|a|u|y)/gi,
            /су(чк|ка|ку|чар|чеч|чёч|чоч)/gi,
            /s[uy](ka|ch|4)/gi,
            /(еб|ёб)(ал|ат|ис|ан|ла|уч|ок|ки|у(?=(\s|$|\d))|и(?=(\s|$|\d)))/gi,
            /eb\b|eb(al|at|is|it|la)/gi,
            /(еб(?=(\s|$|\d))|ёб(?=(\s|$|\d)))/gi,
            /м[ао]нда|m[ao]nda/gi,
            /г[ао]ндон|муда[кч]|чмо|4мо/gi,
            /g[ao]ndon|muda[kc]|сhmo|4mo/gi,
            /пр[ао]шм[ао]ндовк(у|а|и)/gi,
            /pr[ao]s[h]?mandovk[aiu]?/gi,
            /пид[ао]?р/gi,
            /p[ie]d[ao]?r/gi,
            /fuck|bitch|asshole|dick/gi
        ];
        this.ignore = [
            /\Sблять/gi,
            /\Sбля/gi
        ];
    },
    check: function(text, mask){
        var txt = text.split(" ");

        var many_stars = true;
        if(mask != undefined) many_stars = false;

        mainloop: for(var i = 0; i < txt.length; i++){
            for(var g = 0; g < this.ignore.length; g++){
                if(this.ignore[g].test(txt[i])) continue mainloop;
            }
            for(var d = 0; d < this.patterns.length; d++){
                txt[i] = txt[i].replace(this.patterns[d], function(str){
                    var stars_count = str.length;
                    var pat = mask || "*";
                    if(!many_stars) stars_count = 1;

                    var result = "";
                    for(var e = 0; e < stars_count; e++){
                        result += pat;
                    }

                    return result;
                });
            }
        }

        return txt.join(" ");
    }
};




// =====================================================================================================================
// Launch code

tools.loadComponents = function(context){

    tools.mobile(); // it is now boolean
    tools.fuck.init();

};