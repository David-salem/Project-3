const information_marquee = document.getElementById("information_marquee");

fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=25f11a1bbb7de48a75b503a7f07f0c07`).then(response => response.json())
    .then((data) => {

        data.forEach(myFunction)

        function myFunction(data) {

            document.getElementById("information_marquee").innerHTML += `<li class="list-unstyled">${data.symbol}   <span style="color: green">${data.price}</span></li>`;

        }
    })
    .catch((err) => {
        console.log(err);
      });