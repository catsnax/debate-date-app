import { Calendar } from "lucide-react";
import { Trophy } from "lucide-react";
import { Users } from "lucide-react";
import { PhilippinePeso } from "lucide-react";
import { Link } from "react-aria-components";
import { SquareArrowOutUpRight } from "lucide-react";

function Card() {
  return (
    <main className="p-12 bg-white rounded-lg shadow-2xl">
      <div className="flex  text-black flex-col w-[20vw] min-w-60 h-[460px] gap-2">
        <h2 className="text-left font-semibold">Orgullo Intervarsity</h2>

        <div className="flex">
          <Calendar /> <h4>August 17-18, 2025</h4>
        </div>
        <div className="flex">
          {" "}
          <Trophy /> <h4> Format: British Parliamentary</h4>
        </div>
        <div className="flex">
          {" "}
          <Users />
          <h2 className="text-left"> Divisions</h2>
        </div>
        <div className="flex gap-2 text-white">
          <div className="bg-black py-2 px-4 rounded-lg">Open</div>
          <div className="bg-gray-500 py-2 px-4 rounded-lg">Novice</div>
        </div>

        <div className="flex">
          {" "}
          <PhilippinePeso className="w-5" /> <h2> Pricing</h2>{" "}
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700">Debater</h4>{" "}
          <h4 className="ml-auto">₱400</h4>
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700"> Adjudicator</h4>{" "}
          <h4 className="ml-auto">₱400</h4>
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700"> Ghost Judge Fee</h4>{" "}
          <h4 className="ml-auto">₱400</h4>
        </div>

        <div> Registration</div>
        <Link
          className="text-black bg-white border-gray-300 border-2 p-1 px-2 flex"
          href="http://localhost:5174/"
          target="_blank"
        >
          {" "}
          Subsidized Registration
          <SquareArrowOutUpRight className="ml-auto" />
        </Link>

        <Link
          className="text-black bg-white border-gray-300 border-2 p-1 px-2 flex"
          href="http://localhost:5174/"
          target="_blank"
        >
          {" "}
          Phase 1 Registration
          <SquareArrowOutUpRight className="ml-auto" />
        </Link>

        <Link
          className="text-black bg-white border-gray-300 border-2  p-1 px-2 flex"
          href="http://localhost:5174/"
          target="_blank"
        >
          {" "}
          Tournament Invite
          <SquareArrowOutUpRight className="ml-auto" />
        </Link>
      </div>
    </main>
  );
}

export default Card;
