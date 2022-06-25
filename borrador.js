let form = document.getElementById("form");

class searchForm {
    constructor (link) {
        this.link = link;
    }

    async getData () {
        const response = await fetch(this.link);
        const data = await response.json();

        return data;
    }
};

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
icon.classList.add("fa-search","fas");


btn.addEventListener("click", async () => {
        document.getElementById("sample_div").innerHTML = "";
        document.getElementById("spinner").classList.add("spinner-border");
        let data_search = new searchForm (`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`);
        let data = await data_search.getData();

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

});


let result = document.getElementById("results");

let div2 = document.createElement("div");
let spinner = document.createElement("div");
let sample_div = document.createElement("div");

result.appendChild(div2);
div2.appendChild(spinner);
result.appendChild(sample_div);

spinner.setAttribute("id", "spinner");
sample_div.setAttribute("id", "sample_div");

div2.classList.add("justify-content-center", "d-flex");
spinner.classList.add("mt-2");
sample_div.classList.add("rounded", "view");


class SearchForm {
    constructor (form, ul) {
        this.form = form;
        this.ul = ul;
        console.log("hola");
    }

     getDiv(){
        let divSearch = document.createElement("div");
        form.appendChild(divSearch);
        this.setDivTags(divSearch);
    }

    setDivTags(){
      divSearch.id = "divSearch"
      divSearch.classList.add("d-flex");
    }

    getInput(){
        const inputSearch = document.createElement('input');
        divSearch.appendChild(inputSearch);
        this.setInputTags(inputSearch);
    }

    setInputTags(inputSearch) {
        inputSearch.id = "input-search";
        inputSearch.type = "string";
        inputSearch.classList.add("form-control");
    }

    getButton(){
        const btn = document.createElement("button");
        divSearch.appendChild(btn);
        this.setBtnTags(btnSearched);
    }

    setButton(btnSearch) {
        btnSearch.id = "btn-search";
        btnSearch.classList.add("btn-primary", "btn");
        let icon = document.createElement("i");
        btn.appendChild(icon);
        icon.classList.add("fa-search","fas");
    }

    getResult() {
        btn.addEventListener("click", async () => {
            document.getElementById("sample_div").innerHTML = "";
            document.getElementById("spinner").classList.add("spinner-border");
            let response = await fetch (`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`);
            let data = await response.json();
    
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
    }
}

new SearchForm();


















class SearchForm {
  constructor (link) {
    this.link = link;
}

async getData () {
  const response = await fetch(this.link);
  const data = await response.json();

  return data;
}

   structure(){
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
    icon.classList.add("fa-search","fas");
    
    btn.id = "btn";
   };

  getResult() {
      btn.addEventListener("click", async () => {
          document.getElementById("sample_div").innerHTML = "";
          document.getElementById("spinner").classList.add("spinner-border");
          let data_search = new searchForm (`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input.value}&limit=10&exchange=NASDAQ`);
          let data = await data_search.getData();
  
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
  }
}

const mainform = new SearchForm();
mainform.structure();
mainform.getResult();