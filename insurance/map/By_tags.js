map = function (doc) {
    var emit_by_tag = function (doc) {
          if (doc.tags && doc.tags.length) {
                doc.tags.forEach(function (tag) {
                  emit([tag.type, tag.code], null);
                });
            }
    };

    if (doc.java_type === 'org.taktik.icure.entities.Insurance' && !doc.deleted) {
        emit_by_tag(doc);
    }
};
