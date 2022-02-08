

class Auth{
  static getCurrentUser(){
		const token = localStorage.getItem("token");
		console.log("chal gya")
		return token ? true : false;
  }

  static Login (email,password){
	  localStorage.setItem("token","valid");
  }

	static LogOut(){
		localStorage.removeItem("token");
	}
}

export default Auth;