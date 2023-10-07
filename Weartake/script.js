import { data } from "./database.js"

const btnNav = document.querySelectorAll("#btn-nav")

btnNav.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        separaCategorias(btn.innerText)
    })
})

function renderProducts(list = []) {
    const ul = document.querySelector("#products")
    ul.innerHTML=""
    list.forEach((item) => {
        ul.insertAdjacentHTML("afterbegin", `
      
        
        <li class = "li-produtos">
        <img src="" alt="">
        
        <div class = "produtos">
        <img src = "${item.img}"class="img">
        <br>

        <div class="div-texts">
            <p class="p-tag">${item.tag}</p>
            <p class="p-name">${item.nameItem}</p>
            <p class="p-description">${item.description}</p>
            
            
        </div>
        <div class = "div-btnEPreco">
        <p class="p-price">R$ ${item.value}</p>
        <button class="btn-add">Adicionar ao carrinho</button>
        </div>
        </div>
    </li>
        `)
        const btnAdd = document.querySelector(".btn-add")
        btnAdd.addEventListener("click", () => {
            addToCart(item)
        })
    })

}
renderProducts(data)
let cartList = []
function addToCart(item) {
    // console.log(cartList.length)
    if (cartList.length == 0) {
        item.id = 1
    } else {
        item.id = parseInt(cartList[cartList.length - 1].id) + 1
        console.log(item.id)
    }
    cartList.push(item)
    console.log(item)
    // const index =cartList[cartList.length]
    renderCart(cartList)
}
function renderCart(list = []) {
    const ulCart = document.querySelector("#cart")
    ulCart.innerHTML = ""
    list.forEach((item) => {
        ulCart.insertAdjacentHTML("afterbegin", `
        <li>
            <div class="cart_edit">
        <img src = "${item.img}"class="img">
                <p class="p-name">${item.nameItem}</p>
                <p class="p-price">${item.value}</p>
            </div>
            <button class="btn-remove">Remover produto</button>
        </li>
    `)
        const btnRemove = document.querySelector(".btn-remove")
        btnRemove.addEventListener("click", () => {
            removeToCart(item)
        })
    })
}
function removeToCart(item) {
    const index = cartList.findIndex((cart) => cart.id == item.id)
    cartList.splice(index, 1)

    renderCart(cartList)
    console.log(cartList)
}

function separaCategorias(categoria){
    
    console.log(categoria)
    if(categoria != "Todos"){
        const filterArray = data.filter((item)=>{
            return item.tag[0] == categoria
        })
        renderProducts(filterArray)
    }else{
        renderProducts(data)
    }
      
}

let newArray = []
for(let i =0;i<data.length;i++){
    if(data[i].tag[0] == "Acessórios"){
        newArray.push(data[i])
    }
}
const filterArray = data.filter((item)=>{
    return item.tag[0] == "Camisetas"
})
console.log(filterArray)

