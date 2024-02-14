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
                } 
            } catch (error) {
                console.log(error);
            }
        }
      }
}

export default useSignIn