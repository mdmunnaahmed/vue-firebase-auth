let apikey = "AIzaSyDa3k6jwqN6YhOwzZk81mXubmtMlVb8NbE";
export default {
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      // Error
      const error = new Error(
        responseData.message || "Failded to authenticate"
      );
      throw error;
    }

    context.commit("setUser", {
      token: responseData.token,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
