function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.CalendarItemType' && doc.agendaId && !doc.deleted) emit(doc.agendaId, null)
}