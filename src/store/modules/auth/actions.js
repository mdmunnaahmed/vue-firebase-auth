let apikey = "AIzaSyDa3k6jwqN6YhOwzZk81mXubmtMlVb8NbE";
export default {
  async signup(context, payload) {
    const response = fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      }
    );
     await response.json()
    // const responseData = await response.json()
  },
};
