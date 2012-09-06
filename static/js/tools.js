// Tools.js
// version 1.0.68
// Copyright 2012, Denis Ineshin
//
// Project page:    http://ionden.com/tools/
// GitHub page:     https://github.com/IonDen/Tools.js
//
// Released under the MIT license.
// http://ionden.com/tools/license.htm
// =====================================================================================================================

var tools = tools || {};

// =====================================================================================================================
// tools.mobile, rev: 7

tools.mobile = {
    init: function(){
        var n = navigator.userAgent;
        var devices = /iPhone|iPod|iPad|Android|BlackBerry|PlayBook|Windows Phone/gi;
        if(n.match(devices)){
            this.check = true;
            this.browser = n.match(devices)[0];
        }
        if(Object.prototype.toString.call(window.operamini) === "[object OperaMini]"){
            this.check = true;
            this.browser = "OperaMini";
        }
    },
    check: false,
    browser: undefined
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
            /блях\S/gi,
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
// tools.pattern, rev: 9

tools.pattern = {
    init: function(){
        this.patterns = {
            text: /^[\s\w\u0400-\u04FF\?\!\@\#\$\%\^\&\*\,\;\.\+\[\]\{\}\-\—\(\)]*$|^$/,
            strict_text: /^[\s\w\u0400-\u04FF\-]*$|^$/,
            phone: /^\s?\+?\d+\s?\({1}\d+\){1}\s?[\d\-]+\s?$/,
            email: /^[\w\.]+\@\w+\.\w+$|^$/
        }
    },
    check: function(string, type){
        if(type && typeof type != "string") throw new Error("Pattern type should be string");
        var current = this.patterns[type] || this.patterns.text;
        return string.match(current);
    }
};



// =====================================================================================================================
// Launch code

tools.loadComponents = function(context){

    tools.mobile.init();
    tools.fuck.init();
    tools.pattern.init();

};