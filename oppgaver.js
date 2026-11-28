// =====================================================
// Oppgaver: Funksjoner
//
//   function pluss(a, b) {   // a og b er parametre (verdier inn)
//     return a + b;          // return sender svaret ut
//   }
//   pluss(2, 3);             // kaller funksjonen -> 5
//
//   Se README.md for mer informasjon om oppgaven.
// Der det ikke er oppgitt variabel, lager du egen. Eks temperatur. 
// =====================================================

// #####################################################
// DEL 1: VÆRAPPEN (oppgave 1–9)
// #####################################################

// Data: temperaturer i Tromsø en uke i mørketida (grader celsius).
// Du skal bruke arrayen "temperaturer" i oppgavene som handler om temperatur.
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];


// ---------- GRØNN ----------

// Oppgave 1: Når en spiller logger inn på Minecraft-serveren, skal hun få en hilsen.
//     hilsen("Ola") -> "Hei, Ola!"
//     Tips: bruk en template literal: `Hei, ${navn}!`
function hilsen(navn) {
  return `Hei, ${navn}!`;
}
console.log("\nOppgave 1:");
console.log(hilsen("Ola"));

// Oppgave 2: Hvor mange blokker trengs til gulvet i en hytte på 4 x 5 blokker?
//     Returner arealet av et rektangel (bredde ganger høyde)
function rektangelAreal(bredde, hoyde) {
  return bredde * hoyde;
}
console.log("\nOppgave 2:");
console.log(rektangelAreal(4, 5));

// Oppgave 3: En venn i USA spør på Discord hvor kaldt det er i Tromsø.
//     Temperaturen er -6 grader C. 
//     Gjør om celsius til fahrenheit.  Formel: F = C * 9/5 + 32
//     (Den motsatte formelen er C = (F - 32) * 5/9.)
function celsiusTilFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}
console.log("\nOppgave 3:");
console.log(celsiusTilFahrenheit(-6));

// ---------- GUL ----------

// Oppgave 4: Værappen skal regne ut ukas gjennomsnitt. Første steg: summen.
//     Returner summen av alle tallene i en array. Bruk en for-løkke.
function sum(tall) {
  let sum = 0;
  for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
  }
  return sum;
}
console.log("\nOppgave 4:");
console.log(sum(temperaturer));

// Oppgave 5: Returner gjennomsnittet av tallene. Gjenbruk sum()!
function gjennomsnitt(tall) {
  return sum(tall) / tall.length;
}
console.log("\nOppgave 5:");
console.log(gjennomsnitt(temperaturer));

// Oppgave 6: Hvor mange dager med kuldegrader var det? (Trenger du vinterdekk?)
//     Returner HVOR MANGE tall som er under 0. Bruk for-løkke + if.
function antallUnderNull(tall) {
  let antall = 0;
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 0) {
      antall++;
    }
  }
  return antall;
}
console.log("\nOppgave 6:");
console.log(antallUnderNull(temperaturer));

// ---------- RØD ----------

// Oppgave 7: Hva var den varmeste dagen? Samme logikk som en highscore-liste.
//     Returner det største tallet i arrayen – UTEN Math.max og UTEN .sort()
function storste(tall) {
  let høyeste = tall[0];
  for (let i = 1; i < tall.length; i++) {
    if (høyeste < tall[i]) {
      høyeste = tall[i];
    }
  }
  return høyeste;
}
console.log("\nOppgave 7:");
console.log(storste(temperaturer));

// Oppgave 8: Returner en NY array med bare kuldegradene (tall under 0).
//     Den opprinnelige arrayen skal ikke endres.
function bareKuldegrader(tall) {
  let cool_array = [];
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 0) {
      cool_array.push(tall[i]);
    }
  }
  return cool_array;
}
console.log("\nOppgave 8:");
console.log(bareKuldegrader(temperaturer));

// Oppgave 9: Sorter tallene fra lavest til høyest – UTEN .sort().
//     Lag din egen sorteringsalgoritme (f.eks. boblesortering).
//     Returner en NY array, ikke endre den opprinnelige.
function sorterStigende(tall) {
  // boble sort
  let sortert_array = tall;
  let sortert = false;
  let riktig_rekefølge_array = [];
  for (let i = 0; i < sortert_array.length - 1; i++){
    riktig_rekefølge_array.push(false);
  }
  
  let temp;
  while (sortert == false) {

    //console.log("\n",sortert_array);
    //console.log(riktig_rekefølge_array);

    sortert = true;
    for (let i = 0; i < riktig_rekefølge_array.length; i++){
      if (riktig_rekefølge_array[i] == false){
        sortert = false;
      }
    }
    if (sortert == true) {
      //console.log("brake bake")
      break;
    }
    
    for (let i = 0; i < riktig_rekefølge_array.length; i++){
      
      if (sortert_array[i] < sortert_array[i+1]){
        riktig_rekefølge_array[i] = true;
      } else {
        temp = sortert_array[i];
        sortert_array[i] = sortert_array[i+1];
        sortert_array[i+1] = temp;
        riktig_rekefølge_array[i] = false;
      }

    }

  }

  return sortert_array;
}
console.log("\nOppgave 9:");
console.log(sorterStigende(temperaturer));


// #####################################################
// DEL 2: SPILL (oppgave 10–14)
// #####################################################

// Data: poeng per runde i en turnering
const runder = [120, 85, 140, 95, 110];


// ---------- GRØNN ----------

// Oppgave 10: Du lager en ny bruker i WoW Forever, og vi ønsker årstallet spilleren er født
// skal inkluderes i brukernavnet. Vi får da: Gamertag = navn + tall.
//     lagGamertag("Ola", 99) -> "Ola99"
function lagGamertag(navn, tall) {
  return navn + tall;
}
console.log("\nOppgave 10:");
console.log(lagGamertag("Ola", 99));

// Oppgave 11: Er spilleren gammel nok til spillet? Returner true eller false.
//     erGammelNok(16, 18) -> false
//     erGammelNok(18, 18) -> true
//     Tips: return alder >= grense;  (sammenligningen gir true/false)
function erGammelNok(alder, grense) {
  if (alder < grense) {
    return false;
  } else {
    return true;
  }
}
console.log("\nOppgave 11:");
console.log(erGammelNok(16,18));
console.log(erGammelNok(18,18));

// Oppgave 12: BreiLAN innfører billettpriser. VG1 betaler 100 kr og resten av skolen 150 kr.
//     Lag en funksjon som sjekker om eleven går på VG1 og gir riktig pris.
//     billettpris(true)  -> 100
//     billettpris(false) -> 150
//     Tips: bruk if og else.
function billettpris(erVG1) {
  if (erVG1){return 100;}
  else {return 150;}
}


// ---------- GUL ----------

// Oppgave 13: Blizzard ønsker at fraksjonene fordeles likt så mulig for å unngå at en fraksjon tar overhånd,
// dette er særlig viktig på PvP-servere. Lag en funksjon som sjekker dette når brukeren lager en ny karakter.
// Funksjonen skal returnere feilmeldingen "The faction is currently unavailable on this ruleset due to population imbalance"
// hvis det er en overvekt av en fraksjon på serveren. Ellers returnerer den "Welcome to the <fraksjon>!"
// Overvekt betyr at fraksjonen spilleren velger har MER enn 50 % av spillerne.
//     velgFraksjon(5000, 5000, "Horde")    -> "Welcome to the Horde!"
//     velgFraksjon(4500, 5500, "Alliance") -> "Welcome to the Alliance!"
//     velgFraksjon(4500, 5500, "Horde")    -> "The faction is currently unavailable on this ruleset due to population imbalance"
//
//     Tips: andel = antall i valgt fraksjon / totalt * 100
function velgFraksjon(alliance, horde, valg) {
  const ledig_plass_dictonary = {
    "alliance" : null,
    "horde" : null
  }
  if (alliance < horde) {
    ledig_plass_dictonary["Alliance"] = true;
    ledig_plass_dictonary["Horde"] = false;
  } else if (alliance > horde) {
    ledig_plass_dictonary["Alliance"] = false;
    ledig_plass_dictonary["Horde"] = true;
  } else {
    ledig_plass_dictonary["Horde"] = true;
    ledig_plass_dictonary["Alliance"] = true;
  }
  console.log(valg);
  console.log(ledig_plass_dictonary[valg]);
  if (ledig_plass_dictonary[valg] == null) {
    return "error your choice of faction is an invalid faction";
  } else if (ledig_plass_dictonary[valg]) {
    return `Welcome to the ${valg}!`;
  } else {
    return "The faction is currently unavailable on this ruleset due to population imbalance";
  }
}
console.log("\nOppgave 13:");
console.log(velgFraksjon(5000, 5000, "Horde"));
console.log(velgFraksjon(4500, 5500, "Alliance"));
console.log(velgFraksjon(4500, 5500, "Horde"));

// Oppgave 14: Hvor mange runder fikk laget MER enn grensen?
//     antallOver(runder, 100) -> 3
//     Tips: samme oppskrift som antallUnderNull() i oppgave 6.
function antallOver(poeng, grense) {
  let _antall_over = 0;
  for (let i = 0; i < poeng.length; i++) {
    if (grense < poeng[i]) {_antall_over++}
  }
  return _antall_over;
}
console.log("\nOppgave 14:");
console.log(antallOver(runder, 100));
console.log(antallOver(runder, 90));

// #####################################################
// DEL 3: BREILAN (oppgave 15–17)
// #####################################################
//
// BreiLAN trenger funksjoner til påmeldingssiden på hjemmesiden.
// Det er turneringer i flere spill, og hvert spill har en aldersgrense.
// Siden må sjekke om deltakerne er gamle nok, regne ut billettinntektene
// og vise hvem som vant.
//
// Her får du bruk for funksjonene fra del 2.

// Aldersgrenser i turneringene. Slik henter du en verdi: aldersgrenser["GTA 6"] -> 18
const aldersgrenser = {
  "GTA 6": 18,
  "CS2": 18,
  "Fortnite": 12,
  "WoW Forever": 12,
  "Minecraft": 7,
};

// Påmeldte deltakere. Slik henter du en verdi: deltakere[0].navn -> "Ola"
const deltakere = [
  { navn: "Ola", alder: 16, spill: "Fortnite", vg1: true },
  { navn: "Kari", alder: 18, spill: "GTA 6", vg1: false },
  { navn: "Ali", alder: 17, spill: "GTA 6", vg1: true },
  { navn: "Emma", alder: 15, spill: "Minecraft", vg1: false },
  { navn: "Jonas", alder: 19, spill: "CS2", vg1: true },
  { navn: "Sara", alder: 16, spill: "WoW Forever", vg1: true },
];

// Resultater fra finalen
const resultater = [
  { navn: "Ola", poeng: 340 },
  { navn: "Kari", poeng: 520 },
  { navn: "Ali", poeng: 410 },
  { navn: "Emma", poeng: 290 },
  { navn: "Jonas", poeng: 480 },
];

// ---------- GRØNN ----------

// Oppgave 15: BreiLAN trenger en funksjon som sjekker aldersgrensen før
//     påmelding til en turnering. Gjenbruk erGammelNok() fra oppgave 11!
//     Hent grensen fra objektet: aldersgrenser[spill]
//     kanDelta(16, "GTA 6")    -> false
//     kanDelta(16, "Fortnite") -> true
function kanDelta(alder, spill) {
  return erGammelNok(alder, aldersgrenser[spill]);
}
console.log("\nOppgave 15:");
console.log(kanDelta(16, "GTA 6"));
console.log(kanDelta(16, "Fortnite"));


// ---------- GUL ----------

// Oppgave 16: BreiLAN trenger å vite hvor mye billettene gir til sammen.
//     Gjenbruk billettpris() fra oppgave 12! deltakere[i].vg1 er true eller false.
//     totalInntekt(deltakere) -> 700
function totalInntekt(deltakere) {
  let _total_inntekt = 0;
  for (let deltaker_nummer = 0; deltaker_nummer < deltakere.length; deltaker_nummer++) {
    _total_inntekt += billettpris(deltakere[deltaker_nummer].vg1);
  }
  return _total_inntekt;
}
console.log("\nOppgave 16:");
console.log(totalInntekt(deltakere));



// ---------- RØD ----------

// Oppgave 17: BreiLAN trenger en resultattavle med de tre beste.
//     Returner en NY array med navnene, fra flest til færrest poeng.
//     UTEN .sort(). Arrayen resultater skal ikke endres.
//     toppTre(resultater) -> ["Kari", "Jonas", "Ali"]
function toppTre(resultater) {
  // Lager en array for bare poeng
  const poeng_array = []
  for (let i = 0; i < resultater.length; i++) {
    poeng_array.push(resultater[i].poeng);
  }
  // Sorterer poengen fra minst til størst
  // og så snur rekkefølgen på den
  const baklengst_sortert_poeng = sorterStigende(poeng_array);
  const sortert_poeng = [];
  // <= 2 pga top 3, 0,1,2.
  for (let i = 0; i <= 2; i++) {
    sortert_poeng.push(baklengst_sortert_poeng[baklengst_sortert_poeng.length - i - 1]);
  }
  //console.log(sortert_poeng);
  // Leser av sortert poeng og resultater.poeng og når de er det samme setter resultater.navn inn i _topp_tre
  let _topp_tre = [];
  for (let i = 0; i < sortert_poeng.length; i++) {
    for (let j = 0; j < resultater.length; j++) {
      if (resultater[j].poeng == sortert_poeng[i]) {
        _topp_tre.push(resultater[j].navn);
      }
    }
  }
  return _topp_tre;
}
console.log("\nOppgave 17:");
console.log(toppTre(resultater));





// #####################################################
// EGENVURDERING
// #####################################################
//
// Skriv en kort egenvurdering av arbeidet ditt. Skriv rett etter kolonet.
// Dette fikk jeg godt til:  Jeg synnes selv at jeg fikk alt til relativt godt.
// Dette var vanskelig:      Jeg prøvde å få til en manual sorterings algoritme der
//                           brukeren skulle besteme om at to verdier var i rekkefølge for vært sett med verdier,
//                           men det ble litt for mye siden jeg også lærer meg C og det var ingen rask og enkel løsning på nett.
// Dette vil jeg øve mer på: C og hvordan kan bli bedre på å lære andre å kode, jeg hjalp Anders og gjorde mitt beste på å
//                           forklare logiken og stegene for algoritmene.
