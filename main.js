let toHTML=""
const accesKey ="Yg4Lehzi3fu4oqc_JF_Rj8uHAxEW6SCqhwAfsYwVfk4";
const endPoint = 'https://api.unsplash.com/search/photos';
const container=document.querySelector("#Items");

async function getImages(query){
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    console.log(imagesList);
    createImages(imagesList);

}

function createImages(imagesList){
    for(let index in imagesList)
     {
        
        let nameItem=imagesList[index].user.first_name;
        let tagItem=imagesList[index].tags[2].title;
        let imgItem=imagesList[index].urls.small;
        toHTML+=`
        <div class="ctn-item">
            <div class="imgItems">
                <img src="${imgItem}" alt="nameItem">
                <h3 id="namesItems">${nameItem}</h3>
                <hr>
                <p id="tagsItems">${tagItem}</p>
                </div>
            </div>
            
        </div>
        `
    }
    container.innerHTML= toHTML;
}
getImages('users');
