import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "../../assets/media/favicon.ico";

export const FloatingWhatsapp = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="918595894937"
            accountName="EdTayyari Academia"
            avatar={Logo}
            statusMessage="Online"
            darkMode={true}
            allowClickAway={true}
            allowEsc={true}
            notificationSound={true}
        />
    )
}
