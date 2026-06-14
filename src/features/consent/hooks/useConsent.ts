import { useState, useEffect } from "react";
import {
  getPersistedConsent,
  grantAllConsent,
  denyAllConsent,
  restoreConsentOnLoad,
} from "../utils/consentMode";

type ConsentDecision = "granted" | "denied";

interface UseConsentReturn {
  showBanner: boolean;
  consentDecision: ConsentDecision | null;
  handleAccept: () => void;
  handleDecline: () => void;
}

export function useConsent(): UseConsentReturn {
  const [showBanner, setShowBanner] = useState(false);
  const [consentDecision, setConsentDecision] =
    useState<ConsentDecision | null>(null);

  useEffect(() => {
    restoreConsentOnLoad();

    const persisted = getPersistedConsent();
    if (persisted) {
      setConsentDecision(persisted.decision);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    grantAllConsent();
    setConsentDecision("granted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    denyAllConsent();
    setConsentDecision("denied");
    setShowBanner(false);
  };

  return { showBanner, consentDecision, handleAccept, handleDecline };
}
