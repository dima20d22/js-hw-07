const ulCategories = document.getElementById("categories");

const liItem = document.getElementsByClassName("item");

let countOfCategories = 0;

const liArr = Array.from(liItem);

liArr.forEach(function () {
  return countOfCategories++;
});

console.log("Number of categories: ", countOfCategories);

const headers = document.querySelectorAll("h2");

headers.forEach(function (header) {
  const ul = header.nextElementSibling;
  if (ul.tagName === "UL") {
    const liItems = ul.getElementsByTagName("li");
    const countOfli = liItems.length;

    console.log("Catogory: ", header.innerHTML);
    console.log("Elements: ", countOfli);
  }
});
