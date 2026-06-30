map = function(doc) {

  if (doc.java_type == 'org.taktik.icure.entities.base.Code' && !doc.deleted) {
      var normalize_and_split = require('views/lib/normalize').normalize_and_split
      var wordsPerLanguage = {}

      var add_substrings = function(text, l) {
          normalize_and_split([text], null, 100, 2, (it) => {
              wordsPerLanguage[l] = wordsPerLanguage[l].concat(t)
          })
      };

      Object.keys(doc.label).forEach(function (l) {
          wordsPerLanguage[l] = []
          if (doc.code && doc.code.length) {
              add_substrings(doc.code, l)
          }
          if (doc.label[l]) {
              add_substrings(doc.label, l)
          }
      })
      if (doc.searchTerms) {
          Object.keys(doc.searchTerms).forEach(function (l) {
              wordsPerLanguage[l] = []
              doc.searchTerms[l].forEach(function (t) {
                  add_substrings(t, l)
              })
          })
      }
      Object.keys(wordsPerLanguage).forEach(function (l) {
          var terms = wordsPerLanguage[l]
          terms.sort().forEach(function (t, idx) {
              if (idx === terms.length - 1 || !(terms[idx + 1].indexOf(t) === 0)) {
                  emit([l, doc.type, t, doc.code], doc.regions)
              }
          })
      })
  }
}
