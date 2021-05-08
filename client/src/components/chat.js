import React, { Component } from 'react';

class Chat extends Component {
  render() {
    //this is not working yet
    let messageList = [];
    if (this.chat) {
      messageList = this.chat.map(message => {
          return (
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                {message}
                <span className="msg_time_send">8:55 AM, Today</span>
              </div>
            </div>
          )
        })
    }
    return (
      <div className="container-fluid height background2 mt-5">
        <div className="row justify-content-center height ">
          {/* cuandro de la izquierda */}
          <div className="col-md-2 col-xl-2 chat">
            <div className="card mb-sm-2 mb-md-0 contacts_card">
              <div className="card-header">
                <div className="input-group text-center">
                  <h3 className="white">Users</h3>
                </div>
              </div>
              <div className="card-body contacts_body">
                <ul className="contacts">
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                          className="user_img rounded-circle"
                        />
                      </div>
                      <div className="user_info">
                        <span>Michelle</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                          className="user_img rounded-circle"
                        />
                      </div>
                      <div className="user_info">
                        <span>Berlin</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                          className="user_img rounded-circle"
                        />
                      </div>
                      <div className="user_info">
                        <span>thiago</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                          className="user_img rounded-circle"
                        />
                      </div>
                      <div className="user_info">
                        <span>Dennis</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                          className="user_img rounded-circle"
                        />
                      </div>
                      <div className="user_info">
                        <span>Luis</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
          {/* cuandro de la derecha */}
          <div className="col-md-10 col-xl-8 chat">
            <div className="card">
              <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img
                      src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png"
                      className="user_img rounded-circle"
                    />
                  </div>
                  <div className="user_info">
                    <span>{this.props.userName}</span>
                  </div>
                </div>
              </div>
              <div className="card-body msg_card_body">
                {messageList.length > 0 ? {messageList} : <p>No messages yet...</p>}
                {/* <div className="d-flex justify-content-start mb-4">
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                </div> */}
              </div>
              <div className="card-footer">
                <div className="input-group">
                  <textarea
                    name=""
                    className="form-control type_msg"
                    placeholder="Type your message..."
                  ></textarea>
                  <div className="input-group-append">
                    <button onClick={this.props.sendMessage} className="input-group-text send_btn">
                      <i className="fas fa-location-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      /*  <div>
            <h1>You made it to CHATS!</h1>
            <div className="onlineUsers">
                <ul>
                    <li>{this.props.userName}</li>
                </ul>
            </div>
            <div className="msgField">

            </div>
            <input type="text" />
            <button type="submit" >Send</button>
        </div> */
    );
  }
}

export default Chat;