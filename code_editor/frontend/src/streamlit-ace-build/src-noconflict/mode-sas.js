define("ace/mode/sas_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var SasHighlightRules = function() {
    
        this.$rules = {
            start: [{
                token: "comment.block",
                regex: "/\\*",
                push: [{
                    token: "comment.block",
                    regex: "\\*/",
                    next: "pop"
                }, {
                    defaultToken: "comment.block"
                }]
            }, {
                token: "comment.line",
                regex: "\\*.*$"
            }, {
                token: "string.quoted",
                regex: "'.*?'"
            }, {
                token: "string.quoted",
                regex: '".*?"'
            }, {
                token: "constant.numeric",
                regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token: "keyword.control",
                regex: "\\b(?:if|then|else|do|end|while|until|for|to|by|goto|in|case|select|when|default)\\b",
                caseInsensitive: true
            }, {
                token: "keyword.operator",
                regex: "\\b(?:eq|ne|gt|lt|ge|le|in|not|and|or)\\b",
                caseInsensitive: true
            }, {
                token: "keyword.other",
                regex: "\\b(?:proc|data|run|quit)\\b",
                caseInsensitive: true
            }, {
                token: "storage.type",
                regex: "\\b(?:create|table|view|as|select|from|where|group|having|order|by|on|label|format|input|output)\\b",
                caseInsensitive: true
            }, {
                token: "support.function.sql",
                regex: "\\b(?:substr|upcase|lowcase|compress|catx)\\b",
                caseInsensitive: true
            }, {
                token: "support.function",
                regex: "\\b(?:input|put|left|right|scan|strip|trim|length|mean|sum|count|min|max|int|abs|sign|round|mod|exp|log|sqrt|tranwrd)\\b",
                caseInsensitive: true
            }, {
                token: "variable.language",
                regex: "\\b(?:_n_|_error_|_null_)\\b",
                caseInsensitive: true
            }, {
                token: "variable.parameter",
                regex: "&[a-zA-Z_][a-zA-Z0-9_]*\\.?"
            }, {
                token: "keyword.control.macro",
                regex: "%(?:macro|mend|do|end|if|then|else|let|put|include|abort)\\b",
                caseInsensitive: true
            }, {
                token: "entity.name.function.macro",
                regex: "%[a-zA-Z_][a-zA-Z0-9_]*"
            }, {
                token: "entity.name.function",
                regex: "\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\()",
                caseInsensitive: true
            }, {
                token: "keyword.operator",
                regex: "\\+|\\-|\\/|\\*|\\*\\*|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
            }, {
                token: "punctuation.bracket",
                regex: "[\\[({]"
            }, {
                token: "punctuation.bracket",
                regex: "[\\])}]"
            }, {
                token: "text",
                regex: "\\s+"
            }]
        };
    
        this.normalizeRules();
    };
    
    oop.inherits(SasHighlightRules, TextHighlightRules);
    
    exports.SasHighlightRules = SasHighlightRules;
    });
    
    define("ace/mode/sas",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sas_highlight_rules"], function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var SasHighlightRules = require("./sas_highlight_rules").SasHighlightRules;
    
    var Mode = function() {
        this.HighlightRules = SasHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    
    (function() {
        this.$id = "ace/mode/sas";
    }).call(Mode.prototype);
    
    exports.Mode = Mode;
    });