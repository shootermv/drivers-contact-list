import React from "react";
import {
  Article,
  Imgwrap,
  DriverType,
  DetailsContainer,
  Img,
  Row,
} from "./Contact.styles";

/* IMG */
import citizen from "./citizen.svg";
import missing from "./missing.png";
import professional from "./professional.svg";
import { useSelector } from "react-redux";
import Rating from "../shared/Rating";

import { formatPhone } from "../utils";
import { getContactById } from "../store/selectors";

const Contact = ({ contact }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = missing;
  };
  const {
    name,
    driverType,
    driverRank,
    email,
    phone,
    profile_image: img,
  } = useSelector((state) => getContactById(state, contact.id));
  return (
    <Article>
      <Imgwrap>
        <Img src={img || missing} onError={addDefaultSrc} />
      </Imgwrap>

      <DetailsContainer>
        <DriverType
          alt="driver type"
          src={driverType === "Professional" ? professional : citizen}
        />
        <h3>{name}</h3>
        <div>
          <Rating rating={driverRank} />
        </div>
        <Row>
          <label>Phone:</label>
          <b>{formatPhone(phone) || "N/A"}</b>
        </Row>
        <Row>
          <label>Email:</label>
          <b title={email}>{email || "N/A"}</b>
        </Row>
      </DetailsContainer>
    </Article>
  );
};

export default Contact;
