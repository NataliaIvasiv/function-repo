const lists = document.querySelectorAll('.item');
console.log(lists.length);
console.log(lists);
for (let list of lists) {
  console.log(list.firstElementChild.textContent);
  console.log(list.lastElementChild.children.length);
}
