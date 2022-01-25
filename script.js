// Builds a list of links onto the homepage from the JSON file stored externally
async function buildLinks(){
    collectionJson = await fetch("/collection.json");
    collection = await collectionJson.json();
    
    for (category of collection.collection) {
        console.log(category);
    }
}


// Expands the dropdown categories on mobile or smaller devices where the compact view is used.
function expand(id){
    var x = id + "Dropdown"
    document.getElementById(x).classList.toggle("show");
}