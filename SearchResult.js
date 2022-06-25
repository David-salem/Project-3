class SearchResult {
    constructor (result) {
      this.result = result;
    }

    structure() {
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
    }
  };

