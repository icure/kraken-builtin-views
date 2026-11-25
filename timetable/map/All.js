map = function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.TimeTable' && !doc.deletionDate) emit(null, doc._id)
}