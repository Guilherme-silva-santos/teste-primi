import { Input } from "../presentation/atomic/molecules/Input";
import { UploadInput } from "../presentation/atomic/organisms/UploadInput";

export function AddMovie() {
  return (
    <div className="flex flex-wrap items-center justify-center md:flex-nowrap flex-row gap-10 ">
      <UploadInput onChange={() => {}} />
      <div>
        <form action="post">
          <Input iconName="MdTitle" onChange={() => {}} value="" />
          <Input iconName="MdTitle" onChange={() => {}} value="" />
          <Input iconName="MdTitle" onChange={() => {}} value="" />
          <Input iconName="MdTitle" onChange={() => {}} value="" />
          <Input iconName="MdTitle" onChange={() => {}} value="" />
        </form>
      </div>
    </div>
  );
}
