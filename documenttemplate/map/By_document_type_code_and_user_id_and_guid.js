function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.DocumentTemplate' && !doc.deleted && doc.documentType ) emit([doc.documentType,doc.owner,doc.guid], null)
}