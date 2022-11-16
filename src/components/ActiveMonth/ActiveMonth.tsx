import "./activeMonth.css";

interface Props {
  activeMonth: string;
}

export default function ActiveMonth({ activeMonth }: Props) {
  return (
    <div className="activeMonth--wrapper">
      <h3>Denní kroky k úspěchu</h3>
      <p className="activeMonth--month">na měsíc: {activeMonth}</p>
    </div>
  );
}