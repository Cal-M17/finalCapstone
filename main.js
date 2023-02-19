let bookmarks = document.getElementById("bookmarks");
let bookmarkPLaceholder = document.getElementById("emptyText");
let item;
let savedItems = [];
//sessionStorage.setItem("bookmarked", JSON.stringify(savedItems));

//function to create saved list on homepageload
function homeLoad(){
    if (sessionStorage.getItem("pageLoadedBefore") === null){
        sessionStorage.setItem("bookmarked", JSON.stringify(savedItems));
        sessionStorage.setItem("pageLoadedBefore", true);
    }
}

//functions for saving item to saved list
function saveItem(y) {
    //gets the id of where we are going to link adds it to bookmark list and saves to session storage
    savedItems = JSON.parse(sessionStorage.getItem("bookmarked"));
    item = y.parentNode.id;
    savedItems.push(item);
    sessionStorage.setItem("bookmarked", JSON.stringify(savedItems));
    console.log(savedItems)

    alert(`You have ${savedItems.length} items in your saved folder!`);
}

//function for checking if page has loaded before and creating bookmark page
function pageLoad(){
    savedItems = JSON.parse(sessionStorage.getItem("bookmarked"));
    bookmarks.style.visibility = "hidden";

    if (savedItems.length < 0) {
        document.getElementById("empty").innerHTML = "This is empty"
    } else{
        let i = 0
        savedItems.forEach(element => {
            
            let a = document.createElement('a');
            let link = document.createTextNode(savedItems[i]);
            a.appendChild(link);
            a.title = savedItems[i];
            a.href = `features.html#${savedItems[i]}`;

            //create list item to store link
            let li = document.createElement("li");
            li.appendChild(a);
            document.getElementById("bookmarks").appendChild(li);
            i += 1

            if (i > 0) {
                bookmarks.style.visibility = "visible";
                bookmarkPLaceholder.style.visibility = "hidden";
            }
    });
        
    }
}



//function for liking feature
function likeItem(x) {
    x.classList.toggle("liked");
}

function addComment(z){
    let featureId = z.parentNode.children[0].id;
    let comment = document.getElementById(featureId).value;
    let li = document.createElement("li");
    li.innerHTML = comment;
    commentList = z.parentNode.children[2].children[0].id;
    console.log(commentList)
    document.getElementById(commentList).appendChild(li);
    document.getElementById(featureId).value = "";
}