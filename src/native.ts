import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

export const WHATSAPP_NUMBER = '8801737226404';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalamu alaikum, I am using the Areesha German app.')}`;

export const isNative = Capacitor.isNativePlatform();

export async function initNative() {
  if (!isNative) return;
  try {
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: '#0ea5e9' });
  } catch { /* ignore */ }
  try { await SplashScreen.hide(); } catch { /* ignore */ }
}

/** Registers Android hardware back button. handler returns true if it consumed the press. */
export function registerBackButton(handler: () => boolean): () => void {
  if (!isNative) return () => {};
  const sub = CapApp.addListener('backButton', () => {
    if (!handler()) CapApp.exitApp();
  });
  return () => { sub.then((s) => s.remove()); };
}

export function openWhatsApp() {
  // Opens WhatsApp app (or browser fallback). Requires internet + WhatsApp.
  window.open(WHATSAPP_URL, '_blank');
}
