const conditions = ["Frete grátis acima de R$350", "5% OFF no PIX", "Até 6x sem juros"];

function ConditionList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="ticker__items" role="list" aria-hidden={duplicate || undefined}>
      {conditions.map((condition) => (
        <li key={condition}>{condition}</li>
      ))}
    </ul>
  );
}

export function CommercialTicker() {
  return (
    <section className="ticker" aria-label="Condições comerciais">
      <div className="ticker__viewport">
        <div className="ticker__track">
          <div className="ticker__group">
            <ConditionList />
            <ConditionList duplicate />
            <ConditionList duplicate />
          </div>
          <div className="ticker__group" aria-hidden="true">
            <ConditionList duplicate />
            <ConditionList duplicate />
            <ConditionList duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
