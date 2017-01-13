var partner;

function partnerSelect(p) {
    var selectedPartner = p.getAttribute("data-partner-name");
    if (selectedPartner == partner) {
        var partners = document.getElementsByClassName('partner');
        for (i = 0; i < partners.length; i++) {
            if (partners[i].getAttribute("data-partner-name") != partner)
                partners[i].style.visibility == 'visible' ? partners[i].style.visibility = 'hidden' : partners[i].style.visibility = 'visible';
        }
        partner = null;
        document.getElementById('browser').style.visibility = 'hidden';
    } else {
        partner = p.getAttribute("data-partner-name");
        document.getElementById('browser').style.visibility = 'visible';
        var partners = document.getElementsByClassName('partner');

        for (i = 0; i < partners.length; i++) {
            if (partners[i].getAttribute("data-partner-name") != partner)
                partners[i].style.visibility = "hidden";
        }
    }
}
