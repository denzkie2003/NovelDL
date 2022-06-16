let list2 = document.getElementById("list");
for (let x in novel) {
  let li = document.createElement("li");
  li.setAttribute("class", "nav-item");
  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "");

  a.innerHTML = novel[x].title;
  a.href = novel[x].sourceLink;

  li.append(a);
  list2.append(li);
}

$(document).ready(function() {
  function Ascending_sort(a, b) {
    return ($(b).text().toUpperCase()) <
      ($(a).text().toUpperCase()) ? 1 : -1;
  }
  $("ul li").sort(Ascending_sort).appendTo('ul');
});
