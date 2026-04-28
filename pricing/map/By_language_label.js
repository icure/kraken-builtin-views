function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Tarification' && !doc.deleted) {
        var normalize = require('views/lib/normalize').normalize

        var emit_normalized_substrings = function(text) {
            var words = []
            text.trim().split(/[ |/]+/).forEach(function(word) {
                var r = normalize(word.toLowerCase());
                if (r.length) {
                    words.push(r);
                }
            });
            return words;
        };

        doc.regions.forEach(function (r) {
            var wordsPerLanguage = {}
            Object.keys(doc.label).forEach(function (l) {
                var words = wordsPerLanguage[l] || (wordsPerLanguage[l] = {})
                if (doc.type && doc.type.length) emit_normalized_substrings(doc.type).forEach(function (w) {
                    words[w] = true
                });
                if (doc.code && doc.code.length) emit_normalized_substrings(doc.code).forEach(function (w) {
                    words[w] = true
                });
                if (doc.label[l]) {
                    emit_normalized_substrings(doc.label[l]).forEach(function (w) {
                        words[w] = true
                    });
                }
            });
            if (doc.searchTerms) {
                Object.keys(doc.searchTerms).forEach(function (l) {
                    var words = wordsPerLanguage[l] || (wordsPerLanguage[l] = {})
                    doc.searchTerms[l].forEach(function (t) {
                        emit_normalized_substrings(t).forEach(function(w) { words[w] = true });
                    });
                });
            }
            Object.keys(wordsPerLanguage).forEach(function(l) {
                Object.keys(wordsPerLanguage[l]).forEach(function(w) {
                    emit([r, l, w], 1);
                })
            })
        });
    }
}
