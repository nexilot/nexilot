// nexilot-office.js

function changeVariant(variant) {
    const productTitle = document.getElementById("productTitle");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");
    const selectedVariantText = document.getElementById("selectedVariantText");

    const variants = {
        mini: {
            title: "Nexilot Office Mini",
            price: "19 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot Office Mini:</strong> Ponúka útulné, moderné a lacné pracovné prostredie.
            <span id="moreText" class="more-text"> Okrem moderného dizajnu a kvalitných materiálov ponúka aj energetickú úspornosť a udržateľnosť. Ideálny pre malé tímy alebo ako home office. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a priestor je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Pracovný priestor má moderný a minimalistický dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        standard: {
            title: "Nexilot Office Standard",
            price: "29 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot Office Standard:</strong> Ideálny pre stredné tímy, ponúka priestrannejšie pracovné prostredie.
            <span id="moreText" class="more-text"> Vyznačuje sa moderným dizajnom a kvalitnými materiálmi, energetickou úspornosťou a udržateľnosťou. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a priestor je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Moderný a minimalistický dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        premium: {
            title: "Nexilot Office Premium",
            price: "39 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot Office Premium:</strong> Luxusné a priestranné pracovné prostredie pre náročných klientov.
            <span id="moreText" class="more-text"> Ponúka moderný dizajn a kvalitné materiály, energetickú úspornosť a udržateľnosť. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a priestor je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
            <h3>Dizajn a Exteriér:</h3>
            <p>Luxusný a moderný dizajn s čistými líniami a elegantným vzhľadom. Exteriér je vyrobený z odolných materiálov, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>`
        },
        custom: {
            title: "Nexilot Office Custom",
            price: "49 970 €",
            description: `<h2>Popis</h2><p><strong>Nexilot Office Custom:</strong> Plne prispôsobiteľné pracovné prostredie podľa vašich predstáv.
            <span id="moreText" class="more-text"> Ponúka moderný dizajn a kvalitné materiály, energetickú úspornosť a udržateľnosť. S veľkými oknami a otvoreným priestorom prináša množstvo prirodzeného svetla a spojenie s prírodou. Montáž je rýchla a jednoduchá, a priestor je možné prispôsobiť individuálnym požiadavkám klienta.</span></p>
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
