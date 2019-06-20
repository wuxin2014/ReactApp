import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'

const LazyATest = Loadable({
  loader: () => import(/* webpackChunkName:'ATest'*/'./ATest'),
  loading: Loading,
  delay: 5000,
});

const ATest = React.lazy(() => import(/* webpackChunkName:'ATest'*/'./ATest'))

// 当我们调用dynamic import时，组件就会开始加载
const BTestPromise = import(/* webpackChunkName:'BTest'*/'./BTest')
const BTest = React.lazy(() => BTestPromise)


// import(/* webpackChunkName:'BTest'*/'./BTest').then(({default: _})=> console.log('res==', _))

export default class AppTest extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      isShow: false,
      isShowB: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickB = this.handleClickB.bind(this)
  }
  handleClick(){
    this.setState({
      isShow: true
    })
  }
  handleClickB() {
    this.setState({
      isShowB: true
    })
  }
  render () {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>点击加载ATest组件</button>
          <button onClick={this.handleClickB} style={{marginLeft: 20}}>点击展示BTest组件</button>
        </div>
        {
          this.state.isShow && (
            <React.Suspense fallback={<div>加载中。。。</div>}>
              <ATest />
            </React.Suspense>
          )
        }
        {
          this.state.isShowB && (
            <React.Suspense fallback={<div>加载中。。。</div>}>
              <BTest />
            </React.Suspense>
          )
        }
        {/*<LazyATest />*/}
        {/*<React.Suspense fallback={<div>加载中。。。</div>}>
          <ATest />
        </React.Suspense>*/}
      </div>
    )
  }
}
