function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Device' && !doc.deleted && doc._conflicts) emit(doc._id)
}