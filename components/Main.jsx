import SearchBar from "./SearchBar";

export default function Main() {
  return (
    <div className="flex flex-col bg-main-bg h-[650px]   bg-cover bg-center  lg:rounded-r-full">
      <div className="flex flex-col items-center gap-[300px] lg:gap-[150px] mt-[80px] lg:mt-[190px]">
        <h1 className="text-[32px] lg:text-[50px] leading-[48px] text-center text-white font-bold lg:w-[572px]">
          Find your new favorite dish!
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}
