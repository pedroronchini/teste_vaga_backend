<template>
  <div class="index">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <td>Id</td>
          <td>Nome</td>
          <td>Sobre Nome</td>
          <td>NickName</td>
          <td>Endereço</td>
          <td>bio</td>
          <td>Opções</td>
        </tr>
      </thead>
      <tbody class="table-light" v-for="user in user" v-bind:key="user">
        <tr>
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.lastname}}</td>
          <td>{{user.nickname}}</td>
          <td>{{user.address}}</td>
          <td>{{user.bio}}</td>
          <td>
            <button type="button"  @click="showModalEdit = true" class="btn btn-outline-primary edit"><img src="../assets/edit.svg" alt="Editar"></button>
            <modal-edit v-if="showModalEdit" @close="showModalEdit = false" />
            <button type="button"  @click="showModalDelete = true" class="btn btn-outline-danger delete"><img src="../assets/trash-2.svg" alt="Excluir"></button>
            <modal-delete v-if="showModalDelete" @close="showModalDelete = false" />
            <button type="button"  @click="showModal = true" class="btn btn-outline-success new"><img src="../assets/plus.svg" alt="Novo"></button>
            <modal-new v-if="showModal" @close="showModal = false" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import ModalNew from './ModalNew.vue';
import ModalDelete from './ModalDelete.vue';
import ModalEdit from './ModalEdit.vue';

export default {
  name: 'Index',
  data() {
    return {
      showModalDelete: false,
      showModalEdit: false,
      showModal: false,
      user: [],
    }
  },
  mounted () {
    axios
      .get('http://localhost:3333/users')
      .then(response => (this.user = response.data))
      .catch(error => console.log(error))
  },
  props: {
    msg: String
  },
  components: {
    ModalNew,
    ModalDelete,
    ModalEdit,
  }
}
</script>

<style scoped>

.edit{
  margin-left: 0;
  margin-right: 5px;
}

.delete {
  margin-right: 5px;
}

</style>
