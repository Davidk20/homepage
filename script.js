// Builds a list of links onto the homepage from the JSON file stored externally
async function buildLinks(){
    collectionJson = await fetch("/collection.json");
    collection = await collectionJson.json();

    const container = document.getElementById("categories");

    for (category of collection.collection) {        
        var newCategory = document.createElement("div");
        newCategory.classList.add("category");
        var newHeader = document.createElement("div");
        newHeader.classList.add("header");
        newHeader.setAttribute("id", category.category);
        //newHeader.addEventListener("click", expand("category"));
        var headerText = document.createTextNode(category.category);
        newHeader.appendChild(headerText);
        newCategory.appendChild(newHeader);
        container.appendChild(newCategory);
    }
}


// Expands the dropdown categories on mobile or smaller devices where the compact view is used.
function expand(id){
    var x = id + "Dropdown"
    document.getElementById(x).classList.toggle("show");
}