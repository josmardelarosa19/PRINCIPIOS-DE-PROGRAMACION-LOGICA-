const products = document.querySelector("#products")
const filtro = document.querySelector("#filtro")

let pesitos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
});

function renderProducts(categoria) {
    let productRow = ``
    for (let index = 0; index < productosData.length; index++) {
        if (categoria !== "todos" && productosData[index].categoria !== categoria) continue
        productRow += `
    <tr>
                <td>${productosData[index].id}</td>
                <td>${productosData[index].nombre}</td>
                <td>${pesitos.format(productosData[index].precio)}</td>
                <td>${productosData[index].categoria}</td>
                <td>${productosData[index].stock}</td>
                <td>${totalStock = pesitos.format(productosData[index].precio * productosData[index].stock)}</td>
            </tr>
            `
    }
    products.innerHTML = productRow
}

document.addEventListener("DOMContentLoaded", e => {
    renderProducts("todos")
})

filtro.addEventListener("change", e => {
    renderProducts(e.target.value)
})