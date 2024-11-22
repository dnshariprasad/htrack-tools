interface LabledTextProps {
  lable: string;
  value: string;
}

export function LabledTextComponent(props: LabledTextProps) {
  const { lable, value } = props;
  console.log(lable);
  return (
    <div className="backgroun-color">
      <p className="bold-text">{lable}</p>
      <p>{value}</p>
    </div>
  );
}
