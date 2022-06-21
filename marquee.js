const information_marquee = document.getElementById("information_marquee");

class fetchMarquee {

    constructor(link) {
        this.link = link;
    }

    async getData() {
        const response = await fetch(this.link)
        const data = await response.json();

        return data;
        }
}

async function marquee_function(){

    let marquee_data = new fetchMarquee('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=25f11a1bbb7de48a75b503a7f07f0c07');
    let data = await marquee_data.getData();

    data.forEach(information_marquee);

    async function information_marquee(data){
        document.getElementById("information_marquee").innerHTML += `<li class="list-unstyled">${data.symbol} <span style="color: green">${data.price}</span></li>`;
    };
    
  }
  marquee_function();