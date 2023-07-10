type DrinkInfoProps = {
  title: string;
  info: string;
};

export const DrinkInfo = ({ title, info }: DrinkInfoProps) => {
  return (
    <div className="drink-info">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};
