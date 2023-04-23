import styled from "styled-components";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
const Services = () => {
  return (
    <Container id="service">
     <Slide direction="down">
     <h4>
        My <span className="green">services</span>
      </h4>
      <h1>What I do</h1>
     </Slide>
      <Cards>
        <Slide direction="left">
        <Card
          Icon={MdDesignServices}
          title={"ui/ux designer"}
          disc={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
          nihil atque quo ex aliquid perspiciatis repudiandae, praesentium id
          soluta ab, hic aliquam saepe, impedit at! Consequatur suscipit
          doloribus hic.
        `}
        />
        </Slide>

        <Slide direction="up">
        <Card
          Icon={FiCodesandbox}
          title={"ui/ux designer"}
          disc={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
          nihil atque quo ex aliquid perspiciatis repudiandae, praesentium id
          soluta ab, hic aliquam saepe, impedit at! Consequatur suscipit
          doloribus hic.
        `}
        />
        </Slide>
        <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"ui/ux designer"}
          disc={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
          nihil atque quo ex aliquid perspiciatis repudiandae, praesentium id
          soluta ab, hic aliquam saepe, impedit at! Consequatur suscipit
          doloribus hic.
        `}
        />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media(max-width:840px){
    width: 90%;
  }
  
  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
