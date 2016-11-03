import m from 'mithril';

const Input = {
  controller(props) {
    return {
      state: {
        text: m.prop(props.value || ''),
      },

      handleSubmit() {
        props.addItem(this.state.text());
        this.state.text('');
        return false;
      },
    };
  },

  view(c) {
    const handleSubmit = c.handleSubmit.bind(c);
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onKeyUp={m.withAttr('value', c.state.text)} value={c.state.text()}/>
        <button type="button" onClick={handleSubmit}>okay</button>
        <p>what you wrote: {c.state.text()}</p>
      </form>
    );
  },
};

export default Input;
