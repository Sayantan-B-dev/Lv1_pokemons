const pokemonNames = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch’d",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");

btn.addEventListener("click", () => {
  let n1 = Math.floor(Math.random() * 151) + 1;
  let n2 = Math.floor(Math.random() * 151) + 1;
  let n3 = Math.floor(Math.random() * 151) + 1;
  body.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
  btn.style.backgroundColor = `rgb(${n1},${n2},${n3})`;

  document.querySelector("#img1").src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    n1 +
    ".png";
  document.querySelector("#img2").src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    n2 +
    ".png";
  document.querySelector("#img3").src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    n3 +
    ".png";

  document.querySelector("#span1").innerHTML = pokemonNames[n1];
  document.querySelector("#span2").innerHTML = pokemonNames[n2];
  document.querySelector("#span3").innerHTML = pokemonNames[n3];

  document.querySelector(
    "#card1"
  ).style.backgroundColor = `rgb(${n3},${n2},${n1})`;
  document.querySelector(
    "#card2"
  ).style.backgroundColor = `rgb(${n3},${n2},${n1})`;
  document.querySelector(
    "#card3"
  ).style.backgroundColor = `rgb(${n3},${n2},${n1})`;

  if (n1 < 100 && n2 < 100 && n3 < 100) {
    body.style.color = `rgb(255,255,255)`;
  } else {
    body.style.color = `rgb(0,0,0)`;
  }

  h3.innerText = `Background color: rgb(${n1},${n2},${n3})`;
});
