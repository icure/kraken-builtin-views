function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.DocumentTemplate' && !doc.deleted && doc.owner) emit([doc.owner,doc.guid], null)
}