import logo from "../assets/BEC Logo Final.svg"
export default function Header() {
    return (
        <div className="relative flex items-center justify-between w-full px-[25px] pt-[20px] bg-black bg-opacity-10 ">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col items-center space-y-1.5 ">
                <span className="block w-7 h-0.5 bg-white"></span>
                <span className="block w-7 h-0.5 bg-white"></span>
                <span className="block w-7 h-0.5 bg-white"></span>
            </div>
        </div>
    );
}