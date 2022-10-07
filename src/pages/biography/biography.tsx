import React, { Component } from "react";
import {
  ModalContainer,
  ModalSubTitle,
  ButtonContainer,
  Button,
} from "./biographyStyle";
import Modal from "../../components/modal/modal";
interface IProps {}

interface IState {
  show: boolean;
}
class Biography extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      show: false,
    };
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState((state) => ({
      show: true,
    }));
  }

  handleChange() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <ModalContainer>
          <ModalSubTitle>Click to show the biography</ModalSubTitle>

          <Button onClick={this.handleChange}>Show</Button>
        </ModalContainer>
        <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
      </>
    );
  }
}

export default Biography;
