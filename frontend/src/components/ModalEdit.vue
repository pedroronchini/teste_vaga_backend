<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Editar usuário
          </slot>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal" >
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name" 
                  aria-describedby="name" 
                  placeholder="Nome(Se você quiser deixar o mesmo nome, apenas repita)"
                  v-model="name"
                >
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label">Sobre Nome</label>
                <input 
                  type="text"
                  class="form-control"
                  id="lastname"
                  aria-describedby="lastname" 
                  placeholder="Sobrenome(Se você quiser deixar o mesmo nome, apenas repita)"
                  v-model="lastname"
                >
              </div>
              <div class="mb-3">
                <label for="nickname" class="form-label">Nicknickname</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="nickname" 
                  aria-describedby="nickname"  
                  placeholder="NickName"
                  v-model="nickname"
                >
              </div>
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <button type="submit" class="btn btn-primary" @click="updateUser">Enviar</button>
          <button type="button" class="btn btn-danger" @click="close" aria-label="Close modal">Fechar</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Modal',
  data() {
    return {
      name: '',
      lastname: '',
      nickname: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },

    updateUser(id) {
      axios
      .put('http://localhost:3333/users/' + id)
      .then(response => (this.user = response.data))
      .catch(error => console.log(error))
    }
      
  },
};
</script>


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
</style>