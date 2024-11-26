interface ButtonProps {
  lable: string;
  onButtonClick: () => void;
  buttonClass: string;
}

export function ButtonComponent(props: ButtonProps) {
  const { lable, onButtonClick, buttonClass } = props;
  console.log(lable);
  return (
    <button className={buttonClass} onClick={onButtonClick}>
      {lable}
    </button>
  );
}
