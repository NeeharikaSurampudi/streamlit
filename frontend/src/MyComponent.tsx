import React, { useState } from "react";
import { Streamlit, StreamlitComponentBase, withStreamlitConnection } from "streamlit-component-lib";
import { Button, message, Modal } from 'antd';

interface State {
  isModalOpen: boolean;
}

class MyComponent extends StreamlitComponentBase<State> {
  state: State = {
    isModalOpen: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleOk = () => {
    this.setState({ isModalOpen: false });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  confirm = () => {
    message.success('Click on Yes');
    Streamlit.setComponentValue(true);
  }

  cancel = () => {
    message.error('Click on No');
    Streamlit.setComponentValue(null);
  }
  componentHeight = 1000
    public componentDidMount() { Streamlit.setFrameHeight(this.componentHeight) }
  render() {
    const { isModalOpen } = this.state;


    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

export default withStreamlitConnection(MyComponent);
