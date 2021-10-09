if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var count = 0;
var total1 = 100;
var total2 = 100;
var rel = 0;

//modal

const modal = document.querySelector(".modal1");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    if(rel == 1){
        location.reload()
    }
    rel = 1
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-outline-light')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    // alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var purchaseRow = document.createElement('div')
    purchaseRow.classList.add('purchase-row')
    // purchaseRow.classList.add('cart-row')
    var purchaseItems = document.getElementsByClassName('purchase-items')[0]
    var purchaseItemNames = purchaseItems.getElementsByClassName('purchase-item-title')
    var plist = []
    var c = 0;
    var co = count;
    while (cartItems.hasChildNodes()) {
        var element = cartItems.firstChild.parentElement.parentElement
        console.log(element)
        // console.log(element.getElementsByClassName('cart-item-title')[1].innerText)
        // if(c==0){
        //     title = "IEEE-DAY"
        //     c = 1;
        // }
        
            title = element.getElementsByClassName('cart-item-title')[0].innerText
        
        // console.log(title)
        plist.push(title)
        count -= 1
        cartItems.removeChild(cartItems.firstChild)
    }
    // console.log(purchaseItems)
    for(var i=1;i<plist.length;i++){
        // console.log(plist[i])
    
        var purchaseRowContents = `
        <div class="purchase-item purchase-column ">
            <span class="purchase-item-title "> ${i}. ${plist[i]}</span>
        </div> `
        purchaseRow.innerHTML += purchaseRowContents
       
    }
    // if(co>=3){
    //     val1 = '₹' + Math.round(total1 * 80) / 100 
    //     val2 = '₹'+ Math.round(total2 * 80) / 100
    // }
    // else{
    //     val1 = '₹' +  Math.round(total1 * 100) / 100 
    //     val2 = '₹'+ Math.round(total2 * 100) / 100
    // }
    
    if(co>=2){
    if(total1>=400){
        val1 = '₹' + Math.round(total1 * 80) / 100 
    } 
    else if(total1>=300){
        val1 = '₹' + Math.round(total1 * 82) / 100 
    } 
    else if(total1>=200){
        val1 = '₹' + Math.round(total1 * 85) / 100 
    }
    else if(total1>=100){
        val1 = '₹' + Math.round(total1 * 90) / 100 
    }
    else {
        val1 = '₹' + Math.round(total1 * 100) / 100 
    } 
  } else {
       val1 = '₹' + Math.round(total1 * 100) / 100            
    }

    if(co>=2){
    if(total2>=400){
        val2 = '₹' + Math.round(total2 * 80) / 100 
    } 
    else if(total2>=300){
        val2 = '₹' + Math.round(total2 * 82) / 100 
    } 
    else if(total2>=200){
        val2 = '₹' + Math.round(total2 * 85) / 100 
    }
    else if(total2>=100){
        val2 = '₹' + Math.round(total2 * 90) / 100 
    }
    else {
        val2 = '₹' + Math.round(total2 * 100) / 100 
    }
} else {
    val2 = '₹' + Math.round(total2 * 100) / 100 
}

    var purchaseRowContents = `
    <div class="purchase-total">
       <strong class="purchase-item purchase-total-title">Amount(For IEEE) : </strong>
       <span class="purchase-price purchase-total-price">${val1}</span>
    </div>
    <div class="purchase-total">
       <strong class="purchase-item purchase-total-title">Amount(For Non-IEEE) :</strong>
       <span class="purchase-price purchase-total-price">${val2}</span>
       </div> 
       <div><img class="qr" src="images/siri_qr_code.jpeg"></img>
       </div>
       <p class="register-p">Make your payment by scanning the QR code or through gpay/PhonePe <br><a class="mobilesOnly contactlink" href="tel:+91 9182835941" >+91 9182835941</a><br>(Siri Vemulapalli) </p>
       <p class="register-p"><strong>Note:- Take a Screenshot of the payment and click on Next</strong></p>
    <div class="purchase-register "><button class="btn btn-primary btn-purchase1"><a style="color:#fff;" href="https://forms.gle/iaXgqXkLmCR3FA1G6">Next</a></button></div>
    `
    purchaseRow.innerHTML += purchaseRowContents
    console.log(count,val1,val2)
    purchaseItems.append(purchaseRow)
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    // console.log(event.target.parentElement.parentElement)
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var price = shopItem.getElementsByClassName('cart-price')[0].innerText
    buttonClicked.parentElement.parentElement.remove()
    if(parseFloat(price.replace('₹', ''))>0){
        console.log(parseFloat(price.replace('₹', '')))
        count = count-1;
    }
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price1 = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var price2 = shopItem.getElementsByClassName('shop-item-price')[1].innerText
    // console.log(price1,price2)
    addItemToCart(title, price1,price2)
    updateCartTotal()
}

function addItemToCart(title, price1,price2) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    
    if(parseFloat(price1.replace('₹', ''))>0){
        // console.log(parseFloat(price1.replace('₹', '')))
        count = count+1;
    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price1}</span>
        <span class="cart-price cart-column">${price2}</span>
        <div class="cart-remove cart-column">
            <button class="btn btn-outline-light" style="background-color:white;color:black" type="button"><i class="fas fa-trash-alt"></i></button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-outline-light')[0].addEventListener('click', removeCartItem)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total1 = 0
    total2 = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        // console.log(cartRow)
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price1 = parseFloat(priceElement.innerText.replace('₹', ''))
        var priceElement = cartRow.getElementsByClassName('cart-price')[1]
        var price2 = parseFloat(priceElement.innerText.replace('₹', ''))
        // var quantity = quantityElement.value
        // console.log(price1,price2)
        total1 = total1 + (price1 )
        total2 = total2 + (price2 )
        // console.log(total1,total2)
        // console.log(count)
    }
    total1 = Math.round(total1 * 100) / 100
    total2 = Math.round(total2 * 100) / 100


    // if(count>=3){
        // document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 80) / 100 
        // document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 80) / 100
        // document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 20) / 100 
        // document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 20) / 100
    // }
    // else{
    //     document.getElementsByClassName('cart-total-price')[2].innerText = '₹' +  Math.round(total1 * 100) / 100 
    //     document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 100) / 100
    //     document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + 0
    //     document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ 0
    // }
    if(count>=2){
    if(total1>=400){
        document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 80) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 20) / 100 
    } 
    else if(total1>=300){
        document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 82) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 18) / 100 
    } 
    else if(total1>=200){
        document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 85) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 15) / 100 
    }
    else if(total1>=100){
        document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 90) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 10) / 100 
    }
    else {
        document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 100) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 0) / 100 
    }
} else {
    document.getElementsByClassName('cart-total-price')[2].innerText = '₹' + Math.round(total1 * 100) / 100 
    document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + Math.round(total1 * 0) / 100 
}
if(count>=2){
    if(total2>=400){
        document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 80) / 100
        document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 20) / 100
    } 
    else if(total2>=300){
        document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 82) / 100
        document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 18) / 100
    } 
    else if(total2>=200){
        document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 85) / 100
        document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 15) / 100
    }
    else if(total2>=100){
        document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 90) / 100
        document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 10) / 100
    }
    else {
        document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 100) / 100
        document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 0) / 100
    } 
} else {
    document.getElementsByClassName('cart-total-price')[3].innerText = '₹'+ Math.round(total2 * 100) / 100
    document.getElementsByClassName('cart-total-price')[1].innerText = '₹'+ Math.round(total2 * 0) / 100
} 
    
}