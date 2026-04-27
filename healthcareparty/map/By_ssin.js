function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted) emit(doc.ssin, doc._id)
}