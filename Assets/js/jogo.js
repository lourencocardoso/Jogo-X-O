
function chamarTd(element){
       if(element.innerHTML == ""){
          element.innerHTML = "X"
       } else{
        alert('Já esta preechindo')
       }
    vitoriaDeX();
    vitoriaDeO();
    Adversario();
}

function vitoriaDeX(){
  let tds = document.getElementsByTagName('td')
   if(tds[0].innerHTML == "X" &&  tds[1].innerHTML == "X" && tds[2].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   } else if(tds[3].innerHTML == "X" &&  tds[4].innerHTML == "X" && tds[5].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   } else if(tds[6].innerHTML == "X" &&  tds[7].innerHTML == "X" && tds[8].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   } else if(tds[0].innerHTML == "X" &&  tds[4].innerHTML == "X" && tds[8].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   } else if(tds[2].innerHTML == "X" &&  tds[4].innerHTML == "X" && tds[6].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   }  else if(tds[0].innerHTML == "X" &&  tds[3].innerHTML == "X" && tds[6].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   }  else if(tds[1].innerHTML == "X" &&  tds[4].innerHTML == "X" && tds[7].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   }  else if(tds[2].innerHTML == "X" &&  tds[5].innerHTML == "X" && tds[8].innerHTML == "X"){
    alert('Parabens vc ganhou!')
   }
}

function vitoriaDeO(){
  let tds = document.getElementsByTagName('td')
   if(tds[0].innerHTML == "O" &&  tds[1].innerHTML == "O" && tds[2].innerHTML == "O"){
    alert('Parabens vc ganhou')
   } else if(tds[3].innerHTML == "O" &&  tds[4].innerHTML == "O" && tds[5].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   } else if(tds[6].innerHTML == "O" &&  tds[7].innerHTML == "O" && tds[8].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   } else if(tds[0].innerHTML == "O" &&  tds[4].innerHTML == "O" && tds[8].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   } else if(tds[2].innerHTML == "O" &&  tds[4].innerHTML == "O" && tds[6].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   }  else if(tds[0].innerHTML == "O" &&  tds[3].innerHTML == "O" && tds[6].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   }  else if(tds[1].innerHTML == "O" &&  tds[4].innerHTML == "O" && tds[7].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   }  else if(tds[2].innerHTML == "O" &&  tds[5].innerHTML == "O" && tds[8].innerHTML == "O"){
    alert('Parabens vc ganhou!')
   }
}

function Adversario(){
  let tds = document.getElementsByTagName('td')
  var position = Math.round(8 * Math.random())
    if(tds[position].innerHTML == ''){
       tds[position].innerHTML = 'O'
    } else{
       Adversario();
    }
}


