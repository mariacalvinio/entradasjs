
    // obtengo el id del boton yescucho
   var boton=document.getElementById('calcular').addEventListener('click',calculo)
     // obtengo todos los valores que necesito del id
     var pak1=document.getElementById('pase_dia');
     var pak2=document.getElementById('pase_completo');
     var pak3=document.getElementById('pase_dosdias');
     var subtotal=0;
    
     function calculo(){
     
     subtotal=(pak1.value * 30) + (pak2.value * 50) + 
     (pak3.value * 45);
     console.log('el subtotal es:$'+ subtotal)
     
     
     }

    /* var butpagar=document.getElementById('btnregistro').addEventListener('click', pagar)
     var pak4=document.getElementById('camisa_evento');
     var pak5=document.getElementById('etiquetas');
     var total=0;

     function pagar(){
      if(subtotal>0){
        total= subtotal + (pak4.value *10 - 0.07) +(pak5.value *2)
        console.log('el total a paar es:$'+ total)
      }*/


     




              
              
              
              
              
              
              
              
              
              
              
              
              
              
           