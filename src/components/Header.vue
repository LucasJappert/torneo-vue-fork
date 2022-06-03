<template>
  <div class="containerMenu">
      <div class="itemMenu">
        <span>Informacion</span>
        <div class="divDesplegable">
          <div>opcion 1</div>
          <div>opcion 2</div>
          <div>opcion 3</div>
        </div>
      </div>
      <div class="itemMenu">Información</div>
  </div>
</template>

<script>
//TODO: hacer mas tarde
export default {

}
</script>

<style scoped lang="scss">
.containerMenu{
  position:relative;
  height:30px;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: left;
  background-color: gray;
  cursor:pointer;
  & .itemMenu{
    position:relative;
    padding: 5px 10px;
    &:hover > .divDesplegable{
      display: block;
      max-height: 200px;
      position: absolute;
      left: 0px;
      top: 28px;
    }
    & .divDesplegable{
      width:100%;
      display:none;
      max-height:0px;
      transition: all 0.5s linear;
      & div{
        padding: 5px 10px;
        background-color:#444;
        &:hover{
          background-color: #555;
        }
      }
    }
  }
}
</style>