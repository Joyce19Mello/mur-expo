
const formRegistration = {
    url:"https://docs.google.com/forms/d/e/1FAIpQLScFNOPa1X8KK_tTnRaKn0x6lgeiAIdru6hnsReIGMEOQEkILQ/viewform"
}

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p className="paragraph">{props.data ? props.data.paragraph : 'Loading'}</p>
                <p>{props.data ? props.data.subParagraph : 'Loading'}</p>
                <button
                  href='#registrations'
                  className='btn btn-custom btn-lg page-scroll'
                  onClick={() => window.open(formRegistration.url)}
                >
                  Realizar inscrição
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
