function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Place' && !doc.deleted && doc._conflicts) emit(doc._id)
}