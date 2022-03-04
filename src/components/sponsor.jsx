export const Sponsor = (props) => {
  return (
    <div id='sponsor' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Patrocinadores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                   <img class="picture" src={d.img} />
                  {/* <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                      </div> */}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
