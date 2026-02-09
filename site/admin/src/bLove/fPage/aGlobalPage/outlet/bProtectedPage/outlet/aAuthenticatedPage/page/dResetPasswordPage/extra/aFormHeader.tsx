import fullRoute from "@/bLove/gRoute/bFullRoute";


const formHeader = () => ({
  title: "Reset Password",
  subtitle: "Enter your new password...",
  submitButtonText: "Reset Password",
  links: [
    { note: "Dont't have an account?", text: "Sign Up", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute },
    { note: "Already have an account?", text: "Sign In", to: fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute },
  ],
  showSampleCredential: false
})

export default formHeader;
