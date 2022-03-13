export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            MUR - LAVRAS
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Nossa História
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                O que falam sobre a EXPO
              </a>
            </li>
            <li>
              <a href='#registrations' className='page-scroll'>
                Sobre o evento
              </a>
            </li>
            <li>
              <a href='#sponsor' className='page-scroll'>
                Patrocinadores
              </a>
            </li>
            {/* <li>
              <a href='#pictures' className='page-scroll'>
                Fotos
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
            <li>
              {/* <button className="btn btn-custom btn-lg" onClick={() => window.open(formRegistration.url)} >Realizar inscrição</button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
