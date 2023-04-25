import LoginForm from "@/components/login/LoginForm";
import LoginOauth from "@/components/login/LoginOauth";

const Login = () => {
  return (
    <div className="flex flex-col gap-2 p-4 justify-center items-center">
      <main className="w-[400px] max-h-[80vh] flex flex-col gap-4 bg-white p-4 rounded-md shadow-t-sm">
        <LoginForm />
        <p className="w-full border-b-[0.5px] border-gray-400 bg-black" />
        {/* Oauth2 */}
        <LoginOauth />
      </main>
    </div>
  );
};

export default Login;
