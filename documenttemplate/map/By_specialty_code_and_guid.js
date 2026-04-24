function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.DocumentTemplate' && !doc.deleted && doc.specialty) emit([doc.specialty.code,doc.guid], null)
}