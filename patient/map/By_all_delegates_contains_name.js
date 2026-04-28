function(doc) {
  if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
    var normalize = require('views/lib/normalize').normalize
    var emit_normalized_substrings = function (k, txt, docId, latin_map) {
      var r = normalize(txt.toLowerCase());
      for (var i = 0; i <= r.length - 3; i++) {
          emit([k, (r.substr(i, r.length - i))], docId);
      }
    };

    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      if (doc.lastName || doc.firstName) {
        emit_normalized_substrings(dataOwnerId, (doc.lastName ? doc.lastName : "") + (doc.firstName ? doc.firstName : ""), doc._id);
      }
      if (doc.maidenName && doc.maidenName != doc.lastName) {
        emit_normalized_substrings(dataOwnerId, doc.maidenName, doc._id);
      }
      if (doc.spouseName && doc.spouseName != doc.lastName) {
        emit_normalized_substrings(dataOwnerId, doc.spouseName, doc._id);
      }
    })
  }
}
