async function fetchWidgetData() {
    const url = "https://widgets.tipply.pl/LARGEST_MESSAGES/31b78ab5-3c3e-4edf-9c83-74f63b7cd936/75fa68e6-9d38-4c6d-a7b5-03e2b4787dab";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        displayData(data);
    } catch (error) {
        console.error("Could not fetch the data: ", error);
    }
}

function displayData(data) {
    const container = document.getElementById('widget-container');
    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
            <span class="order">${item.order}.</span>
            <span class="nickname">${item.nickname}</span>
            <span class="colon">:</span>
            <span class="price">${item.price} zł</span>
        `;
        container.appendChild(listItem);
    });
}

fetchWidgetData();
