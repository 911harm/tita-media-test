let toHTML=""
const accesKey ="Yg4Lehzi3fu4oqc_JF_Rj8uHAxEW6SCqhwAfsYwVfk4";
const endPoint = 'https://api.unsplash.com/search/photos';
const container=document.querySelector("#Items");
let imagesList="";
async function getImages(query){
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    let jsonResponse = await response.json();
    imagesList = await jsonResponse.results;
    //console.log(imagesList);
    createImages(imagesList);
  

}
// Menu despliege

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

//Montar imagenes en el html


function createImages(ItemsArray){
    toHTML="";
    for(let index in ItemsArray)
     {
        
        let nameItem=ItemsArray[index].user.first_name;
        let tagItem=ItemsArray[index].tags[2].title;
        let imgItem=ItemsArray[index].urls.small;
        
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



getImages('cars');


//No es buena practica el onclick en el html
// aunque quiero aprobechar el tiempo que me puede ahorrar para esta ocacion
//muchos document.getElementById -.-! y sus eventListener


//FILTRO 
const filterItem=(wordkey)=>{
  
    let filterItems = imagesList.filter((item)=> item.tags[2].title == wordkey);
        console.log(filterItems);
        createImages(filterItems);
        console.log(`se filtro por ${wordkey}`);

}