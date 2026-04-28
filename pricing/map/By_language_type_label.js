function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Tarification' && !doc.deleted) {
        var normalize = require('views/lib/normalize').normalize

        var emit_normalized_substrings = function(region,language, type, text) {
            text.trim().split(/[ |/]+/).forEach(function(word) {
                var r = normalize(word.toLowerCase());
                if (r.length) {
                    emit([region, language, type, r], 1);
                }
            });
        };

        doc.regions.forEach(function (r) {
            Object.keys(doc.label).forEach(function (l) {
                if (doc.code && doc.code.length) emit_normalized_substrings(r, l, doc.type, doc.code);
                if (doc.label[l]) {
                    emit_normalized_substrings(r, l, doc.type, doc.label[l]);
                }
            });
            if (doc.searchTerms) {
                Object.keys(doc.searchTerms).forEach(function (l) {
                    doc.searchTerms[l].forEach(function (t) {
                        emit_normalized_substrings(r, l, doc.type, t);
                    });
                });
            }
        });
    }
}
