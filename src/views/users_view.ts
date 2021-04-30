import User from "../models/User";

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      lastname:user.lastname ,
      nickname: user.nickname,
      address:  user.address,
      bio: user.bio,
    }
  },

  renderMany(users: User[]) {
    return users.map(user => this.render(user));
  }
}
