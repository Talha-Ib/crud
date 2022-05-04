let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
    
let mood = 'Create';
let tmp;
    
let t = document.getElementById('t');
let bop = document.getElementById('bop');
let yas = document.getElementById('yas');
let no = document.getElementById('no');
    
    
let m = document.getElementById('m');
let body = document.getElementById('body');

let btnDelete = document.getElementById('deleteAll');

let searchtitle = document.getElementById('searchtitle');
let searchcategory = document.getElementById('searchcategory');
let delet = document.getElementById('delet');
let search = document.getElementById('search');
let update = document.getElementById('update');
let tbody = document.getElementById('tbody');



// change mod

m.addEventListener('click',()=>{
  
  body.classList.toggle('body');
  title.classList.toggle('dark');
  price.classList.toggle('dark');
  taxes.classList.toggle('dark');
  ads.classList.toggle('dark');
  discount.classList.toggle('dark');
  count.classList.toggle('dark');
  category.classList.toggle('dark');
  search.classList.toggle('dark');
  bop.classList.toggle('dark');

});


/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */

//get total 

function getTotal(){
  if(price.value != ''){
    let f = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = f;
    total.style.background = '#090';
  } else if(price.value == '' && taxes.value == '' && ads.value == '' && discount.value == ''){
    total.innerHTML = '';
    total.style.background = '#999';
  } else {
        f = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = f;
    total.style.background = '#d90000';
  } 
 
};


/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */


// create product

let dataPro;

if(localStorage.product != null){
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}


submit.onclick = function(){
  getTotal();
  let newPro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
     count:count.value,
    category:category.value
  };
  
  if(title.value != '' && price.value != '' && newPro.count <= 100 && category.value != ''){

  if(mood === 'Create'){
    
  
    if(newPro.count > 1){
     for(let i = 0;i < newPro.count;i++){
      dataPro.push(newPro);
     }
    } else {
    dataPro.push(newPro);
    }
    
    
    
  }else{
    dataPro[tmp] = newPro;
    mood = 'Create';
    submit.innerHTML = 'Create';
      submit.style.background = '#0471D5';
    count.style.display = 'block';
    btnDelete.style.pointerEvents = 'inherit';
    searchtitle.style.pointerEvents = 'inherit';
    searchcategory.style.pointerEvents = 'inherit';
    search.style.pointerEvents = 'inherit';
    tbody.style.pointerEvents = 'inherit';
  }
  clearData();
  }  
    
  // save localStorage
  
    localStorage.setItem('product', JSON.stringify(dataPro));
     total.style.background = '#999';
    
    showData();
};


/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */

//clear inputs

function clearData(){
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
};


/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */
/* $@%#^^#^^$$&$&$&""&$#&£#*#*#;$;'xhididjddhbddb */


//read

function showData(){
  let table = '';
  for(let i = 0;i < dataPro.length;i++){
    table += `<tr>
           <td>${i+1}</td>
           <td>${dataPro[i].title}</td>
           <td>${dataPro[i].price}</td>
           <td>${dataPro[i].taxes}</td>
           <td>${dataPro[i].ads}</td>
           <td>${dataPro[i].discount}</td>
           <td>${dataPro[i].total}</td>
           <td>${dataPro[i].category}</td>
           <td><button onclick='updateData(${i})' id='update' style='background:#090'>update</button></td>
           <td><button id='delet' onclick='deleteData(${i})'  style='background:red' >delete</button></td>
         </tr>`;
  };
  document.getElementById('tbody').innerHTML = table;
  let btnDelete = document.getElementById('deleteAll');
  if(dataPro.length > 0){
    btnDelete.innerHTML = `<button onclick='deleteAll()'  style='background:#red' >Delete All (${dataPro.length})</button>`;
  } else {
  btnDelete.innerHTML = '';
  }
}
showData();



//delete

function deleteData(i){
  dataPro.splice(i,1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}


function deleteAll(){
  bop.style.display = 'block';
  t.style.display = 'block';
  
}

function none(){
  bop.style.display = 'none';
  t.style.display = 'none';
};


function dd() { 
 localStorage.clear();
 dataPro.splice(0);
 showData();
 bop.style.display = 'none';
 t.style.display = 'none';
 };



//count

//update



function updateData(i){
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  count.style.display = 'none';
  submit.innerHTML = 'Update';
  submit.style.background = '#090';
  
  mood = 'Update';
  tmp = i;
  getTotal();
  btnDelete.style.pointerEvents = 'none';
  searchtitle.style.pointerEvents = 'none';
  searchcategory.style.pointerEvents = 'none';
  search.style.pointerEvents = 'none';
  tbody.style.pointerEvents = 'none';
  scroll({
    top:0,
    behavior: 'smooth'
  });

};


//search


let searchMood;

function getSearchMood(id){
  let search = document.getElementById('search');
  if(id == 'searchtitle'){
    searchMood = 'title';
  } else {
    searchMood = 'category';
  }
  search.placeholder = 'search by ' + searchMood;
  search.focus();
  search.value = '';
  showData();
}



function searchData(value){ 
  let table = '';
  for(let i = 0;i < dataPro.length;i++){
  if(searchMood == 'title'){
    
     if(dataPro[i].title.includes(value.toLowerCase())){
       table += `
      <tr>
      <td>${i+1}</td>
      <td style='color:red'>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
      <td><button onclick="updateData(${i})" id="update">update</button></td>
      <td><button onclick="deleteData(${i})" id="delet" style='background:red'>delete</button></td>
    </tr>`;
     };
  
    
  } else {
    
  
     if(dataPro[i].category.includes(value.toLowerCase())){
       table += `
      <tr>
      <td>${i+1}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td style='color:red'>${dataPro[i].category}</td>
      <td><button onclick="updateData(${i})" id="update">update</button></td>
      <td><button onclick="deleteData(${i})" id="delet" style='background:red'>delete</button></td>
          </tr>`;
     };
   
    
  };
};
  document.getElementById('tbody').innerHTML = table;
};
//clean data