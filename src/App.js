import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';
// import Spin from './components/Spin';
import Map from './components/Map';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import getAddress from './utils/getAddress';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      eTitle: '',
      eDescription: '',
      eType: '',
      eStart: '',
      eEnd: '',
      eCost: '',
      eAddress: ''
    }
  }

  setEventInfo = (info) => {
    console.log(info)
    const {title, description/*, type, start, end, cost*/} = info;
    this.setState({modalVisible: true, eTitle: title, eDescription: description, eAddress: getAddress(info)})
  }

  cancelModal = () => {
    this.setState({modalVisible: false, eTitle: "", eDescription: ""})
  }

  render() {

    const {modalVisible, eTitle, eDescription, eAddress} = this.state;

    console.log('state', this.state)

    return (
      <div className='main_container'>
        <div className='header'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <Map setEventInfo={this.setEventInfo} />
        
        <Modal
          title={eTitle}
          footer={null}
          visible={modalVisible}
          onCancel={this.cancelModal}>
          <p><strong>Адрес: </strong>{eAddress}</p>
          <p><strong>Описание: </strong>{eDescription}</p>
          
          
        
          </Modal>
      
      </div>
    )

  }
}