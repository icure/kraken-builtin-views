function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Insurance' && !doc.deleted && doc._conflicts) emit(doc._id)
}