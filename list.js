

let kitchenList = document.getElementById('inputData');
let kitchenButton = document.getElementById('inputBtn');
let inputList = document.getElementById('inputList');
let arrayItems=[];
kitchenList.focus();

let kitchenListData;

function setLocalstorage(){
    localStorage.setItem("Item",JSON.stringify(arrayItems));
}
function getLocalstorage(){
    if(localStorage.getItem("Item")){
        arrayItems=JSON.parse(localStorage.getItem("Item"));
        console.log(arrayItems);
        buildUI();

    }
    

}

function buildUI(){
    inputList.textContent = '';
    arrayItems.forEach((item)=>{
        // console.log(item)
        let li = document.createElement('li');
        let spanEl = document.createElement('span');
        li.appendChild(spanEl);
        //console.log(spanEl);
        spanEl.innerText = item;
        // li.innerText = kitchenListData;
        li.style.cssText = 'animation-name : slideIn'
        // console.log(li);
        inputList.appendChild(li);
        
        kitchenList.value = '';
        kitchenList.focus();
        
        
        //delete button
        let deleteBtn = document.createElement('span');
        deleteBtn.classList = 'dt material-symbols-outlined';
        deleteBtn.innerText = 'delete';
        // console.log(deleteBtn);
        li.appendChild(deleteBtn);
        deleteBtn.style.cssText = "font-size:larger;cursor:pointer ; color:red ;margin-left:auto;";
    
        //edit button
        let editBtn = document.createElement('span');
        editBtn.classList = 'et material-symbols-outlined';
        editBtn.innerText = 'edit';
        li.appendChild(editBtn);
        editBtn.style.cssText = "font-size:larger;cursor:pointer ; color:dark; ";
    
    })
   
    
}

function addItem(){
    kitchenListData= kitchenList.value;
    //console.log(kitchenListData);
    arrayItems.push(kitchenListData);
    console.log(arrayItems);

    // SET TO LOCAL STORAGE
    setLocalstorage();

    //get from local storage
    getLocalstorage();    
}

function enterPress(event){
    if(event.code == 'Enter'){
        kitchenListData= kitchenList.value;
        arrayItems.push(kitchenListData);
        console.log(arrayItems);
        //console.log(kitchenListData);
        // SET TO LOCAL STORAGE
        setLocalstorage();
    
        //get from local storage
        getLocalstorage();
     }

}

function deleteItem(event){
    if(event.target.classList[0] === "dt"){ 
        let item = event.target.parentElement;
        console.log(item);
        item.classList.add( 'slideOut');
        item.addEventListener('transitionend',function(){
            item.remove(); 
            // console.log(arrayItems);
        })
       

    }

}

function editItem(event){

    if(event.target.classList[0] === 'et'){


        let newtext = prompt('enter new item name');
       // console.log(newtext);
        let item=event.target.parentElement;
        console.log(item);
        let spanEl = item.querySelector('span');
       // console.log(spanEl);
        spanEl.innerText = newtext
       
    }

}

kitchenButton.addEventListener('click',addItem);
kitchenList.addEventListener('keyup',enterPress);
inputList.addEventListener('click',deleteItem);
inputList.addEventListener('click',editItem);

 //GET FROM LOCAL STORAGE for accessing previously stored data
 getLocalstorage();
