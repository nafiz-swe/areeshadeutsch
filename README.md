# Areesha – German A1 & A2 (Android + Web)

Offline German learning app (React + TypeScript + Tailwind + Capacitor). Brand credit: **EuroZoom-Nafiz**. WhatsApp: +880 1737-226404.

- App ID: `com.eurozoom.areesha` · Version: set via `VERSION_NAME` / `VERSION_CODE` (CI uses the run number)
- All lessons, vocabulary, verbs, prepositions, quizzes and Goethe tips are bundled in `src/data/` – no server, no database.
- Progress, bookmarks, recent lessons and quiz results are saved on the device (`localStorage` inside the Android WebView).
- Fonts (Inter, Noto Nastaliq Urdu) are bundled, so Urdu renders right-to-left offline.

## Local commands

```bash
npm install
npm run dev            # web preview
npm run build          # production build → dist/
npm run cap:sync       # build + copy dist into the Android project
npm run android:debug  # needs JDK 17 + Android SDK
```

## Get the APK from GitHub (beginner steps)

1. **Create a repository**: github.com → New repository → name it `areesha` → Create (leave it empty).
2. **Get the code in**:
   - From Lovable: Project → GitHub → *Connect project* → choose the repo (this syncs everything, including `android/` and `.github/`).
   - Or manually: unzip this project, then in a terminal inside it run
     `git init && git add -A && git commit -m "Areesha" && git branch -M main && git remote add origin https://github.com/YOUR-NAME/areesha.git && git push -u origin main`
3. Make sure the repo contains `android/`, `capacitor.config.ts` and `.github/workflows/android-apk.yml`.
4. Open the repo → **Actions** tab → *Build Android APK* → **Run workflow** (it also runs on every push to `main`).
5. Wait ~5–8 minutes. Open the green run → scroll to **Artifacts** → download **Areesha-debug-apk** (a ZIP).
6. Extract the ZIP on your phone/PC → you get `app-debug.apk`.
7. Copy to your phone, tap it, allow "Install unknown apps" for your file manager/browser when asked, then install.

Artifact path inside the build: `android/app/build/outputs/apk/debug/app-debug.apk`

> The debug APK is signed with Android's debug key. It is for testing and is **not** a production-signed release.

## Signed release APK

Android requires every release APK to be signed with your own private key. Whoever holds the key controls future updates – **back it up and never commit it**.

1. Create a keystore once (on your computer):
   ```bash
   keytool -genkeypair -v -keystore areesha-release.jks -alias areesha -keyalg RSA -keysize 2048 -validity 10000
   base64 -w 0 areesha-release.jks > keystore.base64     # macOS: base64 -i areesha-release.jks
   ```
2. GitHub repo → Settings → Secrets and variables → Actions → New repository secret:
   - `ANDROID_KEYSTORE_BASE64` – contents of `keystore.base64`
   - `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` (`areesha`), `ANDROID_KEY_PASSWORD`
3. Actions → **Release signed APK** → Run workflow (enter version name and a higher version code each time), or push a tag like `v1.0.0` to also publish a GitHub Release with the APK attached.
4. Delete `areesha-release.jks` and `keystore.base64` from any shared folder; keep a private backup.

Secrets are passed as environment variables, the keystore is decoded outside the repo and deleted after the job, and the workflow never prints them.

## Updating the app

Edit the content/UI, push to `main`, run the workflow again. Install over the old version: the debug build and a release build use different keys, so uninstall one before installing the other.

## Website hosting

The same project is a normal Vite site (`base: './'`, output in `dist/`), so it works with Lovable hosting. Domain setup is separate from the Android build; no domain is hard-coded.

## Notes

- Permissions: only `INTERNET` (needed for the WhatsApp link). Lessons work with no connection.
- Android back button: goes back one screen; on Home it exits the app.
- To change icon/splash: edit `assets/*.svg|png`, then `npx capacitor-assets generate --android --assetPath assets --iconBackgroundColor '#0ea5e9' --splashBackgroundColor '#0ea5e9'`.
