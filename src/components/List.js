const List = {
  view(c, props) {
    return (
      <ol>
        {props.list.map((text, index) => <li key={index}>{text}</li>)}
      </ol>
    );
  },
};

export default List;
