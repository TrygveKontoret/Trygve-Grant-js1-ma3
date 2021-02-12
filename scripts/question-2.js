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
        }
        let nySpill = `<div>
        <h2>${spel.name}</h2>
        <p>Rating: ${spel.rating}</p>
        <p>${spel.tags}</p>
        </div>`;
        out.innerHTML += nySpill;
    }
};