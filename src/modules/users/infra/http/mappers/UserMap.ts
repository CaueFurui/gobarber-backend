export default class UserMap {
  public static toDTO(user: any) {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
}
