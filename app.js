function ticketSelect(id, isTrue){
    console.log(id , isTrue);
  let quantity =  getQuantity(id);
    const singlePrice = getPrice(id)
  if(isTrue){
      quantity++;
      updateQty(id,quantity)
      
  }else{
      quantity--;
      if(quantity < 1){
        updateQty(id,0);
      }
      else{
        updateQty(id,quantity)
      }   
  }
  updateTicketPrice(id, quantity, singlePrice);
  updateSubTotal();
  updateTotal(); 
}

function getQuantity(id){
    const qty = document.getElementById(`${id}-qty`).value;
     return qty;
     } 

   function updateQty(id,value){
    document.getElementById(`${id}-qty`).value = value;
   }

    function getPrice(id){
    const price =  document.getElementById(`${id}-price`).innerText;
    return price;
    }

    function updateTicketPrice(id , qty , tk){
    const money  = document.getElementById(`${id}-total`);
    if(qty < 1){
        money.innerText = 00;
    }else{
        money.innerText = (qty * parseFloat(tk)).toFixed(2);
    }
     
    }

    // sub total value 
   function  updateSubTotal(){
      const first = document.getElementById('first-class-total').innerText;
      const second = document.getElementById('second-class-total').innerText;
     const subTotal = document.getElementById('sub-total');
     subTotal.innerText = parseFloat(first) + parseFloat(second);       
   }

    // update Total value with tax
   function updateTotal(){
     const subTotal = document.getElementById('sub-total').innerText;
     const tax = document.getElementById('tax').innerText = parseFloat(subTotal) * 0.1;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = (tax + parseFloat(subTotal)).toFixed(2);

   }

   // confirmation booking part 
     function confirmButton(){
     const total =  document.getElementById('total-price').innerText;
     ticketChack = parseInt(total);
     if(ticketChack){
       document.getElementById('booking-form').style.display = "none ";
      document.getElementById('booking-confirm').style.display = "block";
      // first site 
       const first =  document.getElementById('first-class-qty').value;
      const firstSits = document.getElementById('first-sits');
       firstSits.innerText = `First class Sits:` + ` ` +  first;
         // economy class sites 
          const economy = document.getElementById("second-class-qty").value;
          const economySites = document.getElementById('economy-sits');
          economySites.innerText = `Economy class Sits:` + ` ` + economy;
           
        // total amount 
      document.getElementById('confirm-total').innerText = `Total price with 10% VAT: $` + ` ` + ticketChack;
          
     }else{
      alert("Hello! You didn't buy a ticket!!");
     }
       
     }
     
     // Back button 
     function backButton(){ 
       document.getElementById("booking-confirm").style.display = "none";
       document.getElementById("booking-form").style.display = "block";
     }

      // Thanks 