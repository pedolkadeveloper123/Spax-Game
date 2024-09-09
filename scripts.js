document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Game 1',
            price: 'R$ 99,90',
            imgSrc: 'https://sm.ign.com/t/ign_br/game/c/call-of-du/call-of-duty-modern-warfare-2-1_66u3.300.jpg',
        },
        {
            name: 'Game 2',
            price: 'R$ 149,90',
            imgSrc: 'https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
        },
        {
            name: 'Game 3',
            price: 'R$ 79,90',
            imgSrc: 'https://sm.ign.com/t/ign_br/gallery/t/the-10-bes/the-10-best-open-world-games_5ksj.600.jpg',
        },
        // Adicione mais produtos conforme necessário
    ];

    const productList = document.getElementById('productList');
    
    // Função para criar um card de produto
    const createProductCard = (product) => {
        const card = document.createElement('div');
        card.className = 'product';

        card.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Adicionar ao Carrinho</button>
            </div>
        `;

        return card;
    };

    // Inserir produtos na página
    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });

    // Função de pesquisa
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product');

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
