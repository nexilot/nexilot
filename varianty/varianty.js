// varianty.js

function changeVariant() {
    var selectBox = document.getElementById("variantSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var productTitle = document.getElementById("productTitle");
    var productPrice = document.getElementById("productPrice");
    var productDescription = document.getElementById("productDescription");

    switch (selectedValue) {
        case 'mini':
            productTitle.innerText = "Nexilot Mini";
            productPrice.innerText = "19 970 €";
            productDescription.innerHTML = `
                <h2>Popis</h2>
                <p><strong>Nexilot Mini:</strong> Ponúka útulné, moderné a lacné ubytovanie. 
                <span id="moreText" class="more-text">
                    Okrem moderného dizajnu a kvalitných materiálov ponúka aj energetickú úspornosť a udržateľnosť. Ideálny pre páry, jednotlivcov, alebo ako víkendový dom pre celú rodinu. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a domček je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
                <h3>Dizajn a Exteriér:</h3>
                <p>Domček má moderný a minimalistický dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`;
            break;
        case 'standard':
            productTitle.innerText = "Nexilot Standard";
            productPrice.innerText = "25 450 €";
            productDescription.innerHTML = `
                <h2>Popis</h2>
                <p><strong>Nexilot Standard:</strong> Kvalitné a prostorné ubytovanie s viac možnosťami prispôsobenia. 
                <span id="moreText" class="more-text">
                    Ideálne pre rodiny alebo tých, ktorí potrebujú viac priestoru a funkcionality. Ponúka štandardné vybavenie s možnosťou pridania rôznych doplnkov a úprav podľa potrieb zákazníka.</span></p>
                <h3>Dizajn a Exteriér:</h3>
                <p>Kombinuje funkčný dizajn s estetickými detailmi. Materiály sú vybrané pre ich trvanlivosť a odolnosť voči poveternostným podmienkam.</p>`;
            break;
        case 'premium':
            productTitle.innerText = "Nexilot Premium";
            productPrice.innerText = "32 890 €";
            productDescription.innerHTML = `
                <h2>Popis</h2>
                <p><strong>Nexilot Premium:</strong> Luxusné a štýlové ubytovanie pre tých, ktorí hľadajú vrcholné kvality a komfortu. 
                <span id="moreText" class="more-text">
                    Navrhnutý s dôrazom na detail a použitím najlepších materiálov, ktoré poskytujú najvyšší štandard. Ideálne pre náročnejších klientov, ktorí očakávajú exkluzivitu.</span></p>
                <h3>Dizajn a Exteriér:</h3>
                <p>Moderný dizajn so špičkovými materiálmi a technológiami. Exteriér je elegantný a odolný s minimálnou potrebou údržby.</p>`;
            break;
        case 'custom':
            productTitle.innerText = "Nexilot Custom";
            productPrice.innerText = "Cena na vyžiadanie";
            productDescription.innerHTML = `
                <h2>Popis</h2>
                <p><strong>Nexilot Custom:</strong> Možnosť úplne prispôsobiť domček podľa individuálnych požiadaviek zákazníka. 
                <span id="moreText" class="more-text">
                    Zabezpečuje maximálnu flexibilitu v dizajne, rozmeroch a vybavení. Každý detail je navrhnutý tak, aby zodpovedal presne tomu, čo si zákazník želá.</span></p>
                <h3>Dizajn a Exteriér:</h3>
                <p>Úplne individuálny prístup k dizajnu a materiálom, čo zabezpečuje jedinečný vzhľad a funkčnosť. Každý domček je vyrobený na mieru podľa osobitných požiadaviek.</p>`;
            break;
        default:
            break;
    }

    var selectedVariantText = document.getElementById("selectedVariantText");
    selectedVariantText.innerText = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1); // Kapitalizuje prvý znak
    var selectedVariant = document.getElementById("selectedVariant");
    selectedVariant.style.display = "block";
}
