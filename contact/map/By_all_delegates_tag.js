function(doc) {
    var emit_by_tag = function (hcparty, doc) {
          var d = doc.openingDate;
          if (doc.tags && doc.tags.length) {
                doc.tags.forEach(function (tag) {
                  emit([hcparty, tag.type, tag.code, d<99999999?d*1000000:d], null);
                });
            }
    };

    if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit_by_tag(dataOwnerId, doc);
        })
    }
}
