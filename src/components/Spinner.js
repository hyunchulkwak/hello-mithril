import m from 'mithril';

const Spinner = {
  controller(props) {
    return {
      state: {
        value: m.prop(typeof props.default === 'number'
          ? props.default
          : 100),
      },

      handleIncrement() {
        this.state.value(this.state.value() + 1);
      },

      handleDecrement() {
        this.state.value(this.state.value() - 1);
      },
    };
  },

  view(c) {
    return (
      <div>
        <input type="text" value={c.state.value()}/>
        <button type="button" onClick={c.handleIncrement.bind(c)}>+</button>
        <button type="button" onClick={c.handleDecrement.bind(c)}>-</button>
      </div>
    );
  },
};

export default Spinner;
