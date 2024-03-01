// Funkcja do wyodrębnienia danych z elementów
function extractDonationData() {
    // Znajdź wszystkie elementy pasujące do klasy
    const donationItems = document.querySelectorAll('.ListItemWrapper-sc-1ode8mk-0');
    
    // Przechodzenie przez wszystkie znalezione elementy
    const donations = Array.from(donationItems).map(item => {
        // Wyodrębnianie danych
        const orderNumber = item.querySelector('[data-element="counter"]').innerText;
        const username = item.querySelector('[data-element="nickname"]').innerText;
        const amount = item.querySelector('[data-element="price"]').innerText;
        
        // Zwracanie wyodrębnionych danych
        return { orderNumber, username, amount };
    });
    
    // Wyświetlenie danych w konsoli
    console.log(donations);
}

// Wywołanie funkcji
extractDonationData();
