const ingresar = document.getElementById("boton");
const eliminar = document.getElementById("eliminar")
const palabra = document.getElementById("valor");
const lista = document.getElementById("lista");

ingresar.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerHTML=palabra.value;
    lista.appendChild(li);

    palabra.value="";
});

eliminar.addEventListener("click",()=>{
    lista.lastChild.remove();
});