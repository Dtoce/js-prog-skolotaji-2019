function samazinat() {
    let rez=document.getElementById("vertiba").value;
    rez--; 
    if (rez<1){
        rez=1;
        alert("samazināt nevar");
    }
    document.getElementById("vertiba").value=rez; 
     
  }