# Aplikacja Koszyka Zakupów

## Opis Aplikacji

Aplikacja Koszyka Zakupów umożliwiająca użytkownikom przeglądanie listy produktów, dodawanie ich do koszyka, zarządzanie zawartością koszyka oraz złożenie zamówienia. Aplikacja składa się z czterech stron:

1.  **Strona z Listą Produktów:** Wyświetla statyczną listę produktów pobieraną z pliku JSON (`src/data/products.json`). Każdy produkt posiada nazwę, cenę oraz przycisk "Dodaj do koszyka". Umożliwia przejście do strony koszyka zakupów.
2.  **Strona Koszyka Zakupów:** Wyświetla aktualnie dodane do koszyka przedmioty z ich nazwą, ilością i ceną. Użytkownicy mogą dodawać i usuwać przedmioty z koszyka, zmieniać ich ilość. Wyświetlana jest suma częściowa dla każdego przedmiotu oraz łączny koszt wszystkich przedmiotów. Dostępny jest przycisk do przejścia do podsumowania zamówienia oraz link do powrotu na stronę listy produktów.
3.  **Strona Podsumowania Zamówienia:** Prezentuje podsumowanie wybranych przedmiotów z ich ilościami, cenami jednostkowymi i sumami częściowymi. Wyświetla końcową łączną kwotę zamówienia. Zawiera przycisk "Złóż Zamówienie" przenoszący na oddzielną stronę potwierdzenia oraz link do powrotu do koszyka w celu dokonania zmian.
4.  **Strona Potwierdzenia Zamówienia:** Oddzielna strona HTML (`public/order-confirmation.html`) wyświetlająca komunikat o sukcesie złożenia zamówienia oraz podsumowanie zamówienia (produkty, ilości, łączny koszt). Umożliwia powrót do strony z listą produktów i złożenia nowego zamówienia.

## Podejście i Założenia

* **Statyczna Lista Produktów:** Lista produktów jest zdefiniowana w statycznym pliku JSON. 
* **Zarządzanie Stanem:** Do zarządzania stanem aplikacji (głównie zawartością koszyka) używany jest hook `useState` w komponencie `App`. Stan koszyka jest przekazywany jako props do odpowiednich komponentów (`ProductList`, `ShoppingCart`, `OrderSummary`).
* **Routing:** Do nawigacji między różnymi stronami aplikacji (Lista Produktów, Koszyk, Podsumowanie) używany jest `react-router-dom`.
* **Oddzielna Strona Potwierdzenia:** Zgodnie z wymaganiami, strona potwierdzenia zamówienia jest oddzielnym plikiem HTML, co wymusza pełne przeładowanie strony i przekazywanie danych zamówienia poprzez `localStorage`.
* **Przechowywanie Danych Zamówienia:** Dane zamówienia przed przejściem na stronę potwierdzenia są tymczasowo przechowywane w `localStorage`. Po wyświetleniu na stronie potwierdzenia są usuwane.
* **Czyszczenie Koszyka:** Po powrocie ze strony potwierdzenia na stronę listy produktów, koszyk jest czyszczony poprzez odczytanie parametru `clearCart` i zaktualizowanie stanu koszyka w `App`.
* **Typowanie:** W projekcie używany jest TypeScript. Wszystkie interfejsy typów znajdują się w pliku `src/types.ts`.
* **Formatowanie Ceny:** Funkcja `formatPrice` jest używana do wyświetlania cen w odpowiednim formacie (zł z dwoma miejscami po przecinku).
* **Styling:** Podstawowe style CSS dla statycznej strony `order-confirmation.html` znajdują się w oddzielnym pliku `public/order-confirmation.css`. Style CSS dla komponentów react znajdują się w `main.css`.
* **Backend:** Aplikacja w obecnej formie nie implementuje żadnej logiki backendowej do obsługi zamówień. Przycisk "Złóż Zamówienie" jedynie przenosi na statyczną stronę potwierdzenia. Stan koszyka nie jest utrwalany po odświeżeniu strony (z wyjątkiem krótkotrwałego przechowywania w `localStorage` na potrzeby strony potwierdzenia).

## Instrukcje Uruchomienia

1.  **Pobierz repozytorium.**
2.    **Przejdź do katalogu projektu** w terminalu.
3.  **Zainstaluj zależności:**
    ```bash
    npm install
    # lub
    yarn install
    ```
    Upewnij się, że masz zainstalowany Node.js i npm lub Yarn.
4.  **Uruchom aplikację w trybie deweloperskim:**
    ```bash
    npm run dev
    # lub
    yarn start
    ```
    Spowoduje to uruchomienie serwera deweloperskiego i otwarcie aplikacji w Twojej przeglądarce.