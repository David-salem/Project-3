class SearchForm {
  constructor(form) {
    this.form = form;
  }

  structure() {
    let input = document.createElement("input");
    let div = document.createElement("div");
    let btn = document.createElement("button");
    let icon = document.createElement("i");

    form.appendChild(div);
    div.appendChild(input);
    div.appendChild(btn);
    btn.appendChild(icon);

    div.classList.add("d-flex");
    btn.classList.add("btn-primary", "btn");
    input.classList.add("form-control");
    icon.classList.add("fa-search", "fas");

    btn.id = "btn";
    input.id = "input";
  };



  getResult() {
    btn.addEventListener("click", async () => {
      document.getElementById("sample_div").innerHTML = "";
      document.getElementById("spinner").classList.add("spinner-border");
      fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`)
        .then(response => response.json())
        .then((data) => {

          let symbol = [];

          data.forEach(myFunction);

          function myFunction(value) {
            symbol.push(value.symbol);
          }

          if (symbol.length === 0) {
            document.getElementById("spinner").classList.remove("spinner-border");
            document.getElementById("sample_div").innerHTML = `<strong class="d-flex justify-content-center">No Company Found, Try Again</strong>`;
          }

          for (let i = 0; i < symbol.length; i++) {
            fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol[i]}`)
              .then(resp => resp.json())
              .then((data) => {

                document.getElementById("spinner").classList.remove("spinner-border");

                let changesPercentage = (Math.round(data.profile.changesPercentage * 100) / 100).toFixed(2);

                let color = "";
                let plus = "";

                if (data.profile.changesPercentage < 0) {
                  color = "red";
                } else if (data.profile.changesPercentage > 0) {
                  color = "green";
                  plus = "+"
                } else color = "black";

                const highlightedName = data.profile.companyName.replace(
                  new RegExp(input.value, 'gi'),
                  (matchName) => `<mark class="text-secondary bg-warning">${matchName}</mark>`
                );

                const highlightedSymbol = data.symbol.replace(
                  new RegExp(input.value, 'gi'),
                  (matchSymbol) => `<mark class="text-secondary bg-warning">${matchSymbol}</mark>`
                );

                document.getElementById("sample_div").innerHTML += `<li class="list-unstyled mt-2"><a href="/company.html?symbol=${data.symbol}" class="text-decoration-none font-weight-normal text-secondary fs-4 hover-overlay"><img src="${data.profile.image}" class="img-responsive rounded company_image"> ${highlightedName} (${highlightedSymbol}) <span style='color:${color}'>(${plus}${changesPercentage}%)</span></a></li>`;
              })
          }
        })
    })
  }
};