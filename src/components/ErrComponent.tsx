interface ErrorProps {
  info: string;
  onErrorClick: () => void;
}

export function ErrComponent(props: ErrorProps) {
  const { info, onErrorClick } = props;
  return (
    <>
      {info.length > 0 && (
        <p style={{ color: "red" }} onClick={onErrorClick}>
          {info}
        </p>
      )}{" "}
    </>
  );
}
