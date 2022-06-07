const result = document.getElementById("result1")
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
  document.getElementById("sample_div").innerHTML = "";
  document.getElementById("spinner").classList.add("spinner-border");

  fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${result.value}&limit=10&exchange=NASDAQ`).then(resp => resp.json())
    .then((data) => {

      let symbol = [];

      data.forEach(myFunction);

      function myFunction(value) {
        symbol.push(value.symbol);
      }

      if(symbol.length === 0)
      {
        document.getElementById("spinner").classList.remove("spinner-border");
        document.getElementById("sample_div").innerHTML = `<strong class="d-flex justify-content-center">No Company Found, Try Again</strong>`;
      }

      for (let i = 0; i < symbol.length; i++) {
        fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol[i]}`)
          .then(resp => resp.json())
          .then((data) => {
            
            document.getElementById("spinner").classList.remove("spinner-border");
            
            changesPercentage = (Math.round(data.profile.changesPercentage * 100) / 100).toFixed(2);
            
            let color = "";
            let plus = "";
            
            if (data.profile.changesPercentage < 0) {
              color = "red";
            } else if (data.profile.changesPercentage > 0) {
              color = "green";
              plus = "+"
            } else color = "black";
            
            document.getElementById("sample_div").innerHTML += `<li class="list-unstyled mt-2"><a href="/company.html?symbol=${data.symbol}" class="text-decoration-none font-weight-normal text-secondary fs-4 hover-overlay"><img src="${data.profile.image}" class="img-responsive rounded company_image"> ${data.profile.companyName} (${data.symbol}) <span style='color:${color}'>(${plus}${changesPercentage}%)</span></a></li>`;
          })
          
      }
    })
    .catch((err) => {
      console.log(err);
    })
});