import { cn } from "./className";

export function styleComponent({
  counter,
  label,
  input,
  buttons,
  search,
  navbar,
}) {
  const variants = {
    counter: {
      minus:
        "w-2.5 h-[2px] rounded-lg bg-gunmetal flex justify-center items-center",
      plus: "w-2.5 h-[2px] rounded-lg bg-gunmetal flex justify-center items-center after:w-2.5 after:h-[2px] after:rounded-lg after:bg-gunmetal after:flex after:justify-center after:items-center after:absolute after:top-[8px] after:rotate-90 ",
      number: "font-muli text-dark-grey font-bold text-sm",
    },
    label: {
      base: "text-dark-grey text-[9px] font-muli font-extrabold mb-1 absolute",
    },
    input: {
      search:
        "font-muli text-dark-grey text-sm font-normal placeholder:font-muli placeholder:text-soft-grey",
      inputClick:
        "flex border border-light-grey rounded-2xl max-w-[375px] shadow-3xl cursor-pointer flex-col",
    },
    buttons: {
      submit:
        "mt-8 bg-crimson/90 px-7 py-4 rounded-2xl text-light-grey font-muli font-normal",
    },
    search: {
      close:
        "w-8 h-1 bg-dark-grey block rounded-md transform rotate-45 origin-[60%_0%] after:w-8 after:h-1 after:bg-dark-grey after:block after:rounded-md after:rotate-90",
    },
    navbar: {
      parent: "flex rounded-2xl border-light",
    },
  };
  return cn(
    variants.counter[counter],
    variants.label[label],
    variants.input[input],
    variants.buttons[buttons],
    variants.search[search],
    variants.navbar[navbar]
  );
}
