export const ActivityList = ({ array, name }) => {
  return (
    <>
      {array?.length > 0 && (
        <ul>
          <h4>{name}</h4>
          {array?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};
