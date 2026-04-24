function(doc) {

  if (doc.java_type == 'org.taktik.icure.entities.base.Code' && !doc.deleted) {
      var normalize_substrings = require('views/lib/normalize')
      var wordsPerLanguage = {}
      Object.keys(doc.label).forEach(function (l) {
          wordsPerLanguage[l] = []
          if (doc.code && doc.code.length) {
              wordsPerLanguage[l] = wordsPerLanguage[l].concat(normalize_substrings(doc.code))
          }
          if (doc.label[l]) {
              wordsPerLanguage[l] = wordsPerLanguage[l].concat(normalize_substrings(doc.label[l]))
          }
      })
      if (doc.searchTerms) {
          Object.keys(doc.searchTerms).forEach(function (l) {
              doc.searchTerms[l].forEach(function (t) {
                  wordsPerLanguage[l] = (wordsPerLanguage[l] || []).concat(normalize_substrings(t))
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
