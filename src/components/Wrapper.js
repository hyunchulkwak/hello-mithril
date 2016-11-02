const Wrapper = {
  view(c, props, children) {
    return (
      <div>
        <strong>{props.title}</strong>
        {children}
      </div>
    );
  },
};

export default Wrapper;
