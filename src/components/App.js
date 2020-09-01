import React from 'react'

const App = () => {
  return (
    <div className='container shadow '>
      <div className='row justify-content-center'>
        <div className='display-1 color-primary'>Full Row</div>
      </div>
      <hr></hr>
      <div className='bg-teal w-50 shadow rounded mb-5 pl-3 text-center' style={{ height: '100px' }}>
        <p className='h1'>This is a row</p>
      </div>

      <div className='row bg-light'>
        <div className='colborder-right'><h3>Column 1 - This column has a lot of text. Even more than you think</h3></div>
        <div className='col'><h3>Column 3 center</h3></div>
        <div className='col'><h3>Column 4 center</h3></div>
      </div>

    </div>
  )
}

export default App;
