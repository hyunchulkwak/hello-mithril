import m from 'mithril';

const Input = {
  controller(props) {
    return {
      state: {
        text: m.prop(props.value || ''),
      },

      handleText(e) {
        this.state.text(e.target.value);
      },

      handleSubmit(e) {
        e.preventDefault();
        props.addItem(this.state.text());
        this.state.text('');
      },
    };
  },

  view(c) {
    return (
      <form onSubmit={c.handleSubmit.bind(c)}>
        <input type="text" onKeyUp={c.handleText.bind(c)} value={c.state.text()}/>
        <button type="submit">okay</button>
      </form>
    );
  },
};

export default Input;
