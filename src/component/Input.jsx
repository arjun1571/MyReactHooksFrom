export default function Input({id,lebel,placeholder,type}) {
  return (
    <div className="my-4 flex-col mx-auto ">
      <div className="">
      <label htmlFor={id} className="text-lg font-semibold">
        {lebel}
      </label>
      </div>
      <div>
      <input
        className="border py-2 px-3 rounded-lg   md:w-full"
        type={type}
        placeholder={placeholder}
      />
      </div>
    </div>
  );
}
