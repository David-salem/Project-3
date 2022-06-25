let footer = document.createElement("footer");
let txt_footer = document.createElement("div");
document.body.appendChild(footer);
footer.appendChild(txt_footer);

footer.classList.add("text-center", "text-white", "fixed-bottom");
txt_footer.classList.add("text-center", "p-3");

txt_footer.innerHTML = "© 2022 Copyright: ITC Stock Market, Inc. All rights reserved.";

txt_footer.setAttribute("id", "txt_footer");