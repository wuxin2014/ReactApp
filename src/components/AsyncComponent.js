import React from 'react';

// 组件增强
// const Search = AsyncComponent(() => import("./ATest"))

/**
 * dynamic-imports是webpack在升级到2版本以后，对js的模块处理进行了增强的，其中就有对require.ensure的改进，基于原生的Promise对象进行了重新实现，
 * 采用了import()作为资源加载方法，将其看做一个分割点并将其请求的module打包为一个独立的chunk。
 * import()以模块名称作为参数并且返回一个Promise对象
 */

const AsyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    state = {
      Component: null,
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({Component});
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    render() {
      const {Component} = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;


