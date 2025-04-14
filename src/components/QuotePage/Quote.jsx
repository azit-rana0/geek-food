export default function Quote({ data }) {
  return (
    <>
      <ul className="quote">
        {data.map((item, index) => (
          <li key={index} className="quoteList">
            <p className="quoteText">{item.text}</p>
            <p className="quoteTitle">{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
