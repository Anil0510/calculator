 let button=document.getElementsByTagName('button');
  let result=document.getElementById('result');
  for(let i=0; i<=button.length-1; i++){
button[i].onclick=function(){
    let input = this.innerText;
    updateDisplay(input)
}
  }
  function updateDisplay(input)
  {
     let display=result.innerText
     if(display=="0"){
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText=""
            result.innerText=input
        }
     }
     else{
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            if(result.innerText==""){
                result.innerText="0"
            }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}

     

  
