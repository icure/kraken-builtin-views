function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Classification' && !doc.deleted) emit( doc.patientId, doc._id )
}