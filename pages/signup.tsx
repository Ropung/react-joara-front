import SignUpForm from "@/components/signup/SignupForm";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col gap-2 p-4 justify-center items-center">
      <main className="w-[400px] h-full flex flex-col gap-4 bg-white p-4 rounded-md shadow-t-sm">
        <SignUpForm />
      </main>
    </div>
  );
};

export default SignUp;
