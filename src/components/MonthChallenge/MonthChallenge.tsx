import "./monthChallenge.css";

export default function MonthChallenge() {

  return (
    <div className="monthChallenge--wrapper">
      <textarea className="monthChallenge--textarea" rows={5}>hello</textarea>
      <footer className="monthChallenge--footer">Moje výzva pro tento měsíc</footer>
    </div>
  );
}