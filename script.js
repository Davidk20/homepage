// Expands the dropdown categories on mobile or smaller devices where the compact view is used.
async function expand(id){
    var x = id + "Dropdown"
    document.getElementById(x).classList.toggle("show");
}

// Builds a list of links onto the homepage from the JSON file stored externally
async function buildLinks(){
    collectionJson = await fetch("/collection.json");
    collection = await collectionJson.json();
    const container = document.getElementById("categories");
    for (category of collection.collection) {    

        // Builds header and div container
        var newCategory = document.createElement("div");
        newCategory.classList.add("category");
        var newHeader = document.createElement("div");
        newHeader.classList.add("header");
        newHeader.setAttribute("id", category.category);
        var headerText = document.createTextNode(category.category);
        newHeader.appendChild(headerText);
        newCategory.appendChild(newHeader);
        container.appendChild(newCategory);

        // Uncomment when links content filled out
        //newHeader.addEventListener("click", expand(category.category));

        // Builds dropdown of links
        var newDropdown = document.createElement("div");
        newDropdown.classList.add("links");
        newDropdown.setAttribute("id", (category.category + "Dropdown"));
        
        for (link of category.links) {
            var newLink = document.createElement("a");
            newLink.setAttribute("href", link.link);
            var newLinkDescription = document.createElement("div");
            var newLinkImage = document.createElement("img");
            //newLinkImage.src = link.link;
            var newLinkName = document.createElement("span");
            newLinkName.textContent=link.name;
            newLinkDescription.appendChild(newLinkName);
            newLink.appendChild(newLinkDescription);
            newDropdown.appendChild(newLink);
        }
        
        newCategory.appendChild(newDropdown);
    }
}


