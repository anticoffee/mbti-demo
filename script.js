function intj(){
    window.location.href = "./intj.html";
}

function entj(){
    window.location.href = "./entj.html";
}

function analysts(){
    window.location.href = "./analysts.html";
}

function ohNo(){
    window.location.href ="./ohNo.html";
}

const searchBtn = document.getElementById('search-btn')
const searchInput = document.querySelector('search')

function find(){
    var searchInput = document.getElementById('search').value.toLowerCase();

    if (searchInput.includes('analyst')){
        analysts();
    } else if(searchInput.includes('intj') || searchInput.includes('architect')){
        intj(); 
    } else if (searchInput.includes('entj') || searchInput.includes('commander')){
        entj();
    } else{
        ohNo();
    }
}