import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
     <div className="container mx-auto  px-4 flex items-center justify-center h-[calc(100dvh-12rem)]">
        <SignIn
           path="/sign-in"
           routing="path"
           signUpUrl='/sign-up'
        />
    </div>
  )
}
