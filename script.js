





// 1 - Search Box
let searchBox = document.querySelector('.search-box');
let lupa = document.querySelector('.lupa-search');
let closeButton = document.querySelector('.close-button');
// 1
lupa.addEventListener('click', ()=> {
    searchBox.classList.add('ativar');
})

closeButton.addEventListener('click', ()=> {
    searchBox.classList.remove('ativar');
})

// 2 - Menu Mobile
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
// 2
menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
})

// 4.0 - Carrinho
let selecProduct = document.getElementById('selec-prods');
let cart = [];
// 4.1 - Adicionar ao Carrinho
let addCart = document.querySelector(".modal-button-price");

// 3 - Modal Products
let products = document.querySelectorAll(".product");
const modal = document.querySelector("dialog");
// 3
products.forEach(function(element) {
    
    element.addEventListener('click', () => {

        

        let modalProduct = document.getElementById('modal-product');
        let modalButtonPrice = document.getElementById('modal-right-price');

        let modalProductImg = modalProduct.getElementsByTagName('img')[0];
        modalProductImg.setAttribute("src", element.getElementsByTagName('img')[0].src);

        let modalProductTitle = modalProduct.getElementsByClassName('product-name')[0];
        modalProductTitle.textContent = element.getElementsByClassName('product-name')[0].textContent;

        let modalProductRate = modalProduct.getElementsByClassName('rate')[0];
        modalProductRate.textContent = element.getElementsByClassName('rate')[0].textContent;

        let modalProductPrice = modalProduct.getElementsByClassName('product-price')[0];
        modalProductPrice.textContent = element.getElementsByClassName('product-price')[0].textContent;
        

        // Botão com preço*qt -> addCart

        let printButtonPrice = modalButtonPrice.getElementsByClassName('modal-button-price')[0];
        

        let infoButtonPrice = element.getElementsByClassName('product-price')[0].lastChild;
        let aux = infoButtonPrice.textContent;
        let auxButtonPrice = parseFloat(aux.replace('.',''));
        
        let qtItens = 1;
        
        function buttonPrice () {
            
            let totalButtonPrice = auxButtonPrice * qtItens;
            console.log(totalButtonPrice);

            printButtonPrice.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              }).format(totalButtonPrice);
              
        }

        if (qtItens == 1) {
            document.getElementById('qt').textContent = qtItens;
            printButtonPrice.textContent = auxButtonPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              });
        }
        // + Quantidade
        const add = document.querySelector("addItens");

        addItens.addEventListener('click', () => {

            qtItens++;
            document.getElementById('qt').textContent = qtItens;
            buttonPrice ();

        })
        // - Quantidade
        const sub = document.querySelector("subItens");
        
        subItens.addEventListener('click', () => {

            if (qtItens >= 2) {
                qtItens = qtItens - 1;
                document.getElementById('qt').textContent = qtItens;
            }
            buttonPrice ();
            
        })

         // 4.0

        addCart.addEventListener('click', () => {
        
            qtItens = 1;
            modal.close();
        })

    // 
        const closeModal = document.querySelector("dialog button");
    
        closeModal.addEventListener('click', () => {

            qtItens = 1;
            modal.close();
        })

            modal.showModal();
        })
    
    
})


//5 - Arrows pág. Sobre
const topButton = document.getElementById("top-click");

// 5
topButton.addEventListener('click', () => {
    const topBox = document.getElementById("top-box");
    const topContent = topBox.getElementsByTagName('p')[0];

    if (topContent.style.display === "none") {
        topContent.style.display = "block";
    } else {
        topContent.style.display = "none";
    }
})


const rightButton = document.getElementById("right-click");

rightButton.addEventListener('click', () => {
    const rightLogo = document.getElementById("content-right-box");
    const rightContent = rightLogo.querySelectorAll('img');
    console.log(rightContent);

    rightContent.forEach(function(rightContent){
        if (rightContent.style.visibility === "hidden") {
            rightContent.style.visibility = "visible";
        } else {
            rightContent.style.visibility = "hidden";
        }
    })
    });


const bottomButton = document.getElementById("bottom-click");

bottomButton.addEventListener('click', () => {
    const bottomBox = document.getElementById("bottom-box");
    const bottomContent = bottomBox.getElementsByTagName('p')[0];
    if (bottomContent.style.display === "none") {
        bottomContent.style.display = "block";
    } else {
        bottomContent.style.display = "none";
    }
})
