function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Topic' && !doc.deletionDate && doc._conflicts) emit(doc._id)
}