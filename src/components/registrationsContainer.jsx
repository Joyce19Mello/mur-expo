import uniqid from "uniqid";
import Money from "@material-ui/icons/Money";
import Place from "@material-ui/icons/Place";
import Send from "@material-ui/icons/Send";
import LaunchIcon from "@material-ui/icons/Launch";

export const RegistrationsContainer = ({ registrations }) => (
  <div className="registrations">
    <h3>{registrations.name}</h3>

    <p className="registrations__description">{registrations.description}</p>
    <h3>{registrations.value}</h3>
    <p className="registrations__description">{registrations.stack}</p>

    {registrations.money && (
      <a
        target="_blank"
        href={registrations.money}
        aria-label="source code"
        className="link link--icon"
        rel="noreferrer"
      >
        <Money className="large"/>
      </a>
    )}
    {registrations.place && (
      <a
        target="_blank"
        href={registrations.place}
        aria-label="source code"
        className="link link--icon"
        rel="noreferrer"
      >
        <Place />
      </a>
    )}

    {registrations.send && (
      <a
        target="_blank"
        href={registrations.send}
        aria-label="source code"
        className="link link--icon"
        rel="noreferrer"
      >
        <Send />
      </a>
    )}
  </div>
);
