function Price({ currency, num, numSize }) {
  return (
    <>
      <span className={numSize}>{currency + num}</span>
    </>
  );
}

export default Price;
