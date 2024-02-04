import propiedadesVenta from "./propiedades_venta.js";

const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("soloPropiedadesVenta")

    propiedadesVenta.forEach((propiedad) => {
        const card = document.createElement("div")
        card.className = "col-md-a mb-4"
        card.innerHTML = `
            
        <div class="card">
        <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la propiedad"
        />
        <div class="card-body">
        <h5 class="card-title">${propiedad.title}</h5>
        <p class="card-text">${propiedad.description}</p>
        <p class="card-text">${propiedad.address}</p>
        <p>
        <i class="fas fa-bed"></i>${propiedad.bedrooms}
        <i class="fas fa-bath"></i> ${propiedad.bathrooms}
        <i class="fas fa-dollar-sign"></i> ${propiedad.price}
    
    
        ${propiedad.smoking ? 
            `<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>` :
            `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
        ${propiedad.pets ? 
            `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>` : 
            `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
        </div>
       </div> 
    `;
    container.appendChild(card)


    })

};

mostrarPropiedadesVenta()