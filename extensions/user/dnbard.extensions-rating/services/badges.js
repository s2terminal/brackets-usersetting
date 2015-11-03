define(function(require, exports, module){
    exports.gold = 'data:image/png;base64,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';

    exports.goldSmall = 'data:image/png;base64,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';
});
