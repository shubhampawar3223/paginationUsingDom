var r,count,data,k1,k2,k3,k;
let  tableElement=tableInsertElement("table","2px solid black");
tableElement.style.margin="auto";
tableElement.style.marginTop="7%";
tableElement.style.textAlign="center";
tableElement.style.fontSize = "xx-large";
        let  tHeadElement = tableInsertElement("thead","2px solid black");
        tHeadElement.style.backgroundColor ="#1785d4";
        let  thId = tableInsertElement("th","2px solid black");
        let  thName = tableInsertElement("th","2px solid black");
        let  thEmail = tableInsertElement("th","2px solid black");
        thId.innerHTML ="Id"
        thName.innerHTML ="Name"
        thEmail.innerHTML ="Email"
        
        let tBody= tableInsertElement("tbody","2px solid black");
        tBody.style.backgroundColor="#cacdcf";
        let tR1 = tableInsertElement("tr","2px solid black");
        let tRH11 = tableInsertElement("td","2px solid black")
        let tRH12 = tableInsertElement("td","2px solid black")
        let tRH13 = tableInsertElement("td","2px solid black")
        
        let tR2 = tableInsertElement("tr","2px solid black");
        let tRH21 = tableInsertElement("td","2px solid black")
        let tRH22 = tableInsertElement("td","2px solid black")
        let tRH23 = tableInsertElement("td","2px solid black")

        let tR3 = tableInsertElement("tr","2px solid black");
        let tRH31 = tableInsertElement("td","2px solid black")
        let tRH32 = tableInsertElement("td","2px solid black")
        let tRH33 = tableInsertElement("td","2px solid black")
    
        let tR4 = tableInsertElement("tr","2px solid black");
        let tRH41 = tableInsertElement("td","2px solid black")
        let tRH42 = tableInsertElement("td","2px solid black")
        let tRH43 = tableInsertElement("td","2px solid black")
        
        let tR5 = tableInsertElement("tr","2px solid black");
        let tRH51 = tableInsertElement("td","2px solid black")
        let tRH52 = tableInsertElement("td","2px solid black")
        let tRH53 = tableInsertElement("td","2px solid black")
          
        let tR6 = tableInsertElement("tr","2px solid black");
        let tRH61 = tableInsertElement("td","2px solid black")
        let tRH62 = tableInsertElement("td","2px solid black")
        let tRH63 = tableInsertElement("td","2px solid black")

        let tR7 = tableInsertElement("tr","2px solid black");
        let tRH71 = tableInsertElement("td","2px solid black")
        let tRH72 = tableInsertElement("td","2px solid black")
        let tRH73 = tableInsertElement("td","2px solid black")

        let tR8 = tableInsertElement("tr","2px solid black");
        let tRH81 = tableInsertElement("td","2px solid black")
        let tRH82 = tableInsertElement("td","2px solid black")
        let tRH83 = tableInsertElement("td","2px solid black")

        let tR9 = tableInsertElement("tr","2px solid black");
        let tRH91 = tableInsertElement("td","2px solid black")
        let tRH92 = tableInsertElement("td","2px solid black")
        let tRH93 = tableInsertElement("td","2px solid black")

        let tR10 = tableInsertElement("tr","2px solid black");
        let tRH101 = tableInsertElement("td","2px solid black")
        let tRH102 = tableInsertElement("td","2px solid black")
        let tRH103 = tableInsertElement("td","2px solid black")
        
        
           function tableInsertElement(element,borderStyle =""){
              
                let k = document.createElement(element);
                k.style.border = borderStyle;
                return k;
            }

let hover_div = document.createElement("div");
hover_div.setAttribute("class","_center");
hover_div.style.textAlign ="center";
hover_div.style.marginTop= "2%"


let panig = document.createElement("div");
panig.style.display = "inline-block";

let an1 = document.createElement("a");
an1.href ="#";
an1.innerHTML =1;
styleAnchorTabs(an1,"black","left","8px 16px","thick solid #ddd","0px 4px")


let an2 = document.createElement("a");
an2.innerHTML =2;
styleAnchorTabs(an2,"black","left","8px 16px","thick solid #ddd","0px 4px")


let an3 = document.createElement("a");
an3.innerHTML =3;
styleAnchorTabs(an3,"black","left","8px 16px","thick solid #ddd","0px 4px")


let an4 = document.createElement("a");
an4.innerHTML =4;
styleAnchorTabs(an4,"black","left","8px 16px","thick solid #ddd","0px 4px")

let an5 = document.createElement("a");
an5.innerHTML =5;
styleAnchorTabs(an5,"black","left","8px 16px","thick solid #ddd","0px 4px")


var p_count=1;
let moveBackAnchor = document.createElement("a");
moveBackAnchor.innerHTML ="&laquo";
styleAnchorTabs(moveBackAnchor,"black","left","8px 16px","thick solid #ddd","0px 4px")
moveBackAnchor.addEventListener("click",()=>{
            if(p_count >= 2){
               p_count=p_count-1;
               an1.innerHTML =p_count;
               an2.innerHTML =p_count+1;
               an3.innerHTML =p_count+2;
               an4.innerHTML =p_count+3;
               an5.innerHTML =p_count+4;
            }       
})

let moveFrontAnchor = document.createElement("a");
moveFrontAnchor.innerHTML ="&raquo";
styleAnchorTabs(moveFrontAnchor,"black","left","8px 16px","thick solid #ddd","0px 4px")
moveFrontAnchor.addEventListener("click",()=>{
    if(p_count<=5){
       p_count=p_count+1;
               an1.innerHTML =p_count;
               an2.innerHTML =p_count+1;
               an3.innerHTML =p_count+2;
               an4.innerHTML =p_count+3;
               an5.innerHTML =p_count+4;
    }       
})

function styleAnchorTabs(element, colour,fl,pad,bor,marg){
    element.href ="#";
    element.style.color = colour;
    element.style.float = fl;
    element.style.padding = pad;
    element.style.border = bor;
    element.style.margin = marg;
}

//onclick event of pagination elements
an1.addEventListener("click",call_function); 
an2.addEventListener("click",call_function)
an3.addEventListener("click",call_function)
an4.addEventListener("click",call_function)
an5.addEventListener("click",call_function)
function call_function(e){
    let temp=e.target.innerHTML;
    fetch_data(temp);
}

//mouseover event pagination elements
an1.addEventListener("mouseover",mouse_over);
an2.addEventListener("mouseover",mouse_over);
an3.addEventListener("mouseover",mouse_over);
an4.addEventListener("mouseover",mouse_over);
an5.addEventListener("mouseover",mouse_over);
function mouse_over(event){
        event.target.style.backgroundColor = "orange";
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 150);
}

fetch_data(1);

function fetch_data(r){
let request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);

request.send();

request.onload =function(){
     data  = JSON.parse(this.response);
      show_data(data,r);
}
}
let t;
function show_data(data,r){
    k=data;
        count=r*10-10;
        let t ="tRH";
        tRH11.innerHTML= data[count].id
        tRH12.innerHTML=data[count].name
        tRH13.innerHTML= data[count].email        

        tRH21.innerHTML=data[count+1].id
        tRH22.innerHTML=data[count+1].name
        tRH23.innerHTML=data[count+1].email
        
        tRH31.innerHTML=data[count+2].id
        tRH32.innerHTML=data[count+2].name
        tRH33.innerHTML=data[count+2].email

        tRH41.innerHTML=data[count+3].id
        tRH42.innerHTML=data[count+3].name
        tRH43.innerHTML=data[count+3].email

        tRH51.innerHTML=data[count+4].id
        tRH52.innerHTML=data[count+4].name
        tRH53.innerHTML=data[count+4].email

        tRH61.innerHTML=data[count+5].id
        tRH62.innerHTML=data[count+5].name
        tRH63.innerHTML=data[count+5].email

        tRH71.innerHTML=data[count+6].id
        tRH72.innerHTML=data[count+6].name
        tRH73.innerHTML=data[count+6].email

        tRH81.innerHTML=data[count+7].id
        tRH82.innerHTML=data[count+7].name
        tRH83.innerHTML=data[count+7].email

        tRH91.innerHTML=data[count+8].id
        tRH92.innerHTML=data[count+8].name
        tRH93.innerHTML=data[count+8].email

        tRH101.innerHTML=data[count+9].id
        tRH102.innerHTML=data[count+9].name
        tRH103.innerHTML=data[count+9].email

        
}

document.body.append(tableElement)
         tableElement.append(tHeadElement)
         tableElement.append(tBody)
         tHeadElement.append(thId,thName,thEmail)
         tBody.append(tR1,tR2,tR3,tR4,tR5,tR6,tR7,tR8,tR9,tR10);
         tR1.append(tRH11,tRH12,tRH13);
         tR2.append(tRH21,tRH22,tRH23)
         tR3.append(tRH31,tRH32,tRH33)
         tR4.append(tRH41,tRH42,tRH43)
         tR5.append(tRH51,tRH52,tRH53)
         tR6.append(tRH61,tRH62,tRH63)
         tR7.append(tRH71,tRH72,tRH73)
         tR8.append(tRH81,tRH82,tRH83)
         tR9.append(tRH91,tRH92,tRH93)
         tR10.append(tRH101,tRH102,tRH103)
document.body.append(hover_div);
 hover_div.append(panig);
panig.append(moveBackAnchor,an1,an2,an3,an4,an5,moveFrontAnchor)
