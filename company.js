let image_company = document.getElementById("image_company");
let price = document.getElementById("price");
const parsedUrl = new URL(window.location.href);

const symbol = parsedUrl.searchParams.get("symbol")

const url_company = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`

window.onload = () => document.getElementById("full_page").style.visibility = "hidden";

fetch(url_company)
  .then((response) => response.json())
  .then((data) => {

    image_company.src = data.profile.image;
    document.getElementById("description").innerHTML = data.profile.description;
    document.getElementById("company_name").innerHTML = `${data.profile.companyName} (${data.symbol})`;
    document.getElementById("website").innerHTML = `<strong>Website</strong> <a href="${data.profile.website}">${data.profile.website}</a>`;
    changesPercentage = data.profile.changesPercentage;
    document.getElementById("exchange").innerHTML = `<strong>Exchange</strong> ${data.profile.exchange}`;
    document.getElementById("sector").innerHTML = `<strong>Sector</strong> ${data.profile.sector}`;
    document.getElementById("mktCap").innerHTML = `<strong>Market Cap</strong> ${data.profile.mktCap}`;
    document.getElementById("address").innerHTML = `<strong>Address</strong> ${data.profile.address}`;
    document.getElementById("city").innerHTML = `<strong>City</strong> ${data.profile.city}`;
    document.getElementById("country").innerHTML = `<strong>Country</strong> ${data.profile.country}`;
    changesPercentage = (Math.round(data.profile.changesPercentage * 100) / 100).toFixed(2);
    if (data.profile.changesPercentage < 0) {
      price.innerHTML = `$${data.profile.price} 
              (${changesPercentage}%) 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>`;
      price.classList.add("text-danger");
    } else if (data.profile.changesPercentage > 0) {
      price.innerHTML = `$${data.profile.price} (+${changesPercentage}%) 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>`
      price.classList.add("text-success");
    } else {
      price.innerHTML = `${data.profile.price} (${changesPercentage})`;
    }
    document.getElementById("full_page").style.visibility = "visible";
    document.getElementById("spinner2").classList.remove("spinner-border");
  })
  .catch((err) => {
    console.log(err);
  });

getData();

async function getData() {
  const response = await fetch(
    `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`);
  const data = await response.json();
  length = data.historical.length;

  labels = [];
  values = [];
  for (i = data.historical.length - 1; i > 0; i--) {
    labels.push(data.historical[i].date);
    values.push(data.historical[i].close);
  }

  document.getElementById("spinner").classList.remove("spinner-border");
  new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: "Stock Price History",
        backgroundColor: ["#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#CD5C5C",
          "#40E0D0"
        ],
        data: values
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Price: '
      }
    }
  });
}