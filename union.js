(async function union() {
    const infoMarquee = new Marquee('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=25f11a1bbb7de48a75b503a7f07f0c07');
    infoMarquee.getData();

    const mainForm = new SearchForm(document.getElementById("form"));
    mainForm.structure();
    mainForm.getResult();
    const results = new SearchResult(document.getElementById("results"));
    results.structure();
})();