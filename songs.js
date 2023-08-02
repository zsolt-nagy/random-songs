const artists = [
    {
        id: 581829,
        name: "Elton John & Stevie Nicks",
    },
    {
        id: 9763,
        name: "Stevie Nicks",
    },
    {
        id: 114625,
        name: "Stevie Nicks & Kenny Loggins",
    },
];

function renderArtists(nameList) {
    let result = "<ul>";
    for (let item of nameList) {
        result += `<li>${item.name} <button>Get Quote</button></li>`;
    }
    result += "</ul>";

    document.querySelector(".js-artists").innerHTML = result;
}

renderArtists(artists);
