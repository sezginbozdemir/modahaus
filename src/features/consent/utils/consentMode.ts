type ConsentValue = "granted" | "denied";
type ConsentType =
  | "ad_storage"
  | "ad_user_data"
  | "ad_personalization"
  | "analytics_storage"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage";

interface PersistedConsent {
  decision: ConsentValue;
  timestamp: number;
}

type ConsentPayload = Record<ConsentType, ConsentValue>;

const STORAGE_KEY = "gcm_v2_consent";

export const CONSENT_TYPES: ConsentType[] = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
  "functionality_storage",
  "personalization_storage",
  "security_storage",
];

// Extend Window to include gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

function updateGtagConsent(
  value: ConsentValue,
  types: ConsentType[] = CONSENT_TYPES,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;

  const update = Object.fromEntries(
    types.map((t) => [t, value]),
  ) as ConsentPayload;
  window.gtag("consent", "update", update);
}

export function grantAllConsent(): void {
  const payload = Object.fromEntries(
    CONSENT_TYPES.map((t) => [t, "granted"]),
  ) as ConsentPayload;
  payload.security_storage = "granted";

  window.gtag?.("consent", "update", payload);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      decision: "granted",
      timestamp: Date.now(),
    } satisfies PersistedConsent),
  );
}

export function denyAllConsent(): void {
  const payload = Object.fromEntries(
    CONSENT_TYPES.map((t) => [t, "denied"]),
  ) as ConsentPayload;
  payload.security_storage = "granted";

  window.gtag?.("consent", "update", payload);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      decision: "denied",
      timestamp: Date.now(),
    } satisfies PersistedConsent),
  );
}

export function getPersistedConsent(): PersistedConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedConsent;
  } catch {
    return null;
  }
}

export function restoreConsentOnLoad(): void {
  const persisted = getPersistedConsent();
  if (!persisted) return;

  const value: ConsentValue =
    persisted.decision === "granted" ? "granted" : "denied";
  updateGtagConsent(value);
}
