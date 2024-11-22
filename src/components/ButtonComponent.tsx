interface ButtonProps {
  lable: string;
  onButtonClick: () => void;
}

export function ButtonComponent(props: ButtonProps) {
  const { lable, onButtonClick } = props;
  console.log(lable);
  return <button  className="right-button" onClick={onButtonClick}>{lable}</button>;
}
