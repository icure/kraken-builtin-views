map = function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Keyword' && !doc.deleted) {
        emit(doc.userId, doc)
    }
}
