function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted && doc.parentId) emit(doc.parentId, doc._id)
}