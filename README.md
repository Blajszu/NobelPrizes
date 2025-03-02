# NobelPrizes      

## Instrukcja uruchomienia
Przed rozpoczęciem instalacji upewnij się, że w twoim środowisku zainstalowane są:     

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (zawarte w Node.js)


## Instrukcja Instalacji Aplikacji      
    
1. **Sklonuj repozytorium GitHub**  
W folderze otwórz terminal i użyj polecenia:

   ```javascript
   git clone https://github.com/Massny/BitWeb.git
   ```

2. **Przejdź do katalogu projektu:**  
Używając terminala przejdź do nowo utworzonego katalogu:

   ```javascript
   cd BitWeb
   ```

3. **Zainstaluj wymagane pakiety:**  
Wykonaj poniższe polecenie, aby dokończyć instalację apliakcji:

   ```javascript
   npm install
   ```
  
## Uruchomienie aplikacji  

Po instalacji możesz uruchomić aplikację lokalnie w trybie developerskim używając polecenia:

   ```javascript
   npm run dev 
   ```

Po jego wykonaniu zostanie uruchomiony serwer deweloperski. Teraz wystarczy, że w przeglądarce odwiedzisz adres http://localhost:5173

W folderze z projektem przesyłam również zbuildowaną wersję aplikacji, którą możesz uruchomić używając poleceń (znajdując się w folderze projektu):

   ```javascript
   npm install -g serve
   serve -s dist
   ```

Aplikacja będzie dostępna pod adresem, który pojawi się w terminalu.
