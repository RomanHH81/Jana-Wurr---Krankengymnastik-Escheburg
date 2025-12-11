"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  startTransition,
} from "react";

type ConsentDecision = "all" | "necessary";
type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentState = {
  decision: ConsentDecision;
  categories: ConsentCategories;
};

type CookieConsentContextValue = {
  consent: ConsentState | null;
  ready: boolean;
  bannerVisible: boolean;
  canUseOptional: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  openBanner: () => void;
};

const STORAGE_KEY = "cookie-consent-choice";

const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

function parseStoredConsent(value: string | null): ConsentState | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Partial<ConsentState>;
    if (
      parsed &&
      (parsed.decision === "all" || parsed.decision === "necessary") &&
      parsed.categories &&
      typeof parsed.categories === "object"
    ) {
      return {
        decision: parsed.decision,
        categories: {
          ...DEFAULT_CATEGORIES,
          ...parsed.categories,
        },
      };
    }
  } catch {
    return null;
  }
  return null;
}

function buildConsent(decision: ConsentDecision): ConsentState {
  const categories =
    decision === "all"
      ? Object.fromEntries(
          Object.keys(DEFAULT_CATEGORIES).map((key) => [key, true]),
        )
      : { ...DEFAULT_CATEGORIES };

  return {
    decision,
    categories: categories as ConsentCategories,
  };
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const stored = parseStoredConsent(localStorage.getItem(STORAGE_KEY));
      if (stored) {
        setConsent(stored);
        setBannerVisible(false);
      } else {
        setBannerVisible(true);
      }
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: consent }),
    );
  }, [consent, ready]);

  const persist = (decision: ConsentDecision) => {
    const nextConsent = buildConsent(decision);
    setConsent(nextConsent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent));
    setBannerVisible(false);
  };

  const openBanner = () => setBannerVisible(true);

  const value = useMemo(
    () => ({
      consent,
      ready,
      bannerVisible,
      canUseOptional: consent?.decision === "all",
      acceptAll: () => persist("all"),
      acceptNecessary: () => persist("necessary"),
      openBanner,
    }),
    [bannerVisible, consent, ready],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return ctx;
}
