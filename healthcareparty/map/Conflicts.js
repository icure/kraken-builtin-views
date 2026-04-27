function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted && doc._conflicts) emit(doc._id)
}