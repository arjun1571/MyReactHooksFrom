import Input from "./component/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("enter your valid name"),
  phone: yup.string().required().matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,"pleade provide valid number"),
  email: yup.string().required("enter your valid email").email("email is not valid"),
  password: yup.string().min(6,"password must be 6 charter"),
  confirmPassword: yup.string().oneOf([yup.ref("password")],"do not match password")
})

function App() {
  const {handleSubmit,register,formState:{ errors }}=useForm(
    {
      resolver: yupResolver(schema)
    }
  );

    // console.log(errors);
  const formSubmit = data =>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="max-w-xl mx-auto md:p-10 bg-slate-300">
      <h1 className="text-2xl font-bold">My hooks form</h1>
      <Input
        id="username"
        lebel="User Name"
        placeholder="Enter your name"
        type="text"
        register = {{...register("username")}}
        errorMessage={errors?.username?.message}
      />
      <Input
        id="phone"
        lebel="Phone Number"
        placeholder="Enter your number"
        type="number"
        register = {{...register("phone")}}
        errorMessage={errors?.phone?.message}
      />
      <Input
        id="email"
        lebel="Eamil"
        placeholder="Enter your email"
        type="text"
        register = {{...register("email")}}
        errorMessage={errors?.email?.message}
      />
      <Input
        id="password"
        lebel="Password"
        placeholder="Enter your password"
        type="password"
        register = {{...register("password")}}
        errorMessage={errors?.password?.message}
      />
      <Input
        id="confirmPassword"
        lebel="Confirm password"
        placeholder="Enter your confirm password"
        type="password"
        register = {{...register("confirmPassword")}}
        errorMessage={errors?.confirmPassword?.message}
      />
      <button type="submit" className="bg-blue-300 text-white w-full p-3 rounded-lg">Submit</button>
    </form>
  );
}

export default App;
