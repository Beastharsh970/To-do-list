
let nam=document.getElementById('yourname');
let btn=document.getElementById('plus');
let count=0;
btn.addEventListener('click',()=>{
    if(count>0){
      alert("two names huh?");
      nam.value="";
      return;
    }
    let inp=nam.value;
    if(inp.trim()===""){
        alert('Really! you don\'t have a name!!!');
    }
    else{
        var aslinam=document.createElement('h1');
        aslinam.classList.add('aslinam');
        aslinam.innerHTML = inp;
        const nameparent=document.getElementById('nameparent');
        nameparent.appendChild(aslinam);
        nam.value="";
        count++;

    }
});
let work=document.getElementById('typework');
let addd=document.getElementById('p-icon');
const parent=document.getElementById('parent');

addd.addEventListener('click', () => {
  let kary = work.value;
  if (kary.trim() === '') {
    alert('Oh! Man set some goal');
    return;
  }
    let taskbar=document.createElement('div');
    taskbar.classList.add('taskbar');
    let task = document.createElement('h1');
    task.classList.add('task');
    task.innerText = kary;
    taskbar.appendChild(task);

    let checkbox = document.createElement('i');
    checkbox.classList.add('checkbox');
    checkbox.innerHTML='<i class="fa-solid fa-check fa-2xl"></i>';
    taskbar.appendChild(checkbox);


    let delbox = document.createElement('i');
    delbox.classList.add('delbox');
    delbox.innerHTML= '<i class="fa-solid fa-trash-can fa-2xl"></i>';
    taskbar.appendChild(delbox);
    parent.appendChild(taskbar);
    //after the else part
    work.value="";


    //event listners for add and delete
  const item=document.getElementsByClassName("delbox");
  item[0].addEventListener('click', ()=>{
    item[0].parentElement.remove();
    return;
  })
  const item2=document.getElementsByClassName('checkbox');
  item2[0].addEventListener('click',()=>{
    item2[0].parentElement.style.textDecoration="line-through";
  })  
});











// const checkboxx=document.getElementsByClassName("checkbox");
// checkboxx[0].addEventListener('click',()=>{
// checkboxx[0].parentElement.style.textDecoration="line-through";  });

// if (kary === '') {
    //   alert('Oh! Man set some goal');
    // } else{
    //   parent.appendChild(taskbar);
    // }
    // work.value="";




// const checkboxx=document.getElementsByClassName("checkbox");
// checkboxx[0].addEventListener('click',()=>{
// checkboxx[0].parentElement.style.textDecoration="line-through";  });
