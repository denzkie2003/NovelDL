let novels = [
   {
     title: "Reborn to Master the Blade: From Hero-King to Extraordinary Squire",
     sourceLink: "series/Reborn-To-Master-the-Blade-from-Hero-King-to-Extraordinary-Squire.html"
   },
   {
     title: "Berserk of Gluttony",
     sourceLink: "series/Berserk-Of-Gluttonh.html"
   },
   {
     title: "86",
     sourceLink: "series/Eighty-Six.html"
   },
   {
     title: "Kono Subarashii Sekai ni Bakuen o!",
     sourceLink: "series/Kono-Subarashii-Sekai-ni-Bakuen-O.html"
   },
   {
     title: "A Harem in the Fantasy World Dungeon",
     sourceLink: "series/A-Harem-In-A-Fantasy-World-Dungeon.html"
   },
   {
     title: "Date A Live Fragment: Date A Bullet",
     sourceLink: "series/Date-A-Bullet.html"
   },
   {
     title: "Date A Live",
     sourceLink: "series/Date-A-Live.html"
   },
   {
     title: "Overlord",
     sourceLink: "series/overlord.html"
   },
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