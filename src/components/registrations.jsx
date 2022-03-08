import { RegistrationsContainer } from "./registrationsContainer";
import uniqid from "uniqid";

const formRegistration = {
    url:"https://docs.google.com/forms/d/e/1FAIpQLScFNOPa1X8KK_tTnRaKn0x6lgeiAIdru6hnsReIGMEOQEkILQ/viewform"
}

export const Registrations = (props) => {

    return (
    <section id="registrations" className="section registrations">
      <h2 className="section__title">Sobre o evento</h2>

      <div className="registrations__grid">
        {props.data
          ? props.data.map((registrations) => (
              <RegistrationsContainer
                key={uniqid()}
                registrations={registrations}
              />
            ))
          : ""}
      </div>
      <div className="section__title">
        <button className="btn btn-custom btn-lg" onClick={() => window.open(formRegistration.url)} >Realizar inscrição</button>
      </div>
    </section>
  );
};
