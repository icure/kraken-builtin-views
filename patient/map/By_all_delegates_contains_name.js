map = function(doc) {
  if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
    var normalize_and_substring = require('views/lib/normalize').normalize_and_substring
    var emit_normalized_substrings = function (k, strings, docId) {
      normalize_and_substring(strings, 1000, 100, (it) => {
        emit([k, it], docId);
      })
    };

    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      if (doc.lastName || doc.firstName) {
        emit_normalized_substrings(dataOwnerId, [(doc.lastName ? doc.lastName : ""), (doc.firstName ? doc.firstName : "")], doc._id);
      }
      if (doc.maidenName && doc.maidenName != doc.lastName) {
        emit_normalized_substrings(dataOwnerId, [doc.maidenName], doc._id);
      }
      if (doc.spouseName && doc.spouseName != doc.lastName) {
        emit_normalized_substrings(dataOwnerId, [doc.spouseName], doc._id);
      }
    })
  }
}
