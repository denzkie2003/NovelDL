let novels = [
   {
     title: "Death March kara Hajimaru Isekai Kyusoukyoku",
     sourceLink: "series/Death-March-kara-Hajimaru-Isekai-Kyusoukyoku.html"
   },
   {
     title: "My Stepsister is my Ex",
     sourceLink: "series/My Stepsister is My Ex.html"
   },
   {
     title: "Majo no Tabitabi",
     sourceLink: "series/Majo-No-Tabitabi-Light-Novel.html"
   },
  ];

let list = document.getElementById("list");
for (let x in novels) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", "");

  a.innerHTML = novels[x].title;
  a.href = novels[x].sourceLink;

  li.append(a);
  list.append(li);
}

$(document).ready(function() {
  function Ascending_sort(a, b) {
    return ($(b).text().toUpperCase()) <
      ($(a).text().toUpperCase()) ? 1 : -1;
  }
  $("ul li").sort(Ascending_sort).appendTo('ul');
  
  
  
});