import $ from 'jquery';

const Wrapper = {
  owl: null,

  assignCarousel(el, isInit) {
    if (!isInit) {
      $(el).owlCarousel();
      this.owl = $(el).data('owlCarousel');
    }
  },

  view(c, props, children) {
    return (
      <div>
        <strong>{props.title}</strong>
        <div config={this.assignCarousel.bind(this)}>
          {children}
        </div>
      </div>
    );
  }
};

export default Wrapper;
