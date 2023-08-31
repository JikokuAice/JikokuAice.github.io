//form valiation 
let dropit = document.getElementById('droping');
let submit = document.querySelector('#main-button');
const table = document.querySelector('.Realtable').getElementsByTagName('tbody')[0];



document.addEventListener('DOMContentLoaded',()=>{
let lib = JSON.parse(localStorage.getItem('book'))||[]
for(const book of lib){
    rowabove(book);
}
})


function inputval(){
    let bookname = document.querySelector('.book-name').value;
    let bookauthor = document.querySelector('.book-author').value;
    let bookpage= document.querySelector('.book-page').val
    var book ={
        bookNam : bookname,
        bookAuth : bookauthor,
        bookPage : bookpage
        };
   let lib = JSON.parse(localStorage.getItem('book'))||[];
lib.push(book);
let stringy = JSON.stringify(lib);
localStorage.setItem('book',stringy);




rowabove(book); 
 }





function rowabove(book){

    let row = table.insertRow();
row.style.borderBottom='1px solid rgba(0, 0, 0, 0.234)';
row.style.fontWeight='bold';

    let cel1 = row.insertCell(0);
    let cel2 = row.insertCell(1);
    let cel3 = row.insertCell(2);
    let cel4 = row.insertCell(3);
   let btnintable = document.createElement('button');
   btnintable.innerText='Done'
   btnintable.classList.add('button-status');
   cel4.appendChild(btnintable);
  
   let cel5=row.insertCell(4);
   let delbtn = document.createElement('button');
   delbtn.classList.add('delete');
   delbtn.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
   cel5.appendChild(delbtn);
        
cel1.innerText=book.bookNam;
cel2.innerText=book.bookAuth;
cel3.innerText=book.bookPage;

cel4.addEventListener('click', function(){
    btnintable.classList.toggle('black');
    if(btnintable.classList.contains('black')){
        btnintable.innerText='NotDone'
    }
    else{
       btnintable.innerText='Done'
       btnintable.style.backgroundColor='white';
       btnintable.style.color='black';
    }
    });
    if(dropit.options[dropit.selectedIndex].value=='a2'){
        btnintable.classList.toggle('black');
        btnintable.innerText='NotDone'
        

    }

   delbtn.addEventListener('click',()=>{
    row.remove();

    let lib = JSON.parse(localStorage.getItem('book'))||[]
for(const index in lib){

if(lib[index].bookPage==book.bookPage&&lib[index].bookAuth==book.bookAuth){
lib.splice(index,1)
}

}

localStorage.setItem('book',JSON.stringify(lib));

});


}

let valid=document.querySelectorAll('#valid');
function valiation(){
    let bookname = document.querySelector('.book-name').value;
    let bookauthor = document.querySelector('.book-author').value;
    let bookpage= document.querySelector('.book-page').value;
    let conditions;
    if((bookauthor==''||bookpage==''||bookname=='')){
valid.forEach((e)=>{
e.style.display='block'
e.innerText='error!no value'
conditions=false;
});

}else{
    valid.forEach((e)=>{
        e.style.display=''
        e.innerContent=''})
        conditions=true;

}

return conditions;


}


function valiation2(){
   
    let bookpage= document.querySelector('.book-page').value;
    let valid2 = document.querySelectorAll('.validSec');
    let conditions2;
    
    if(isNaN(bookpage)){
valid2.forEach((e)=>{
e.style.display='block'
e.innerText='letter only';
conditions2=false;
});

}else{
    valid2.forEach((e)=>{
        e.style.display=''
        e.innerContent=''})
        conditions2=true;

}

return conditions2;


}

submit.addEventListener('click',()=>{
if(valiation()){
    if(valiation2()){
inputval();
    }
}});
    








