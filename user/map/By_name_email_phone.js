function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.User' && !doc.deleted) {
        var normalize = require('views/lib/normalize').normalize

        var normalize_substrings = function(text,latin_map) {
            return text.trim().split(/[ |/'`]+/).filter(function (word) {
                return word.length > 2
            }).map(function (word) {
                return normalize(word.toLowerCase());
            });
        }

        var words = []
        if (doc.login && doc.login.length) {
            words = words.concat(normalize_substrings(doc.login))
        }
        if (doc.name && doc.name.length) {
            words = words.concat(normalize_substrings(doc.name))
        }
        if (doc.email && doc.email.length) {
            words = words.concat(normalize_substrings(doc.email))
        }
        if (doc.mobilePhone && doc.mobilePhone.length) {
            words = words.concat(normalize_substrings(doc.mobilePhone.replace(/[^0-9]/g,'')))
        }
        if (doc.status && doc.status.length) {
            words = words.concat(normalize_substrings(doc.status))
        }
        words.sort().forEach(function (t, idx) {
            if (idx === words.length - 1 || !(words[idx + 1].indexOf(t) === 0)) {
                emit(t, 1)
            }
        })
    }
}
