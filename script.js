function searchItems() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = Array.from(document.querySelectorAll('.card'));

  cards
    .map(card => ({
      element: card,
      name: card.getAttribute('data-name')
    }))
    .forEach(({ element, name }) => {
      element.style.display = 'none';
    });

  cards
    .filter(card => card.getAttribute('data-name').includes(input))
    .forEach(card => {
      card.style.display = 'block';
    });
} 
