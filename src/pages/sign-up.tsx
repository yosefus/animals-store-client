import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="container mx-auto  px-4 flex items-center justify-center h-[calc(100dvh-12rem)]">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        
      />
    </div>
  )
}
