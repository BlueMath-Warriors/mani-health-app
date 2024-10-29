import { useEffect, useState } from "react";

const useCheckCookies = () => {
  const [cookieAccepted, setCookieAccepted] = useState(
    () => localStorage.getItem("cookieConsent") === "true"
  );

  useEffect(() => {
    const updateCookieAccepted = () => {
      const consent = localStorage.getItem("cookieConsent") === "true";
      setCookieAccepted(consent);
    };

    updateCookieAccepted();

    window.addEventListener("storage", updateCookieAccepted);

    window.addEventListener("cookieConsentUpdated", updateCookieAccepted);

    return () => {
      window.removeEventListener("storage", updateCookieAccepted);
      window.removeEventListener("cookieConsentUpdated", updateCookieAccepted);
    };
  }, []);

  return { cookieAccepted };
};

export default useCheckCookies;
