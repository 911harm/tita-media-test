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

//ALL
const f0=document.getElementById("f0");
f0.addEventListener("click",createImages(imagesList))


//FILTRO 1 (unificar más adelante por la palabra a buscar)

const filterItem1=()=>{
  
    let filterItems = imagesList.filter((item)=> item.tags[2].title == "automobile");
        console.log(filterItems);
        createImages(filterItems);
        console.log("se filtro automobil");

}
const f1=document.getElementById("f1");
f1.addEventListener("click",filterItem1)



//Es mas comodo pasar por parametro la wordkey para aplicar el filtro


const filterItem2=()=>{
  
    let filterItems = imagesList.filter((item)=> item.tags[2].title == "transportation");
        console.log(filterItems);
        createImages(filterItems);
        console.log("se filtro transportation");

}
const f2=document.getElementById("f2");
f2.addEventListener("click",filterItem2)