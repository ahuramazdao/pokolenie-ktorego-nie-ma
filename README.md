# Pokolenie, którego nie ma — Raport o demografii w sporcie

Oficjalna strona lądowania (landing page) promująca pierwszy w Polsce raport analizujący wpływ głębokiego niżu demograficznego oraz starzenia się społeczeństwa na przyszłość i finansowanie klubów oraz akademii sportowych.

Strona została zoptymalizowana pod kątem szybkości ładowania, wydajności renderowania oraz zaawansowanego pozycjonowania (SEO/Open Graph/Schema.org).

* **Domena docelowa:** [https://raport.programydlaklubow.pl](https://raport.programydlaklubow.pl)
* **Autor raportu:** Piotr Bąk (Założyciel platformy Programy Dla Klubów)

---

## 🚀 Struktura Projektu

Repozytorium jest ustrukturyzowane w sposób umożliwiający bezpośrednią publikację na dowolnym hostingu statycznym (np. GitHub Pages, Vercel, Netlify, Firebase Hosting lub tradycyjny serwer FTP):

* **`index.html`** — Główna, w pełni responsywna strona lądowania z interaktywnymi wykresami SVG i efektami 3D (GSAP, ScrollTrigger).
* **`robots.txt`** — Instrukcje indeksowania dla robotów wyszukiwarek.
* **`sitemap.xml`** — Mapa witryny wskazująca na domenę produkcyjną.
* **Zasoby graficzne (w katalogu głównym):**
  * `okladka-A4.webp` — Okładka frontowa (wykorzystywana w widokach 3D).
  * `okladka-tyl.webp` — Tylna okładka (wykorzystywana w sekcji CTA).
  * `baner.webp` — Poziomy baner promocyjny zoptymalizowany pod kątem podglądu linków (Open Graph Image).
  * `piotr.jpg` — Zdjęcie autora.
  * `logo_red-favicon.png` — Ikona witryny.
* **`web/`** — Katalog deweloperski zawierający środowisko Next.js / TypeScript (wykorzystywany jako przestrzeń robocza i odizolowany od wdrożenia statycznego).

---

## 🛠️ Lokalny rozruch i testowanie

Aby uruchomić projekt na lokalnym komputerze z poprawnym działaniem skryptów (np. ładowanie fontów, śledzenie interakcji):

1. **Python 3:**
   Uruchom serwer w katalogu głównym projektu:
   ```bash
   python3 -m http.server 8080
   ```
   Strona będzie dostępna pod adresem: `http://localhost:8080`

2. **Npx Live-Server:**
   Jeśli wolisz automatyczne odświeżanie po zmianie kodu:
   ```bash
   npx live-server
   ```

> [!IMPORTANT]
> **Skrypt Easycart (popup koszyka):** popup płatności/zapisu Easycart (`popup.js`) ze względów bezpieczeństwa ma zablokowane renderowanie w ramkach na adresach lokalnych (`localhost`, `127.0.0.1`). Zacznie on w pełni działać natychmiast po wrzuceniu plików na domenę `programydlaklubow.pl` lub `raport.programydlaklubow.pl`.

---

## 📦 Publikacja na GitHub Pages

Jeśli chcesz serwować tę stronę bezpośrednio z GitHub Pages:
1. Utwórz nowe repozytorium na GitHubie i prześlij do niego te pliki.
2. Wejdź w ustawienia repozytorium (**Settings**) $\rightarrow$ zakładka **Pages**.
3. Jako źródło (**Source**) wybierz **Deploy from a branch**.
4. Wybierz gałąź (np. `main` lub `master`) i katalog `/` (root), a następnie kliknij **Save**.
5. W sekcji **Custom domain** możesz podpiąć swoją domenę `raport.programydlaklubow.pl`.
