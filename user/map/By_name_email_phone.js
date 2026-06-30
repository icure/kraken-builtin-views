map = function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.User' && !doc.deleted) {
        var normalize_and_split = require('views/lib/normalize').normalize_and_split
        var words = []

        var add_word = function(text) {
            normalize_and_split([text], null, 100, 2, (it) => {
                words = words.concat(it)
            })
        }

        if (doc.login && doc.login.length) {
            add_word(doc.login)
        }
        if (doc.name && doc.name.length) {
            add_word(doc.name)
        }
        if (doc.email && doc.email.length) {
            add_word(doc.email)
        }
        if (doc.mobilePhone && doc.mobilePhone.length) {
            add_word(doc.mobilePhone.replace(/[^0-9]/g,''))
        }
        if (doc.status && doc.status.length) {
            add_word(doc.status)
        }

        words.sort().forEach(function (t, idx) {
            if (idx === words.length - 1 || !(words[idx + 1].indexOf(t) === 0)) {
                emit(t, 1)
            }
        })
    }
}
