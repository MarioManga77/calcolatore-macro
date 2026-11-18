function calcola() {

let sesso = document.getElementById("sesso").value;
let eta = parseFloat(document.getElementById("eta").value);
let peso = parseFloat(document.getElementById("peso").value);
let altezza = parseFloat(document.getElementById("altezza").value);
let attivita = parseFloat(document.getElementById("attivita").value);
let obiettivo = document.getElementById("obiettivo").value;

let bmr = 0;

if (sesso === "uomo") {
    bmr =
        88.362 +
        (13.397 * peso) +
        (4.799 * altezza) -
        (5.677 * eta);
} else {
    bmr =
        447.593 +
        (9.247 * peso) +
        (3.098 * altezza) -
        (4.330 * eta);
}

let tdee = bmr * attivita;

let target = tdee;

if (obiettivo === "dimagrimento") {
    target = tdee * 0.85;
}

if (obiettivo === "massa") {
    target = tdee * 1.10;
}

let proteineKg = parseFloat(
    document.getElementById("proteineKg").value
);

let grassiKg = parseFloat(
    document.getElementById("grassiKg").value
);

let proteine = peso * proteineKg;
let grassi = peso * grassiKg;

let kcalProteine = proteine * 4;
let kcalGrassi = grassi * 9;

let kcalCarboidrati =
    target - (kcalProteine + kcalGrassi);

let carboidrati = kcalCarboidrati / 4;

let percProteine =
    ((kcalProteine / target) * 100).toFixed(1);

let percGrassi =
    ((kcalGrassi / target) * 100).toFixed(1);

let percCarbo =
    ((kcalCarboidrati / target) * 100).toFixed(1);

document.getElementById("risultato").innerHTML = `
<h2>Risultato</h2>

<p><b>BMR:</b> ${Math.round(bmr)} kcal</p>

<p><b>TDEE:</b> ${Math.round(tdee)} kcal</p>

<p><b>Target:</b> ${Math.round(target)} kcal</p>

<hr>

<h3>Macronutrienti</h3>

<p>
<b>Proteine</b><br>
${Math.round(proteine)} g<br>
${Math.round(kcalProteine)} kcal<br>
${percProteine}%
</p>

<p>
<b>Grassi</b><br>
${Math.round(grassi)} g<br>
${Math.round(kcalGrassi)} kcal<br>
${percGrassi}%
</p>

<p>
<b>Carboidrati</b><br>
${Math.round(carboidrati)} g<br>
${Math.round(kcalCarboidrati)} kcal<br>
${percCarbo}%
</p>
`;
}