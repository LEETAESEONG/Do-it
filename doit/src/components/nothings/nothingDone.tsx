import Image from "next/image";
import nothingDoneLarge from "./assets/no-done-large.png";
import nothingDoneSmall from "./assets/no-done-small.png";

export default function NothingDone() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid justify-items-center">
        <Image
          className="hidden tablet:block desktop:block"
          src={nothingDoneLarge}
          alt="nothingDoneLarge"
        />
        <Image
          className="block tablet:hidden desktop:hidden"
          src={nothingDoneSmall}
          alt="nothingDoneSmall"
        />
        <div className="grid mt-4 justify-items-center">
          <p className="m-0 text-nothing">할 일이 없어요.</p>
          <p className="m-0 text-nothing">TODO를 새롭게 추가해주세요!</p>
        </div>
      </div>
    </div>
  );
}
