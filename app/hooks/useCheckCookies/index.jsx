import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useCheckCookies = () => {
  const [cookieAccepted, setCookieAccepted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (
      (pathname === "/terms-of-use" || pathname === "/privacy-policy") &&
      cookieConsent !== "true"
    ) {
      setCookieAccepted(false);
    } else {
      setCookieAccepted(true);
    }
  }, [pathname, cookieAccepted]);

  return { cookieAccepted, setCookieAccepted };
};

export default useCheckCookies;
