map = function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.MedicalLocation' && !doc.deleted && !!doc.publicInformations && Object.keys(doc.publicInformations).length > 0) {
        emit(doc._id, doc._id);
    }
}
