function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted) emit(doc.nihii.substr(0,8), doc._id)
}