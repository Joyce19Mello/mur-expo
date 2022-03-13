import { RegistrationsContainer } from "./registrationsContainer";
import uniqid from "uniqid";

const formRegistration = {
    url:"https://forms.gle/LMpTbnvp9ohEzeAeA"
}

export const Registrations = (props) => {

    return (
    <section id="registrations" className="section registrations">
      <h2 className="section__title">Sobre o evento</h2>
      <h3 className="section__title">Realizado nos dias 01, 02, 03 de abril</h3>
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
