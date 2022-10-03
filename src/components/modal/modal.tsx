import React, { Component } from "react";
import {
  ModalContainer,
  MainContainer,
  SubContainer,
  ColumnContainer,
  TextContainer,
  ModalTitle,
  ModalSubTitle,
  Button,
  ButtonContainer,
  ContactContainer,
  ContentLink,
} from "./modalStyle";
import profile from "../../assets/img/profile.png";
import * as FaIcons from "react-icons/fa";
interface IProps {
  show: boolean;
  handleClose: () => void;
}

interface IState {}
class Modal extends Component<IProps, IState> {
  myRef: React.RefObject<HTMLDivElement>;
  constructor(props: IProps) {
    super(props);

    this.myRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event: { target: any }) {
    if (event.target && event.target.id === "outOfBox") {
      this.props.handleClose();
    }
  }
  render() {
    if (!this.props.show) {
      return null;
    } else
      return (
        <>
          <MainContainer id={"outOfBox"} ref={this.myRef}>
            <ModalContainer>
              <SubContainer>
                <img src={profile} alt="profile" />
                <ColumnContainer>
                  <ModalTitle>Pourya Rezaee Zadeh</ModalTitle>
                  <ModalSubTitle>Full-Stack developer</ModalSubTitle>
                </ColumnContainer>
              </SubContainer>
              <TextContainer>
                <ModalSubTitle>
                  Froward‑looking Software Engineer with +4 years background in
                  creating and executing innovation software solution to enhance
                  business productivity. Experienced in the software development
                  and delivery. Looking for a challenging new role in
                  coop‑ration with a growing team where i can apply my expertise
                  and creative solution experience in software engineering.
                </ModalSubTitle>
              </TextContainer>
              <TextContainer>
                <ModalTitle>Contact information</ModalTitle>
              </TextContainer>
              <SubContainer>
                <ColumnContainer>
                  <ContactContainer>
                    <FaIcons.FaRegEnvelope style={{ marginTop: "0.1rem" }} />
                    <ContentLink href="mailto: rezaeezade@icloud.com">
                      {" "}
                      Rezaeezade@icloud.com
                    </ContentLink>
                  </ContactContainer>

                  <ContactContainer>
                    <FaIcons.FaPhone style={{ marginTop: "0.1rem" }} />
                    <ContentLink href="tel: +98-918-727-2381">
                      {" "}
                      +98-918-727-2381
                    </ContentLink>
                  </ContactContainer>
                </ColumnContainer>
              </SubContainer>
              <ButtonContainer>
                <Button onClick={this.props.handleClose}>Close</Button>
              </ButtonContainer>
            </ModalContainer>
          </MainContainer>
        </>
      );
  }
}

export default Modal;
