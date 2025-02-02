// 1. Osszes oszto meghatarozasa
function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
// 2. Paros szamok darabszamanak meghatarozasa
function parosDarab(szamok) {
    return szamok.filter(function (szam) { return szam % 2 === 0; }).length;
}
// 3. Fuggvenyhivas palindrom ellenorzese
function fuggvenyhivasPalindrom(fuggveny) {
    var eredetiSzoveg = fuggveny().replace(/\s/g, "").toLowerCase();
    var forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
}

