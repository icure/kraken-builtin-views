function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.CalendarItemType' && !doc.deleted && doc._conflicts) emit(doc._id)
}