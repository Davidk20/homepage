// Expands the dropdown categories on mobile or smaller devices where the compact view is used.
async function expand(id){
    document.getElementById(id).classList.toggle("show");
}

// Builds a list of links onto the homepage from the JSON file stored externally
async function buildLinks(){
    // Loads the JSON containing the links
    collectionJson = await fetch("/collection.json");
    collection = await collectionJson.json();
    // variable representing the div which will contain all categories
    const container = document.getElementById("categories");
    // Static list of all category ID's in the JSON
    const idList = [];
    // Iterates through each category
    for (category of collection.collection) {    
        idList.push(category.category);
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
        // Builds dropdown of links
        var newDropdown = document.createElement("div");
        newDropdown.classList.add("links");
        newDropdown.setAttribute("id", (category.category + "Dropdown"));
        // Iterates over links to build them
        for (link of category.links) {
            var newLink = document.createElement("a");
            newLink.classList.add("link");
            newLink.setAttribute("href", link.link);
            var newLinkDescription = document.createElement("div");
            var newLinkImage = document.createElement("img");
            newLinkImage.src = link.icon;
            var newLinkName = document.createElement("span");
            newLinkName.textContent=link.name;
            newLinkDescription.appendChild(newLinkImage);
            newLinkDescription.appendChild(newLinkName);
            newLink.appendChild(newLinkDescription);
            newDropdown.appendChild(newLink);
        }
        
        newCategory.appendChild(newDropdown); 
    }

    configureEventListener(idList);
}


// Configures the document to trigger the dropdown on the correct section
function configureEventListener(idList) {
    document.addEventListener('click', function(event){
        if (event.target && idList.includes(event.target.id)) {
            expand(event.target.id + "Dropdown");
        }
    });
}
