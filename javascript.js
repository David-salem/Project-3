const result = document.getElementById("result1")
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {


      document.getElementById("spinner").classList.add("spinner-border");

      const fetch_url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${result.value}&limit=10&exchange=NASDAQ`;

      fetch(fetch_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {

        let result = "";
        
            data.forEach(myFunction);
            document.getElementById("spinner").classList.remove("spinner-border");
            document.getElementById("sample_div").innerHTML = result;

            function myFunction(value) {
                result += `<li class="list-unstyled"><a href="/company.html?symbol=${value.symbol}" class="text-decoration-none font-weight-normal text-secondary fs-4 hover-overlay">${value.name} (${value.symbol})</a></li>`
            }
      });  
});