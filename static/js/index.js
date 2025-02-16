let url = "https://api.chucknorris.io/jokes/random";
let risorsa;

//gestione url
let choose = document.getElementById("scelta");
choose.addEventListener("change", function() {
    let valore = parseInt(this.value); 
    
    switch (valore) {
        case 0:
            url = "https://api.chucknorris.io/jokes/random";
            break;
        case 1:
            url = "https://api.chucknorris.io/jokes/random?category=animal";
            break;
        case 2:
            url = "https://api.chucknorris.io/jokes/random?category=career";
            break;
        case 3:
            url = "https://api.chucknorris.io/jokes/random?category=celebrity";
            break;
        case 4:
            url = "https://api.chucknorris.io/jokes/random?category=dev";
            break;
        case 5:
            url = "https://api.chucknorris.io/jokes/random?category=explicit";
            break;
        case 6:
            url = "https://api.chucknorris.io/jokes/random?category=fashion";
            break;
        case 7:
            url = "https://api.chucknorris.io/jokes/random?category=food";
            break;
        case 8:
            url = "https://api.chucknorris.io/jokes/random?category=history";
            break;
        case 9:
            url = "https://api.chucknorris.io/jokes/random?category=money";
            break;
        case 10:
            url = "https://api.chucknorris.io/jokes/random?category=movie";
            break;
        case 11:
            url = "https://api.chucknorris.io/jokes/random?category=music";
            break;
        case 12:
            url = "https://api.chucknorris.io/jokes/random?category=political";
            break;
        case 13:
            url = "https://api.chucknorris.io/jokes/random?category=religion";
            break;
        case 14:
            url = "https://api.chucknorris.io/jokes/random?category=science";
            break;
        case 15:
            url = "https://api.chucknorris.io/jokes/random?category=sport";
            break;
        case 16:
            url = "https://api.chucknorris.io/jokes/random?category=travel";
            break;
    }
});


let btn = document.querySelector("#generate")
btn.addEventListener("click", function (e) {
    e.preventDefault()

    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)

            return resp.json()
        }
    ).then(
        function (data) {
            document.querySelector("#jokes").innerHTML = "\' " + data.value + "\'";
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )

    console.log(risorsa)
    // stati delle promises: 
    // 1. stato pending
    // 2. stato rejected
    // 3. stato fulfilled
})

        