document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Game 1',
            price: 'R$ 99,99',
            imgSrc: 'https://sm.ign.com/t/ign_br/game/c/call-of-du/call-of-duty-modern-warfare-2-1_66u3.300.jpg',
        },
        {
            name: 'Game 2',
            price: 'R$ 149,90',
            imgSrc: 'https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
        },
        {
            name: 'Game 3',
            price: 'R$ 79,99',
            imgSrc: 'https://sm.ign.com/t/ign_br/gallery/t/the-10-bes/the-10-best-open-world-games_5ksj.600.jpg',
        },
        {
            name: 'Game 4',
            price: 'R$ 89,90',
            imgSrc: 'https://s2-ge.glbimg.com/GkaeBFLAOEpD9IdbjnnXz2pdmb8=/0x0:600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Z/V/BA0551QUqnAA6RguQ97w/ea-sports-fc-24-capa.png',
        },
        {
            name: 'Game 5',
            price: 'R$ 125,40',
            imgSrc: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000053757/82dc03395aaad04fe6112d41a1a716b8398852687ff919dd2fa36f81d75ac0b2',
        },
        {
            name: 'Game 6',
            price: 'R$ 1,200,00',
            imgSrc: 'https://www.mobilegamer.com.br/wp-content/uploads/2016/04/counter-strike-1.6-android.jpg',
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
