function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.User' && !doc.deleted) { emit(doc.login, null) }
}