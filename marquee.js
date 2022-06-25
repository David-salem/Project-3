let marquee = document.getElementById("marquee");
let information_marquee = document.createElement("div");

information_marquee.setAttribute("id","information_marquee");

marquee.appendChild(information_marquee);

class Marquee {

    constructor(link) {
        this.link = link;
    }

    async getData() {
        fetch(this.link)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(information_marquee);
            
            async function information_marquee(data){
                document.getElementById("information_marquee").innerHTML += `<li class="list-unstyled">${data.symbol} <span style="color: green">${data.price}</span></li>`;
            }
        })
}
}  