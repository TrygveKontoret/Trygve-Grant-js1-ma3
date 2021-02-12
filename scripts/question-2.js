const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const out = document.querySelector(".games");

fetch(url)
.then(response => response.json())
.then(data => game(data))
.catch(error => out.innerHTML = "Nei, dette funket ikke...");


game = (spill) => {
    console.log(spill);
    out.innerHTML = ""
    for (spel of spill.results) {
        if(spel === spill.results[8]){
            break
        };
        let nySpill = `<ul>
        <li><h2>${spel.name}</h2></li>
        <li>Rating: ${spel.rating}</li>
        <li>Number of tags: ${spel.tags.length}</li>
        </ul>`;
        out.innerHTML += nySpill;
    }
};