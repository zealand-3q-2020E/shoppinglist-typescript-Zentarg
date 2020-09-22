//Write your Typescript code here


let listOfItems : HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");

console.log(listOfItems);

for (let index = 0; index < listOfItems.length; index++) {
    const element = listOfItems[index];
    if (element.classList.contains("unhealthy"))
        element.setAttribute("class", "healthy");
     else if (element.classList.contains("healthy"))
        element.setAttribute("class", "unhealthy");
}

let itemsList : HTMLUListElement = <HTMLUListElement> listOfItems[0].parentElement;

itemsList.firstElementChild.setAttribute("style", "color: blue");
itemsList.lastElementChild.setAttribute("style", "color: black");

let newItem : HTMLLIElement = <HTMLLIElement> document.createElement("li");
newItem.innerText = "Pizza";
newItem.id = "4";
newItem.classList.add("unhealthy");

itemsList.appendChild(newItem);

let unhealthyList : HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");

let unhealthyItemsList : HTMLUListElement = <HTMLUListElement> document.getElementById("listUnhealthy");

for (let index = unhealthyList.length; index > 0; index--) {
    const element = unhealthyList[index - 1];
    element.parentNode.removeChild(element);
    unhealthyItemsList.appendChild(element);
}

let marshmellowsLI : HTMLLIElement = <HTMLLIElement> document.getElementById("0");
marshmellowsLI.innerText = "Bananas";

unhealthyItemsList.removeChild(unhealthyItemsList.firstElementChild);