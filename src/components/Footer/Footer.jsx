import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <Container>
      <Profile>
        <h1>Portfolio</h1>
        <div className="address">
          <h1>Address:</h1>
          <p>33700 Bhakunde Pokhara</p>
        </div>
        <div className="links">
          <h1>Contact me directly</h1>
          <div>
            <span>
              <FiPhoneCall></FiPhoneCall>
            </span>
            <a href="tel:+9779840610060">+9779840610060</a>
          </div>
          <div>
            <span>
              <HiOutlineMailOpen />
            </span>
            <a href="mailto:developer.timilsina@gmail.com">
              developer.timilsina@gmail.com
            </a>
          </div>
          <div className="profiles">
            <h1>Check my Profiles</h1>
            <div className="icons">
              <span>
                <a href="#">
                  <AiFillGithub />
                </a>
                <a href="#">
                  <AiFillLinkedin />
                </a>
                <a href="#">
                  <BsFacebook />
                </a>
                <a href="#">
                  <BsSlack />
                </a>
              </span>
            </div>
            <ArrowUp>
              <AiOutlineArrowUp />
            </ArrowUp>
          </div>
        </div>
      </Profile>
      <Form></Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div``;

const Profile = styled.div``;
const Form = styled.div``;
const ArrowUp = styled.div``;
