function drukat() {
    const sakne=document.getElementById(`root`);
    const berns=document.createElement(`p`);
    berns.innerHTML= JSON.stringify(objekts);// json -metode string.....jebko kas iekavās pārtaisa par tekstu
    sakne.removeChild(sakne.firstChild);//noņmeiepriekšejo
    sakne.appendChild(berns);//pieliek mūsējo
     }