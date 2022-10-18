
//para saber si la pagina cargo
document.addEventListener("DOMContentLoaded",()=>{
    fetchData();//invoco fetch
});

const fetchData= async()=>{
try{
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    showImage(data);
    console.log(data);
}
catch(error){
    console.log(error);
}

};

const showImage =(Jsn)=>{
    const main = document.getElementById("contenedor");
    let lista="";

    Jsn.results.forEach(({image,species,name}) => {
        lista+=`
        <article>
            <img src=${image}>
            <p>${name}</p>
            <p>${species}</p>
        </article>
        `;
    main.innerHTML = lista;    
    });

};