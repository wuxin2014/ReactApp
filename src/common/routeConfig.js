
const routeConfig = () => {
  const routers = [
    {
      path: '/',
      exact: true,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../container/ATest'))
        }, 'aTest')
      },
    },
    {
      path: '/bTest',
      exact: true,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../container/BTest'))
        }, 'bTest')
      },
    }
  ]

  return routers
}

export default routeConfig
