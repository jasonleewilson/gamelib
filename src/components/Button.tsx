interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({
  children,
  onClick,
  color = "white",
}: {
  children: string;
  color: string;
  onClick: () => void;
}): Props => {
  return (
    <div>
      <button type='button' className={"btn bg-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
