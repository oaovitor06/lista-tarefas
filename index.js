var inputTarefa = document.getElementById("input-tarefa");
var listaTarefas = document.getElementById("lista-tarefas")
var btnAddTarefa = document.getElementById("btn-add-tarefa")
var idTarefa = 0;

btnAddTarefa.addEventListener("click", () => {
    if (inputTarefa.value != "") {
        idTarefa++;
        var li = document.createElement("li");
        li.className = "li-tarefa"
        li.id = idTarefa;
        li.innerHTML = `${inputTarefa.value} <button onclick ="removerTarefa(event)" name=${idTarefa}>Remove</button>`;
        listaTarefas.appendChild(li)
        inputTarefa.value = "";
    }
    else {
        alert("favor digitar a tarefa")
    }
});

inputTarefa.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        if (inputTarefa.value != "") {
            idTarefa++;
            var li = document.createElement("li");
            li.className = "li-tarefa"
            li.id = idTarefa;
            li.innerHTML = `${inputTarefa.value} <button onclick ="removerTarefa(event)" name=${idTarefa}>Remove</button>`;
            listaTarefas.appendChild(li)
            inputTarefa.value = "";
            
        }
        else {
            alert("favor digitar a tarefa")
        }
    }
})

function removerTarefa(event) {
    var elementoParaRemover = document.getElementById(event.target.name)
    elementoParaRemover.remove();
}