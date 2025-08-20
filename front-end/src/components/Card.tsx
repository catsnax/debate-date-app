import { Calendar } from "lucide-react";
import { Trophy } from "lucide-react";
import { Users } from "lucide-react";
import { PhilippinePeso } from "lucide-react";
import { Link } from "react-aria-components";
import { SquareArrowOutUpRight } from "lucide-react";

interface CardProps {
  isFetching: boolean;
  tournamentName: string;
  startDate: string;
  endDate: string;
  format: string;
  divisions: string[];
  debaterPrice: number;
  adjudicatorPrice: number;
  ghostJudgeFee: number;
  phaseLink: string;
  subsidizedLink: string;
  tournamentInvite: string;
}

function dateParser(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${month}-${day}-${year}`;
}

function Card(props: CardProps) {
  const firstDate = dateParser(props.startDate);
  const secondDate = dateParser(props.endDate);

  return (
    <main className="p-12 bg-white rounded-lg shadow-black shadow-sm">
      <div className="flex  text-black flex-col w-[20vw] min-w-60 h-[460px] gap-2">
        <h2 className="text-left font-semibold">{props.tournamentName}</h2>

        <div className="flex">
          <Calendar />{" "}
          <h4>
            {firstDate} to {secondDate}
          </h4>
        </div>
        <div className="flex">
          {" "}
          <Trophy /> <h4> Format: {props.format}</h4>
        </div>
        <div className="flex">
          {" "}
          <Users />
          <h2 className="text-left"> Divisions</h2>
        </div>
        <div className="flex gap-2 text-white">
          {props.divisions.includes("Open") ? (
            <div className="bg-black py-2 px-4 rounded-lg">Open </div>
          ) : (
            <></>
          )}
          {props.divisions.includes("Novice") ? (
            <div className="bg-gray-500 py-2 px-4 rounded-lg">Novice</div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex">
          {" "}
          <PhilippinePeso className="w-5" /> <h2> Pricing</h2>{" "}
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700">Debater</h4>{" "}
          <h4 className="ml-auto">₱{props.debaterPrice}</h4>
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700"> Adjudicator</h4>{" "}
          <h4 className="ml-auto">₱{props.adjudicatorPrice}</h4>
        </div>
        <div className="flex gap-6">
          <h4 className="text-gray-700"> Ghost Judge Fee</h4>{" "}
          <h4 className="ml-auto">₱{props.ghostJudgeFee}</h4>
        </div>

        <div> Registration</div>
        <Link
          className="text-black bg-white border-gray-300 border-2 p-1 px-2 flex"
          href={props.subsidizedLink}
          target="_blank"
        >
          {" "}
          Subsidized Registration
          <SquareArrowOutUpRight className="ml-auto" />
        </Link>

        <Link
          className="text-black bg-white border-gray-300 border-2 p-1 px-2 flex"
          href={props.phaseLink}
          target="_blank"
        >
          {" "}
          Phase 1 Registration
          <SquareArrowOutUpRight className="ml-auto" />
        </Link>

        <Link
          className="text-black bg-white border-gray-300 border-2  p-1 px-2 flex"
          href={props.tournamentInvite}
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
