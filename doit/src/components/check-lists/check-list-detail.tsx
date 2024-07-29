type Props = {
  name: string;
};

export default function CheckListDetail(params: Props) {
  return (
    <div className="h-16 flex justify-center items-center border-2 border-solid border-slate-900 rounded-3xl desktop:col-start-2 desktop:col-end-12 desktop:mb-5 tablet:w-full phone:w-full">
      <div className="size-8 mr-4 border-2 bg-yellow-50 border-slate-900 border-solid rounded-full"></div>
      <p className="m-0 underline underline-offset-auto">{params.name}</p>
    </div>
  );
}
