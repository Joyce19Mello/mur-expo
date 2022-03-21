export const Sponsor = (props) => {
  return (
    <div id='sponsor' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Patrocinadores</h2>
          <p>
            Empresas que acreditam e sonham com a gente.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                   <img className="picture" src={d.img} />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
