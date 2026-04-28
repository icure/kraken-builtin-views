function(doc) {
	if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) {
		var ssin;
		if(doc.ssin) {
		  ssin = doc.ssin.replace(new RegExp('\\s', 'g'), '').replace(new RegExp('\\W', 'g'), '');
		}
		ssin = ssin || null;
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit([dataOwnerId, ssin], null);
		})
	}
}
