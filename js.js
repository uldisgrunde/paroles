function gen(){
    let dati=document.getElementById("dati");// tabulas dati
    let ncount=document.getElementById("ncount").value;//ciparu daudzums
    let vcount=document.getElementById("vcount").value;//vardu daudzums
    let variant=document.getElementById("variant").value;//paroļu daudzums
    let check=document.getElementById("code").checked;//šifrēt
    let word=document.getElementById("word").value;//ieteicamais vards
    let vardi=["Apsis","Joks","Saule","Tenis","Drons","Pele","Kaķis","Zaķis" ,"Lops","Govs"];
   // let vardi=vards;
   // vardi.push(word);
    let skaits=3;
    let text="";  
    let txt="a12";

        for (let n=0; n<variant;n++){// paroļu daudzums
        text+=`
        <tr>
        <td>${n+1}</td>
        <td>`;
            for (let i=0; i<vcount;i++){//vārdu daudzums
                let kur=Math.floor(Math.random()*vcount);
                if (i==kur){
                    text+=word;
                }else{
                    text+=vardi[Math.floor(Math.random()*vardi.length)];
                }
            }

            for (let i=0; i<ncount;i++){//ciparu daudzums
                text+=Math.floor(Math.random()*10);
            }
        text+=`</td></tr>`;
        if (check == true){
            text=text.replace(/a/gi, "@");
            text=text.replace(/s/gi, "$");
            text=text.replace(/o/gi, "0");
            text=text.replace(/i/gi, "1");
        }
        dati.innerHTML=text;
        }
  

}