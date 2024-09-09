import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {kospi_list} from "../../../public/KOSPI.json"

function Home() {
  return (
    <form className="flex flex-col space-y-6 items-center overflow-y-auto">
      <div className="flex flex-col items-center space-y-3 mb-14">
        <h2 className="text-4xl font-bold mt-6">Chat List</h2>
      </div>
      {kospi_list.map((item)=>(
      <Link to={`/chat/${item.name}`} className="w-5/6">
        <Button
          className="flex items-center justify-start w-full  h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-14" src="image/hd-logo.png" alt={item.name} />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">{item.name}</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
      ))}
    </form>
  );
}

export default Home;
