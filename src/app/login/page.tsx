import LoginForm from "./components/LoginForm"
import VideoDemo from "./components/Demo"

export default function Login() {
  return (
    <div className="flex flex-col-reverse bg-[#F8F9FA] md:h-full md:flex-row">
      <VideoDemo />
      <LoginForm />
    </div>
  )
}
