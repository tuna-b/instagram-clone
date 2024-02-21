import { auth } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const useSignIn = () => {
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const login = async (inputs) => {
        if (!inputs.email && !inputs.password) {
            // Show toast
            console.log("Please fill out all of the fields.");
            return;
        } else {
            try {
                const user = await signInWithEmailAndPassword(inputs.email, inputs.password);

                if (user) {
                    console.log("User signed in successfully!");
                    // localStorage.setItem("user-info", JSON.stringify(user))
                    console.log(user)
                    console.log("user info: ", user.following, user.followers, user.uid, user.email)
                } 
            } catch (error) {
                console.log(error);
            }
        }
      }
      return {loading, error, login}
}

export default useSignIn