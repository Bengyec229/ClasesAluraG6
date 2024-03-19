const areatxt = document.getElementById('txt');
const btnEnc = document.getElementById('btn_encript');
const btnDes = document.getElementById('btns_desen');
const btnCop = document.getElementById('btnCopiar');
const Res = document.getElementById('res');
const muneco = document.getElementById('muneco');
const msjinfo = document.getElementById('msjinfo');


// e -> enter
// o -> ober
// i -> imer
// a -> ai
// u -> ufat

let entrada = [
    ["e", "enter"], ["o", "ober"], ["i", "imer"], ["a", "ai"], ["u", "ufat"]
];

btnEnc.addEventListener('click', () => {
    const texto = areatxt.value.toLocaleLowerCase()

    function encript(texto) {
        for (let i = 0; i < entrada.length; i++) {
            if (texto.includes(entrada[i][0])) {
                texto = texto.replaceAll(entrada[i][0], entrada[i][1]);
            }
        }
        return texto;
    }
    Res.innerHTML = encript(texto);
    muneco.style.display = "none";
    msjinfo.style.display = "none";
    btnCop.style.display = "block";
})

btnDes.addEventListener('click', () => {
    const texto = areatxt.value.toLocaleLowerCase()

    function encript(texto) {
        for (let i = 0; i < entrada.length; i++) {
            if (texto.includes(entrada[i][1])) {
                texto = texto.replaceAll(entrada[i][1], entrada[i][0]);
            }
        }
        return texto;
    }
    Res.innerHTML = encript(texto);
    muneco.style.display = "none";
    msjinfo.style.display = "none";
    btnCop.style.display = "block";

})

btnCop.addEventListener('click', () => {

    var texto = Res.textContent;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);    
})