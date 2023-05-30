export default function Balance() {
  return (
    <div className="flex items-center w-fit">
      <span className="h-full rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-[#3056D3] py-3 px-4 text-base uppercase text-white">
        USD
      </span>
      <input
        type="text"
        placeholder="$0.00"
        className="rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-2 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
      />
    </div>
  );
}
