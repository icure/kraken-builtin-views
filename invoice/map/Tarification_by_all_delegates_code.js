function(doc) {
    var emit_tarifications_by_code = function(dataOwnerId, doc) {
        let d = doc.invoiceDate
        if (!d && doc.created) {
            const c = new Date(doc.created)
            d = ((((c.getFullYear() * 100) + c.getMonth() + 1) * 100) + c.getDate()) * 1000000 + (((c.getHours() * 100) + c.getMinutes()) * 100) + c.getSeconds()
        }

        if (d && doc.invoicingCodes) {
            doc.invoicingCodes.forEach(function (invoicingCode) {
                emit([dataOwnerId, invoicingCode.tarificationId, d < 99999999 ? d * 1000000 : d], invoicingCode._id)
            });
        }
    };

    if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit_tarifications_by_code(dataOwnerId, doc);
        })
    }
}
