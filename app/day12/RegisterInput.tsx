import { Input } from "@/components/ui/input";

interface RegisterInputProps {
  inputName: string;
  inputPlaceholder: string;
}

export default function RegisterInput({
  inputName,
  inputPlaceholder,
}: RegisterInputProps) {
  return (
    <>
      <Input
        className={`peer font-black h-9 text-[10px] border-none focus-visible:ring-blue-500`}
        type={inputName}
        id={inputName}
        placeholder=" "
      />
      <label
        htmlFor={inputName}
        className={`flex items-center h-9 justify-center text-[10px] cursor-text
                    font-black absolute top-0 left-0 px-3 py-2 text-slate-400 transition-all 
                    transform 
                    peer-placeholder-shown:scale-100 
                    scale-75 
                    peer-placeholder-shown:-translate-y-0 
                    -translate-y-3 
                    peer-placeholder-shown:-translate-x-0 
                    -translate-x-2 `}
      >
        {inputPlaceholder}
      </label>
    </>
  );
}
