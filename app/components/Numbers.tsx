import { NumbersInterface } from "../ts/numbers";

function Numbers({ children, number, text, extraText }: NumbersInterface) {
  return (
    <div className="bg-yellow-light py-3 px-4 flex items-center w-1/3 rounded-3xl gap-x-2">
      <span>{children}</span>
      <div>
        <b className="text-sm font-bold text-gray1">
          {number}
          <span className="text-[10px] text-[#828282]">{extraText}</span>
        </b>
        <h6 className="text-[12px] text-yellow">{text}</h6>
      </div>
    </div>
  );
}

export default Numbers;
