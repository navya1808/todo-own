var todoname = document.getElementById('idtodo');

var todosub = document.getElementById('subtodo');

var form = document.getElementById('form');

var id = 0;

var arr = [ ];

todosub.addEventListener("click", (e) => {

    var todohtml = todoname.value;
    var todo = document.getElementById('todoo');
    id++;

    arr.push(todohtml);
    
    arr.forEach((e) => {
        todo.innerHTML += `<div class="row" id="${id}">
        <div class="col-sm-9">
            <li class="list-group-item" style="text-align: left;">${id}.  ${todohtml}</li>
        </div>
        <div class="col-sm-3">
            <button type="submit" class="sub" id="${id}" onclick= "del(this.id)" >
            <i class="material-icons" style="text-align: right;"  id="icon">delete</i>
            </button>
        </div>
    </div>`;
    })
        

    

    form.reset();
    e.preventDefault();
});

function del(id){
   arr.splice(id-1, 1);
   id = 0;
   arr.forEach((e) =>{
       id++;
    var todo = document.getElementById('todoo');
    var todohtml = todoname.value;
    todo.innerHTML += `<div class="row" id="${id}">
    <div class="col-sm-9">
        <li class="list-group-item" style="text-align: left;">${id}.  ${todohtml}</li>
    </div>
    <div class="col-sm-3">
        <button type="submit" class="sub" id="${id}" onclick= "del(this.id)" >
        <i class="material-icons" style="text-align: right;"  id="icon">delete</i>
        </button>
    </div>
</div>`;
   });

}

// console.log(arr);






