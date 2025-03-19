function convertNumber() {
    let input = document.getElementById("inputNumber").value.trim();
    let fromBase = parseInt(document.getElementById("fromBase").value);
    let toBase = parseInt(document.getElementById("toBase").value);

    if (input === "") {
        alert("Kérlek, adj meg egy számot!");
        return;
    }

    // Próbáljuk konvertálni a számot a megadott forrás számrendszerből
    let decimalValue;
    try {
        decimalValue = parseInt(input, fromBase);
        if (isNaN(decimalValue)) {
            throw new Error("Érvénytelen bemenet!");
        }
    } catch (error) {
        alert("Hibás számformátum a megadott számrendszerben!");
        return;
    }

    // Konvertálás a cél számrendszerbe
    let result = decimalValue.toString(toBase).toUpperCase();

    // Kiírjuk az eredményt
    document.getElementById("result").textContent = result;
}

function copyToClipboard() {
    let resultText = document.getElementById("result").textContent;
    if (resultText === "Eredmény itt jelenik meg" || resultText === "") {
        alert("Nincs mit másolni!");
        return;
    }

    navigator.clipboard.writeText(resultText)
        .then(() => alert("Eredmény másolva!"))
        .catch(err => alert("Másolás sikertelen!"));
}

function ellenoriz() {
    let helyes_valaszok = {
        "kerdes1": "b",
        "kerdes2": "b",
        "kerdes3": "c",
        "kerdes4": "b",
        "kerdes5": "a",
        "kerdes6": "a",
        "kerdes7": "c",
        "kerdes8": "d",
        "kerdes9": "d",
        "kerdes10": "b"
    };

    for (let kerdes in helyes_valaszok) {
        let valaszok = document.getElementsByName(kerdes);
        let helyes = helyes_valaszok[kerdes];
        let hibasUzenet = document.getElementById(kerdes + "_hiba");

        let valasztott = false;
        let helyesValasz = false;

        for (let valasz of valaszok) {
            if (valasz.checked) {
                valasztott = true;
                if (valasz.value === helyes) {
                    helyesValasz = true;
                }
            }
        }

        if (!valasztott) {
            hibasUzenet.textContent = "Üres válasz!";
        } else if (!helyesValasz) {
            hibasUzenet.textContent = "Hibás válasz!";
        } else {
            hibasUzenet.textContent = "A válasz helyes";
        }
    }
}

function ellenoriz1() {
    let helyes_valaszok = {
        "kerdes1": "a",
        "kerdes2": "d",
        "kerdes3": "a",
        "kerdes4": "c",
        "kerdes5": "b",
        "kerdes6": "b",
        "kerdes7": "d",
        "kerdes8": "b",
        "kerdes9": "a",
        "kerdes10": "b"
    };

    for (let kerdes in helyes_valaszok) {
        let valaszok = document.getElementsByName(kerdes);
        let helyes = helyes_valaszok[kerdes];
        let hibasUzenet = document.getElementById(kerdes + "_hiba");

        let valasztott = false;
        let helyesValasz = false;

        for (let valasz of valaszok) {
            if (valasz.checked) {
                valasztott = true;
                if (valasz.value === helyes) {
                    helyesValasz = true;
                }
            }
        }

        if (!valasztott) {
            hibasUzenet.textContent = "Üres válasz!";
        } else if (!helyesValasz) {
            hibasUzenet.textContent = "Hibás válasz!";
        } else {
            hibasUzenet.textContent = "A válasz helyes";
        }
    }
}
function ellenoriz2() {
    let helyes_valaszok = {
        "kerdes1": "d",
        "kerdes2": "a",
        "kerdes3": "b",
        "kerdes4": "a",
        "kerdes5": "b",
        "kerdes6": "c",
        "kerdes7": "a",
        "kerdes8": "a",
        "kerdes9": "b",
        "kerdes10": "a"
    };

    for (let kerdes in helyes_valaszok) {
        let valaszok = document.getElementsByName(kerdes);
        let helyes = helyes_valaszok[kerdes];
        let hibasUzenet = document.getElementById(kerdes + "_hiba");

        let valasztott = false;
        let helyesValasz = false;

        for (let valasz of valaszok) {
            if (valasz.checked) {
                valasztott = true;
                if (valasz.value === helyes) {
                    helyesValasz = true;
                }
            }
        }

        if (!valasztott) {
            hibasUzenet.textContent = "Üres válasz!";
        } else if (!helyesValasz) {
            hibasUzenet.textContent = "Hibás válasz!";
        } else {
            hibasUzenet.textContent = "A válasz helyes";
        }
    }
}