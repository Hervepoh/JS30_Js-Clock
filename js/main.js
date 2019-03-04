function setClock(){
    const date=new Date();
    const heures=date.getHours();
    const minutes=date.getMinutes();
    const secondes=date.getSeconds();
    const secondesDegree=(secondes/60)*360;
    const minutesDegree=(minutes/60)*360;
    const heuresDegree=(heures/12)*360;

    const aiguilleSecondes=document.getElementById('aiguille-secondes');
    const aiguilleMinutes=document.getElementById('aiguille-minutes');
    const aiguilleHeures=document.getElementById('aiguille-heures');
    aiguilleSecondes.style.transform=`rotateZ(${secondesDegree}deg)`;
    aiguilleMinutes.style.transform=`rotateZ(${minutesDegree}deg)`;
    aiguilleHeures.style.transform=`rotateZ(${heuresDegree}deg)`;
}

setInterval(setClock,1000);