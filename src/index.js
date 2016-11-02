import m from 'mithril';
import Spinner from 'components/Spinner';
import Input from 'components/Input';
import List from 'components/List';

const App = {
  controller(props) {
    return {
      state: {
        list: m.prop(props.list)
      },

      addItem(item) {
        this.state.list([
          ...this.state.list(),
          item
        ]);
      }
    };
  },

  view(c) {
    return (
      <div>
        <Input value="hello mithril" addItem={c.addItem.bind(c)}/>
        <Spinner default={0}/>
        <List list={c.state.list()}/>
      </div>
    );
  },
};

m.mount(
  document.getElementById('root'),
  <App
    list={[
      'write',
      'something',
      'into input'
    ]}
  />
);

if (module.hot) {
  module.hot.accept();
}
