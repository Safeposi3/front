import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
export default function ToogleMode() {
  const { toggleTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(true);
  const handleOnClick = () => {
    toggleTheme();
    setTheme(!theme);
  };

  return (
    <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white border-2">
      <input
        type="checkbox"
        name="themeSwitcherThree"
        id="themeSwitcherThree"
        className="sr-only"
      />
      <span
        className={`light bg-primary flex h-9 w-9 items-center justify-center rounded ${
          theme ? "bg-white" : "bg-[#3056D3]"
        }`}
      >
        <button onClick={handleOnClick}>
          <LightModeIcon
            sx={!theme ? { color: "white" } : { color: "black" }}
          />
        </button>
      </span>
      <span
        className={`dark text-body-color flex h-9 w-9 items-center justify-center rounded ${
          !theme ? "bg-white" : "bg-[#3056D3]"
        } `}
      >
        <button onClick={handleOnClick}>
          <DarkModeIcon sx={theme ? { color: "white" } : { color: "black" }} />
        </button>
      </span>
    </div>
  );
}
