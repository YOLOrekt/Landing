import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { detailedInfoStyle } from './styles';


class DetailedInfo extends Component {
  render() {
    const { classes, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      mobile: classes.mRoot
    }[deviceType];
    return (
      <div className={style}>
        <div className="infoRow">
          {/* <div className="overlay"> */}
          <div className="textBlockLeft">
            <p className="firstLine">Secure & Risk Free</p>
            <span className="txtBody">
              {`Introducing a `}
              <span className="txtHighlight">{`proof of stake blockchain`}</span>
              {` which will enable counter party risk free trading of cross chain digital assets through the issuing of `}
              <span className="txtHighlight">{`proxy tokens`}</span>.
            </span>
          </div>
          <div className="imgBlockTop">
            {deviceType !== "mobile" && <img src={require('../../assets/img/dummy689x499.png')} alt="risksAnim" className="traslucent80" />}
            {deviceType === "mobile" && <img height="350px" src={require('../../assets/img/dummy600x600.png')} alt="risksAnim" className="traslucent80" />}
            <div className="textRiskFreeWrap ">
              <img src={require('../../assets/img/bigDot.png')} alt="risksAnim" />
              <span className="innerText">
                Risk Free
                </span>
            </div>
            <div className="textSecureWrap ">
              <img src={require('../../assets/img/bigDot.png')} alt="secure" />
              <span className="innerText">
                Secure
                </span>
            </div>
            <div className="topWindow"></div>
          </div>
          {/* </div> */}
        </div>
        <div className="infoRow">
          {deviceType === "mobile" && <div className="textBlockRight">
            <p className="firstLine">Transparency</p>

            <span className="txtBody">
              {'LiquidX does not take custody of your proxy tokens or external blockchain tokens.'}
              <br />
              {' Instead,'} <span className="txtHighlight">{`we provide you with your own LiquidX wallet`}</span>
              {` to safely and securely hold any tokens involved in the exchange.`}
            </span>
          </div>}
          <div className="imgBlockBottom">
            <img src={require('../../assets/img/flyingWallets.gif')} alt="walletsAnim" className="traslucent80" />
            <div className="bottomWindow"></div>
          </div>
          {deviceType !== "mobile" && <div className="textBlockRight">
            <p className="firstLine">Transparency</p>

            <span className="txtBody">
              {'LiquidX does not take custody of your proxy tokens or external blockchain tokens.'}
              <br />
              {' Instead,'} <span className="txtHighlight">{`we provide you with your own LiquidX wallet`}</span>
              {` to safely and securely hold any tokens involved in the exchange.`}
            </span>
          </div>}
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    deviceType: state.app.platform.deviceType,
  };
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(detailedInfoStyle)(DetailedInfo));