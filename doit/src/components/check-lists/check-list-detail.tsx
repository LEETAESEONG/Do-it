import { CheckIcon } from "@heroicons/react/16/solid";
type Props = {
  name: string;
  setIsCompleted: (param: boolean) => void;
  isCompleted: boolean;
};

export default function CheckListDetail(params: Props) {
  if (params.isCompleted) {
    return (
      <div className="h-16 flex justify-center items-center bg-violet-200 border-2 border-solid border-slate-900 rounded-3xl desktop:col-start-2 desktop:col-end-12 desktop:mb-5 tablet:w-full tablet:mb-5 phone:w-full phone:mb-4">
        <div
          onClick={() => {
            params.setIsCompleted(false);
          }}
          className="size-8 rounded-full border-solid border-2 border-slate-900 mr-4 bg-violet-600 cursor-pointer"
        >
          <CheckIcon className="size-7 text-yellow-50" />
        </div>
        <p className="m-0 underline underline-offset-auto">{params.name}</p>
      </div>
    );
  }
  return (
    <div className="h-16 flex justify-center items-center border-2 border-solid border-slate-900 rounded-3xl desktop:col-start-2 desktop:col-end-12 desktop:mb-5 tablet:w-full tablet:mb-5 phone:w-full phone:mb-4">
      <div
        onClick={() => {
          params.setIsCompleted(true);
        }}
        className="size-8 mr-4 border-2 bg-yellow-50 border-slate-900 border-solid rounded-full cursor-pointer"
      ></div>
      <p className="m-0 underline underline-offset-auto">{params.name}</p>
    </div>
  );
}
