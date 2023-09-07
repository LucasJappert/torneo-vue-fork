<template>
  <div>
     <div class="Telefonos">Teléfonos Útiles</div>
        
            <div class="contenedor">
                <div class="Fila">
                    <img href="tel:+5403493480441" src="../assets/imagenes/telefonos/Bomberos.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Hospital.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Policia.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Farm_Costa.jpeg" class="Tel"/>
                </div>   
                <div class="Fila"> 
                    <img src="../assets/imagenes/telefonos/Farm-Beccaria.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Farm-Col.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Farm-Cor.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Farm-Welm.jpeg" class="Tel"/>
                </div>
                <div class="Fila">    
                    <img src="../assets/imagenes/telefonos/Est-Sol.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Est-Shell.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Hotel-Vera.jpeg" class="Tel"/>
                    <img src="../assets/imagenes/telefonos/Hotel-LasColonias.jpeg" class="Tel"/>
                </div>
           
         </div>
        
  </div>
</template>

<script>
export default {

}
</script>

<style>

.Telefonos{
    font-size: 1.5em;
    padding: 5px;
    font-weight: bold;
    
}
.Tel {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.Fila {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 100%;
}

.Fila img {
    max-width: calc(20% - 20px); /* 25% para 4 imágenes por fila, ajusta según lo necesites */
    height: auto;
}
/* Media query para dispositivos más pequeños (menos de 768px) */
@media (max-width: 768px) {
  .Fila {
    flex-direction: column; /* Cambia a una sola columna */
  }
  .Fila img {
    max-width: 100%; /* Las imágenes ocuparán el 100% del ancho en dispositivos móviles */
    margin: 0; /* Elimina el margen para que las imágenes estén pegadas */
  }
}






</style>