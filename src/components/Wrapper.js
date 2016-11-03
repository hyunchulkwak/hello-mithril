import $ from 'jquery';

const Wrapper = {
  assignSlick(el, isInit) {
    if (!isInit) {
      $(el).slick();
    }
  },

  view(c, props, children) {
    return (
      <div>
        <strong>{props.title}</strong>
        <div config={this.assignSlick.bind(this)}>
          {children}
        </div>
      </div>
    );
  }
};

export default Wrapper;
