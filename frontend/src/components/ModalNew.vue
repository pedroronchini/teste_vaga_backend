<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Criar novo usuário
          </slot>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal" >
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label label">Nome</label>
                <input type="text" class="form-control input" id="name" aria-describedby="name" placeholder="Nome">
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label label">Sobrenome</label>
                <input type="text" class="form-control input" id="lastname" aria-describedby="lastname" placeholder="Sobremome">
              </div>
              <div class="mb-3">
                <label for="nickname" class="form-label label">Nicknickname</label>
                <input type="text" class="form-control input" id="nickname" aria-describedby="nickname" placeholder="NickName">
              </div>
              <div class="mb-3">
                <label for="adress" class="form-label label">Endereço</label>
                <input type="text" class="form-control input" id="adress" aria-describedby="adress" placeholder="Endereço(Ex: Rua, Número, Cidade)">
              </div>
              <div class="mb-3">
                <label for="name" class="form-label label">Biografia</label>
                <textarea class="form-control" id="bio" rows="2" aria-describedby="bio"></textarea>
              </div>
              <div class="input-date date">
                <div class="mb-3">
                <label for="datecreate" class="form-label label">Data da criação</label>
                <input type="date" class="form-control" id="datecreate" aria-describedby="datecreate">
              </div>
              <div class="mb-3">
                <label for="dateupdate" class="form-label label">Data da ultima atualização</label>
                <input type="date" class="form-control" id="dateupdate" aria-describedby="dateupdate">
              </div>
              </div>
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <button type="submit" class="btn btn-primary">Enviar</button>
          <button type="button" class="btn btn-danger" @click="close" aria-label="Close modal">Fechar</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
    flex-direction: row;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .input {
    height: 25px;
  }

  .label {
    margin-top: 5px;
    margin-bottom: 0;
  }

  .input-date {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  
  .date {
    margin-right: 20px;
  }
</style>