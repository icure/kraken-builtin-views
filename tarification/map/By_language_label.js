map = function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Tarification' && !doc.deleted) {
        var normalize_and_split = require('views/lib/normalize').normalize_and_split
        var wordsPerLanguage = {}

        var add_words = function(text, l) {
            var words = wordsPerLanguage[l] || (wordsPerLanguage[l] = {})
            normalize_and_split([text], null, null, 1, function (w) {
                words[w] = true
            })
        };

        Object.keys(doc.label).forEach(function (l) {
            wordsPerLanguage[l] = wordsPerLanguage[l] || {}
            if (doc.type && doc.type.length) add_words(doc.type, l)
            if (doc.code && doc.code.length) add_words(doc.code, l)
            if (doc.label[l]) add_words(doc.label[l], l)
        });
        if (doc.searchTerms) {
            Object.keys(doc.searchTerms).forEach(function (l) {
                doc.searchTerms[l].forEach(function (t) {
                    add_words(t, l)
                });
            });
        }

        doc.regions.forEach(function (r) {
            Object.keys(wordsPerLanguage).forEach(function (l) {
                Object.keys(wordsPerLanguage[l]).forEach(function (w) {
                    emit([r, l, w], 1);
                })
            })
        });
    }
}
