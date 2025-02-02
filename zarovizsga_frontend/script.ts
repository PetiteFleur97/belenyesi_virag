// 1. Osszes oszto meghatarozasa
function osszesOszto(szam: number): number[] {
    let osztok: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

// 2. Paros szamok darabszamanak meghatarozasa
function parosDarab(szamok: number[]): number {
    return szamok.filter(szam => szam % 2 === 0).length;
}

// 3. Fuggvenyhivas palindrom ellenorzese
function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    let eredetiSzoveg: string = fuggveny().replace(/\s/g, "").toLowerCase();
    let forditottSzoveg: string = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
}

// Teszteleshez szukseges HTML-ben importalni kell a JS fajlt.
