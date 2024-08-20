const canvas = document.getElementById("canvas");
for(let i=0;i<100;i++){
    let row = document.createElement("div");
    row.classList.add("rows");
    canvas.appendChild(row);
    for(let o=0;o<100;o++){
        let box = document.createElement("div");
        box.classList.add("boxes");
        row.appendChild(box);
        box.addEventListener("mousemove", () =>{
            box.style.backgroundColor="black";
        })   
        document.body.addEventListener("mouse", () =>{
            
        })
    }
}