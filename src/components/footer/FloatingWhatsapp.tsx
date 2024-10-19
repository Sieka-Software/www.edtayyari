import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "../../assets/media/favicon.ico";

export const FloatingWhatsapp = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="919999999999"
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
