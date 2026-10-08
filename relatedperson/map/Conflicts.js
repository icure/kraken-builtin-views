map = function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.RelatedPerson' && !doc.deleted && doc._conflicts) emit(doc._id)
}