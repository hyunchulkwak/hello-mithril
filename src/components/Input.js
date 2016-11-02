import m from 'mithril';

const Input = {
  controller(props) {
    return {
      state: {
        text: m.prop(props.value || ''),
      },

      handleText(e) {
        this.state.text(e.target ? e.target.value : e.srcElement.value);
      },

      handleSubmit(e) {
        // e.preventDefault();
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false; /* eslint no-param-reassign: 0 */
        }
        props.addItem(this.state.text());
        this.state.text('');
      },
    };
  },

  view(c) {
    return (
      <form onSubmit={c.handleSubmit.bind(c)}>
        <input type="text" onKeyUp={c.handleText.bind(c)} value={c.state.text()}/>
        <input type="submit" value="okay"/>
      </form>
    );
  },
};

export default Input;
