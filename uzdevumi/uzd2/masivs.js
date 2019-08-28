let masivs=[];
console.log("atver")
function pielikt() {
    masivs=[];
    let skaits=prompt("ievadi masīva lielumu");
    for(let u=0; u<skaits; u++){
     let elements=prompt(`Ievadi masīva ${u} elementu`)   
    masivs.push(elements); 
    }
}