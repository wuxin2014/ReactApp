import React from 'react'

// bundle-loader是webpack官方出品与维护的一个loader，主要用来处理异步模块的加载，将简单的页面模块转成异步模块，非常方便
class MyComponent extends React.Component {
  state = {
    Bar: null
  };

  componentWillMount() {
    import('./components/Bar').then(Bar => {
      this.setState({ Bar });
    });
  }

  render() {
    let {Bar} = this.state;
    if (!Bar) {
      return <div>Loading...</div>;
    } else {
      return <Bar/>;
    };
  }
}

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render () {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}
