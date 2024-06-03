
let input = document.querySelector('#input');

let addBtn = document.querySelector(".add");

let img = document.querySelector(".img");

let listBody = document.querySelector(".body");

document.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){

        todo();
    }
})


addBtn.addEventListener('click',function(){
todo();

})


function todo(){



    if(input.value != ''){

        let createNew = document.createElement("div")
        createNew.className = 'content';
       listBody.style.padding = 9+'px';
        createNew.innerHTML = input.value;
    var deletebtn = img.cloneNode();
    deletebtn.style.display = 'inline'
    
    createNew.appendChild(deletebtn)
        listBody.appendChild(createNew)
    
    
     
    
    
    
        input.value = '';
    
    
        deletebtn.addEventListener('click',function (){
            listBody.style.padding = 0
            let task = this.closest(".content");
            task.remove()
        })
        
    
    
    }
    else{
        alert('write something before clicking add button')
    }
    



}
let heading = document.querySelector(".heading")

let welcome = document.querySelector('.welcome')

let nameInput = document.querySelector("#name-input");

let nameBtn = document.querySelector(".btn")


nameBtn.addEventListener("click",function(){

    if(nameInput.value != ''){
welcome.style.display = 'none';
heading.textContent = `Welcome dear ${nameInput.value} `

    }

    else{
        alert("write your name first ")
    }
})
