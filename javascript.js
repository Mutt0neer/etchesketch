const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
let size = 100;
button.addEventListener("click", () =>{
    size = Number(prompt("what size?"));
    makecanvas();
})
makecanvas();
function makecanvas(){
    canvas.innerHTML="";
    for(let i=0;i<size;i++){
        let row = document.createElement("div");
        row.classList.add("rows");
        canvas.appendChild(row);
        for(let o=0;o<size;o++){
            let box = document.createElement("div");
            let color=0;
            box.classList.add("boxes");
            box.style.backgroundColor="black";
            box.style.opacity=0;
            row.appendChild(box);

            box.addEventListener("mouseover", () =>{
                color=color+.1;
                box.style.opacity=color;
            })   
        }
    }
}

