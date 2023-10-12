import Input from "./component/Input";

function App() {
  return (
    <form className="max-w-xl mx-auto md:p-10 bg-slate-300">
      <h1 className="text-2xl font-bold">My hooks form</h1>
      <Input
        id="username"
        lebel="User Name"
        placeholder="Enter your name"
        type="text"
      />
      <Input
        id="phone"
        lebel="Phone Number"
        placeholder="Enter your number"
        type="number"
      />
      <Input
        id="email"
        lebel="Eamil"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        id="password"
        lebel="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Input
        id="confirm password"
        lebel="Confirm password"
        placeholder="Enter your confirm password"
        type="password"
      />
      <button type="submit" className="bg-blue-300 text-white w-full p-3 rounded-lg">Submit</button>
    </form>
  );
}

export default App;
