// nexilot-house.js

function changeVariant(variant) {
    const productTitle = document.getElementById("productTitle");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");
    const selectedVariantText = document.getElementById("selectedVariantText");

    const variants = {
        mini: {
            title: "Nexilot House Mini 2x3m",
            price: "16 500 €",
            description: `<h2>Popis</h2><p><strong>Nexilot House Mini:</strong> Ponúka útulné, moderné a lacné ubytovanie.
            <span id="moreText" class="more-text"> Okrem moderného dizajnu a kvalitných materiálov ponúka aj energetickú úspornosť a udržateľnosť. Ideálny pre páry, jednotlivcov, alebo ako víkendový dom pre celú rodinu. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a domček je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Domček má moderný a minimalistický dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        standard: {
            title: "Nexilot House Standard",
            price: "29 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot House Standard:</strong> Ideálny pre rodiny s deťmi, ponúka priestrannejšie ubytovanie.
            <span id="moreText" class="more-text"> Vyznačuje sa moderným dizajnom a kvalitnými materiálmi, energetickou úspornosťou a udržateľnosťou. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a domček je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Moderný a minimalistický dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        premium: {
            title: "Nexilot House Premium",
            price: "39 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot House Premium:</strong> Luxusné a priestranné ubytovanie pre náročných klientov.
            <span id="moreText" class="more-text"> Ponúka moderný dizajn a kvalitné materiály, energetickú úspornosť a udržateľnosť. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a domček je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Luxusný a moderný dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        custom: {
            title: "Nexilot House Custom",
            price: "49 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot House Custom:</strong> Plne prispôsobiteľné ubytovanie podľa vašich predstáv.
            <span id="moreText" class="more-text"> Ponúka moderný dizajn a kvalitné materiály, energetickú úspornosť a udržateľnosť. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a domček je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Plne prispôsobiteľný dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        }
    };

    const selectedVariant = variants[variant];
    productTitle.innerHTML = selectedVariant.title;
    productPrice.innerHTML = selectedVariant.price;
    productDescription.innerHTML = selectedVariant.description;
    selectedVariantText.innerHTML = selectedVariant.title;

    document.querySelectorAll('.variant-selection img').forEach(img => img.classList.remove('selected'));
    document.getElementById(`variant-${variant}`).classList.add('selected');
}
