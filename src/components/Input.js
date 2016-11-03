import m from 'mithril';

const Input = {
  controller(props) {
    return {
      state: {
        text: m.prop(props.value || ''),
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
        <input type="text" onKeyUp={m.withAttr('value', c.state.text)} value={c.state.text()}/>
        <input type="submit" value="okay"/>
      </form>
    );
  },
};

export default Input;
