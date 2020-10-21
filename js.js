function gen(){
    let dati=document.getElementById("dati");// tabulas dati
    let ncount=document.getElementById("ncount").value;//ciparu daudzums
    let vcount=document.getElementById("vcount").value;//vardu daudzums
    let variant=document.getElementById("variant").value;//paroļu daudzums
    let word=document.getElementById("word").value;//ieteicamais vards
     let vardi=["Apsis","Joks","Saule","Tenis","Drons","Pele","Kaķis","Zaķis" ,"Lops","Govs"];
    let skaits=3;
    let text="";  
    let txt="a12";

        for (let n=0; n<variant;n++){// paroļu daudzums
        text+=`
        <tr>
        <td>${n+1}</td>
        <td>`;
            for (let i=0; i<vcount;i++){//vārdu daudzums
                text+=vardi[Math.floor(Math.random()*10)];
            }

            for (let i=0; i<ncount;i++){//ciparu daudzums
                text+=Math.floor(Math.random()*10);
            }
        text+=`</td></tr>`;
        dati.innerHTML=text;
        }
  

}