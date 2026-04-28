function(doc) {
    if ((doc.java_type === 'org.taktik.icure.entities.Tarification' || doc.java_type === 'org.taktik.icure.entities.Pricing') && !doc.deleted && doc._conflicts) emit(doc._id)
}