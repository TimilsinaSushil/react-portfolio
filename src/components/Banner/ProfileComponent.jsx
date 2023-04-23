import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfileComponent = () => {
  return (
    <Container id="home">
     <Slide direction="left">
     <Texts>
        <h4>
          Hello <span className="green">I'am</span>
        </h4>
        <h1 className="green">Jon Doe</h1>
        <h3>Software Engineer and Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
          nihil atque quo ex aliquid perspiciatis repudiandae, praesentium id
          soluta ab, hic aliquam saepe, impedit at! Consequatur suscipit
          doloribus hic.
        </p>
        <button>Let's Talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a href="#">
                <GiEarthAmerica />
              </a>
            </span>
            <span>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
     </Slide>
     <Slide direction="right">
     <Profile>
        <img
          src="https://www.kindpng.com/picc/m/442-4426088_model-girl-hd-png-download.png"
          alt="Model - Girl, HD Png Download@kindpng.com"
        />
      </Profile>
     </Slide>
    </Container>
  );
};

export default ProfileComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1 rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: white;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 661px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2rem;
      height: 2.3rem;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;
