import { CheckIcon } from "@heroicons/react/16/solid";
type params = {
  id: string;
  name: string;
  isCompleted: boolean;
  onClick: () => void;
};

export default function Names(params: params) {
  const round = params.isCompleted ? "" : "";
  const bgColor = params.isCompleted ? "" : "";
  if (params.isCompleted) {
    return (
      <div
        className="border-solid border-2 border-slate-900 rounded-3xl h-fifty w-full mb-4 px-3 flex items-center text-slate-800 bg-violet-100 cursor-pointer hover:opacity-70"
        onClick={params.onClick}
      >
        <div className="size-8 rounded-full border-solid border-2 border-slate-900 mr-4 bg-violet-600">
          <CheckIcon className="size-7 text-yellow-50" />
        </div>
        {params.name}
      </div>
    );
  } else {
    return (
      <div
        className="border-solid border-2 border-slate-900 rounded-3xl h-fifty w-full mb-4 px-3 flex items-center text-slate-800 cursor-pointer hover:opacity-70"
        onClick={params.onClick}
      >
        <div className="size-8 rounded-full border-solid border-2 border-slate-900 mr-4 bg-yellow-50"></div>
        {params.name}
      </div>
    );
  }
}
