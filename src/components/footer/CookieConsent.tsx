import CookieConsent from "react-cookie-consent";

export const CookieConsentAlert = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept !"
            cookieName="myCookie"
            style={{ background: "#d5d52c", color: "#004338", padding: "0px 10px", zIndex: 9999 }}
            buttonStyle={{ color: "#d5d52c", background: "#004338", fontSize: "15px", padding: "5px 10px" }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.
        </CookieConsent>
    )
}
