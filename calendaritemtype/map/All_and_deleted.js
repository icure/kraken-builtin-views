function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.CalendarItemType') emit(doc._id, null)
}