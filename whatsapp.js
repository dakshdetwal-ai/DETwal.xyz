// ======================================
// DETwal WhatsApp Configuration
// ======================================


// PUT YOUR WHATSAPP NUMBER HERE

const WHATSAPP_NUMBER = "919XXXXXXXXX";


// Message that will automatically appear
// when someone clicks Get Started.

const WHATSAPP_MESSAGE =
    "Hello DETwal! I want to know more about DETwal.";


// ======================================
// OPEN WHATSAPP
// ======================================

function openWhatsApp() {

    const encodedMessage =
        encodeURIComponent(WHATSAPP_MESSAGE);


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}
