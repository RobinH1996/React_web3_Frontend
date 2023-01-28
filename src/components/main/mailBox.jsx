import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import $ from "jquery";
import "./mailBox.css"
import PrintComponent from "./PrintComponent.js";


const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class mailBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected_mailBox:'',
            show_new_mail: false,
            selectedFile: null,
            files:[],
            text:'',
            message:'',
            mail:'hedpay@mail.com',
            time:'',
            newMessage: false,
            reply: false,
            forward: false
        }
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleMailBox = (key) =>{
        this.setState({ selected_mailBox:key });
    }
    handleBack = () =>{
        this.setState({ selected_mailBox:"" });
    }
    handleNewMessage = () =>{
        this.setState({ show_new_mail: true, newMessage: true });
    }
    handleCloseMessage = () =>{
        this.setState({ show_new_mail: false, newMessage: false, reply: false, forward: false, text:"", files:[] });
    }
    attactedFile = () =>{
        $(".attached_file").trigger('click');
    }
    handlePrint =() =>{
        $(".print").trigger('click');
    }
    onFileChange = (event) => {
        if(event.target.files[0]!==undefined){
            this.setState({ selectedFile: event.target.files[0] });
            this.state.files.push(event.target.files[0].name);
        }
    };
    handleText = (event) =>{
        this.setState({ text: event.target.value });
    }
    openMessage =(event) =>{
        this.setState({ show_new_mail: !this.state.show_new_mail, newMessage: false });
        this.setState({ message: $(event.target).parent().find('td').eq(3).text(), time: $(event.target).parent().find('td').eq(4).text() });
    }
    openMessageMobile =(event) =>{
        this.setState({ show_new_mail: !this.state.show_new_mail, newMessage: false });
        this.setState({ message: $(event.target).text(), time: $(event.target).parent().find(".mobile_time").text() });
    }
    handleReply = () =>{
        this.setState({ reply:true, forward: false, text:'' });
        console.log(this.state.text);
    }
    handleForward = () =>{
        this.setState({ forward:true, text:this.state.message });
    }

    render() {
        return (
            <div style={{ marginTop: "170px" }} className="faq_page">
                <div className="web_version_mailBox">
                    <div style={{ width:'100%', display:'flex', minWidth:'300px', overflow:'auto' }}>
                        <div className={this.state.selected_mailBox==='index'?'mail_box_title_each':'unselected_mail_box_title_each'} onClick={ ()=>this.handleMailBox('index') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="21.333" height="16" viewBox="0 0 21.333 16">
                                <path id="FontAwsome_envelope_" data-name="FontAwsome (envelope)" d="M19.333,64H2a2,2,0,0,0-2,2V78a2,2,0,0,0,2,2H19.333a2,2,0,0,0,2-2V66A2,2,0,0,0,19.333,64Zm0,2v1.7c-.934.761-2.424,1.944-5.608,4.437-.7.552-2.092,1.878-3.059,1.863-.967.016-2.357-1.311-3.059-1.863C4.424,69.644,2.934,68.461,2,67.7V66ZM2,78V70.267c.955.76,2.309,1.828,4.372,3.444.911.717,2.506,2.3,4.294,2.29,1.78.01,3.355-1.55,4.294-2.289,2.064-1.616,3.418-2.683,4.373-3.444V78Z" transform="translate(0 -64)" fill={this.state.selected_mailBox==='index'?"#2dccd3":"#bac4ce"} />
                            </svg>
                            <p className={this.state.selected_mailBox==='index'?'mailBox_title':'unselected_mailBox_title'}>Inbox</p>
                            <p className={this.state.selected_mailBox==='index'?'noti_badge':'unselected_noti_badge'}>2</p>
                        </div>
                        <div className={this.state.selected_mailBox==='favorites'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('favorites') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.717" height="16" viewBox="0 0 16.717 16">
                                <path id="FontAwsome_star_" data-name="FontAwsome (star)" d="M36.36,5.346,31.8,4.681,29.755.544a1,1,0,0,0-1.794,0l-2.04,4.137-4.565.666A1,1,0,0,0,20.8,7.052l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053l4.084-2.147,4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218a1,1,0,0,0-.553-1.706ZM32,9.746l.741,4.324-3.884-2.04-3.884,2.04.741-4.324L22.571,6.684l4.343-.631,1.944-3.937L30.8,6.053l4.343.631L32,9.746Z" transform="translate(-20.5 0.013)"  fill={this.state.selected_mailBox==='favorites'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='favorites'?'mailBox_title':'unselected_mailBox_title'}>Favorites</p>
                            <p className={this.state.selected_mailBox==='favorites'?'noti_badge':'unselected_noti_badge'}>2</p>
                        </div>
                        <div className={this.state.selected_mailBox==='drafts'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('drafts') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                <path id="FontAwsome_firstdraft_" data-name="FontAwsome (firstdraft)" d="M12,6H10v4H6v4H0v-.8H5.2v-4h4v-4H12Zm-.8,1.2v4h-4v4H2V16H8V12h4V7.2Zm.8,6H9.2V16H10V14h2ZM0,0V12H4V8H8V4h4V0Z"  fill={this.state.selected_mailBox==='drafts'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='drafts'?'mailBox_title':'unselected_mailBox_title'}>Drafts</p>
                            <p className={this.state.selected_mailBox==='drafts'?'noti_badge':'unselected_noti_badge'}>0</p>
                        </div>
                        <div className={this.state.selected_mailBox==='messages'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('messages') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
                                <path id="FontAwsome_paper-plane_" data-name="FontAwsome (paper-plane)" d="M13.792.227l-13,7.5A1.5,1.5,0,0,0,.97,10.408l3.572,1.478v2.638a1.5,1.5,0,0,0,2.706.894l1.369-1.847,3.5,1.444a1.5,1.5,0,0,0,2.056-1.159l1.856-12.1A1.5,1.5,0,0,0,13.792.227Zm-7.75,14.3V12.505l1.144.472Zm6.644-.9L7.88,11.643l4.381-6.322a.5.5,0,0,0-.741-.663L4.911,10.418,1.542,9.024l13-7.5Z" transform="translate(-0.043 -0.025)"  fill={this.state.selected_mailBox==='messages'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='messages'?'mailBox_title':'unselected_mailBox_title'}>Messages sent</p>
                            <p className={this.state.selected_mailBox==='messages'?'noti_badge':'unselected_noti_badge'}>20</p>
                        </div>
                        <div className={this.state.selected_mailBox==='deleted'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('deleted') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                <path id="FontAwsome_trash-alt_" data-name="FontAwsome (trash-alt)" d="M8.375,13h.75a.375.375,0,0,0,.375-.375V5.875A.375.375,0,0,0,9.125,5.5h-.75A.375.375,0,0,0,8,5.875v6.75A.375.375,0,0,0,8.375,13ZM13.5,2.5H10.925L9.862.728A1.5,1.5,0,0,0,8.575,0H5.425A1.5,1.5,0,0,0,4.138.728L3.075,2.5H.5A.5.5,0,0,0,0,3v.5A.5.5,0,0,0,.5,4H1V14.5A1.5,1.5,0,0,0,2.5,16h9A1.5,1.5,0,0,0,13,14.5V4h.5a.5.5,0,0,0,.5-.5V3A.5.5,0,0,0,13.5,2.5ZM5.37,1.591A.187.187,0,0,1,5.531,1.5H8.469a.188.188,0,0,1,.161.091l.546.909H4.825ZM11.5,14.5h-9V4h9ZM4.875,13h.75A.375.375,0,0,0,6,12.625V5.875A.375.375,0,0,0,5.625,5.5h-.75a.375.375,0,0,0-.375.375v6.75A.375.375,0,0,0,4.875,13Z"  fill={this.state.selected_mailBox==='deleted'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='deleted'?'mailBox_title':'unselected_mailBox_title'}>Deleted messages</p>
                            <p className={this.state.selected_mailBox==='deleted'?'noti_badge':'unselected_noti_badge'}>10</p>
                        </div>
                    </div>
                    <div className={!this.state.show_new_mail?'show_mail_box':'hide_mailbox'}>
                        <div className='show_and_search' style={{ marginTop:"60px", display:'flex', width:'100%' }}>
                            <button className='singInButton activeButton' style={{ width:'20%' }} onClick={this.handleNewMessage}>New message</button>
                            <div style={{ width:'100%' }}>
                                <input type="search" name="search" className="search_input message_search" placeholder='Search' />
                                <div className='selected_div' style={{ float:'right', marginRight:'23px' }}>
                                    <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                                    <select className='select_ele' name="pageItems">
                                        <option value="6">6</option>
                                        <option value="6">12</option>
                                        <option value="6">18</option>
                                        <option value="6">24</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='table_responsive'>
                                <table className='table text-left'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={this.openMessage} style={{ cursor:'pointer' }}>
                                            <td><input type="checkbox" name="mail" /></td>
                                            <td>A</td>
                                            <td>Hedpay Hedpay</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printing and typesetting …</td>
                                            <td>14:50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.show_new_mail?'show_new_message':'hide_mailbox'}>
                    <span class="close" onClick={this.handleCloseMessage}>&times;</span>
                    {!this.state.newMessage?
                        <div>
                            <div style={{ display:'none' }}>
                                <PrintComponent />
                            </div>
                            <div className='small_reply_btn' style={{ textAlign:'center' }}>
                                <button onClick={this.handleReply} className='mobile_mail_send_btn'>Reply &nbsp;&nbsp;&nbsp;
                                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4366 4.91134C14.4366 2.20321 12.1119 0 9.25459 0C6.3972 0 4.07255 2.20321 4.07255 4.91134C4.07255 6.58875 4.96467 8.07225 6.32248 8.95862C5.05471 9.37327 3.8926 10.0582 2.91632 10.9835C1.22336 12.588 0.291016 14.7214 0.291016 16.9905H1.69152C1.69152 13.0382 5.08427 9.82268 9.25459 9.82268C12.1119 9.82268 14.4366 7.61947 14.4366 4.91134V4.91134ZM9.25459 8.49533C7.16943 8.49533 5.47306 6.88757 5.47306 4.91134C5.47306 2.9351 7.16943 1.32735 9.25459 1.32735C11.3396 1.32735 13.036 2.9351 13.036 4.91134C13.036 6.88757 11.3396 8.49533 9.25459 8.49533V8.49533ZM18.228 12.212L14.9318 15.3361L13.9414 14.3974L15.5821 12.8425H14.3674C12.6894 12.8425 11.3229 14.1365 11.3216 15.7269L11.3203 16.9911L9.91982 16.99L9.92091 15.7257C9.92296 13.4039 11.9177 11.515 14.3674 11.515H15.512L13.9414 10.0264L14.9318 9.08793L18.228 12.212Z" fill="white"/>
                                    </svg>
                                </button>
                                <button onClick={this.handleForward} className='mobile_mail_send_btn'>Forward &nbsp;&nbsp;&nbsp;
                                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4366 4.91134C14.4366 2.20321 12.1119 0 9.25459 0C6.3972 0 4.07255 2.20321 4.07255 4.91134C4.07255 6.58875 4.96467 8.07225 6.32248 8.95862C5.05471 9.37327 3.8926 10.0582 2.91632 10.9835C1.22336 12.588 0.291016 14.7214 0.291016 16.9905H1.69152C1.69152 13.0382 5.08427 9.82268 9.25459 9.82268C12.1119 9.82268 14.4366 7.61947 14.4366 4.91134V4.91134ZM9.25459 8.49533C7.16943 8.49533 5.47306 6.88757 5.47306 4.91134C5.47306 2.9351 7.16943 1.32735 9.25459 1.32735C11.3396 1.32735 13.036 2.9351 13.036 4.91134C13.036 6.88757 11.3396 8.49533 9.25459 8.49533V8.49533ZM18.228 12.212L14.9318 15.3361L13.9414 14.3974L15.5821 12.8425H14.3674C12.6894 12.8425 11.3229 14.1365 11.3216 15.7269L11.3203 16.9911L9.91982 16.99L9.92091 15.7257C9.92296 13.4039 11.9177 11.515 14.3674 11.515H15.512L13.9414 10.0264L14.9318 9.08793L18.228 12.212Z" fill="white"/>
                                    </svg>
                                </button>
                                <button onClick={this.handlePrint} className='mobile_mail_send_btn'>Save &nbsp;&nbsp;&nbsp;
                                    <svg width="17" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16602 1.66669H19.4041V16.8667H21.666V20C21.666 21.841 20.1736 23.3334 18.3327 23.3334H6.88427C5.38302 23.3334 4.16602 22.1163 4.16602 20.6151V1.66669ZM9.33701 21.6667H18.3327C19.2532 21.6667 19.9993 20.9205 19.9993 20V18.5334H9.60252V20.1C9.60252 20.672 9.51901 21.203 9.33701 21.6667ZM6.88427 21.6667C7.239 21.6667 7.45908 21.5503 7.60792 21.3698C7.77442 21.1679 7.93586 20.781 7.93586 20.1V16.8667H17.7374V3.33335H5.83268V20.6151C5.83268 21.1959 6.30349 21.6667 6.88427 21.6667ZM16.3089 6.53335H7.26125V4.86669H16.3089V6.53335ZM16.3089 10.5334H7.26125V8.86669H16.3089V10.5334ZM16.3089 14.5334H7.26125V12.8667H16.3089V14.5334Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                            <div style={{ marginTop:'60px' }}>
                                <div style={{ display:'flex' }}>
                                    <p>{this.state.mail}</p>
                                    <p style={{ marginLeft:'auto' }}>{this.state.time}</p>
                                </div>
                                <div className='came_message'>
                                    {this.state.message}
                                </div>
                            </div>
                            {this.state.reply || this.state.forward?
                                <div style={{ marginTop:'75px' }}>
                                    {this.state.forward?
                                        <div>
                                            <div className='new_mail_div row'>
                                                <div className='col-md-1 col-sm-1'>
                                                    <span className='mail_to'>To:</span>
                                                </div>
                                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px", }} type="text" name="mail_to" placeholder='Enter...' />
                                                </div>
                                            </div>
                                            <div className='new_mail_div row'>
                                                <div className='col-md-1 col-sm-1'>
                                                    <span className='mail_to'>Cc/Bcc:</span>
                                                </div>
                                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px", }} type="text" name="mail_to" placeholder='Enter...' />
                                                </div>
                                            </div>
                                            <div className='new_mail_div row'>
                                                <div className='col-md-1 col-sm-1'>
                                                    <span className='mail_to'>Subject:</span>
                                                </div>
                                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px", }} type="text" name="mail_to" placeholder='Enter...' />
                                                </div>
                                            </div>
                                            <textarea name="mail_text" value={this.state.text} className='mail_text' onChange={this.handleText} cols="30" rows="7"></textarea>
                                        </div>
                                    :
                                        <div>
                                            <textarea name="mail_text" defaultValue="" className='mail_text' onChange={this.handleText} cols="30" rows="7"></textarea>
                                        </div>
                                    }
                                    <div className='symbol_btn'>
                                        <p>Symbols: <span>{this.state.text.length}</span>/1500</p>
                                        <div className='file_send'>
                                            <button onClick={this.attactedFile} className='file_upload_btn' style={{ marginRight:'20px' }}>
                                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.43645 18C3.24181 18 2.12293 17.4903 1.31541 16.6775C-0.250652 15.1016 -0.686748 12.351 1.50851 10.1423L10.515 1.07779C11.4278 0.159399 12.5892 -0.196017 13.7007 0.104295C14.7937 0.39818 15.6881 1.29912 15.981 2.39843C16.2785 3.51886 15.9265 4.68797 15.0145 5.60636L6.40073 14.2759C5.9092 14.7709 5.35299 15.0639 4.79493 15.1227C4.2415 15.1815 3.71394 15.0033 3.34436 14.6314C2.67544 13.9554 2.57935 12.6871 3.69361 11.5667L9.74351 5.47778C9.99205 5.22798 10.3949 5.22798 10.6434 5.47778C10.892 5.72758 10.892 6.13351 10.6434 6.38331L4.59259 12.4731C4.06965 12.9985 4.02161 13.5008 4.24427 13.7258C4.34221 13.8232 4.49004 13.8682 4.66096 13.8489C4.92244 13.8223 5.22087 13.6505 5.50082 13.3704L14.1146 4.70174C14.7059 4.10663 14.9323 3.40682 14.7521 2.7318C14.6621 2.40171 14.4878 2.10034 14.2461 1.8569C14.0044 1.61345 13.7036 1.43619 13.3727 1.34228C12.7019 1.16136 12.0053 1.39004 11.414 1.98515L2.4075 11.0496C0.729639 12.7386 1.13155 14.6828 2.2144 15.7729C3.29817 16.863 5.22826 17.269 6.90704 15.5782L15.9135 6.51372C15.9723 6.45436 16.0423 6.4072 16.1195 6.37502C16.1968 6.34283 16.2797 6.32626 16.3635 6.32626C16.4472 6.32626 16.5302 6.34283 16.6074 6.37502C16.6847 6.4072 16.7547 6.45436 16.8134 6.51372C16.933 6.63464 17 6.7974 17 6.96695C17 7.13649 16.933 7.29926 16.8134 7.42017L7.80695 16.4847C6.74535 17.5518 5.55625 18 4.43645 18Z" fill="white"/>
                                                </svg>
                                            </button>
                                            <button className='file_upload_btn'>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.4267 8.095L1.42674 0.0949962C1.25557 0.0140123 1.06492 -0.0166567 0.876986 0.00656362C0.689058 0.029784 0.511598 0.105937 0.365291 0.226148C0.218984 0.346359 0.109855 0.505676 0.0506232 0.685531C-0.00860899 0.865386 -0.0155049 1.05837 0.0307394 1.242L1.96974 9L0.0307394 16.758C-0.0159376 16.9417 -0.00934325 17.1349 0.0497511 17.315C0.108845 17.495 0.217996 17.6546 0.364436 17.7749C0.510875 17.8952 0.688549 17.9713 0.876672 17.9944C1.0648 18.0174 1.25559 17.9864 1.42674 17.905L18.4267 9.905C18.5985 9.82424 18.7438 9.69625 18.8455 9.53599C18.9473 9.37574 19.0013 9.18983 19.0013 9C19.0013 8.81017 18.9473 8.62426 18.8455 8.464C18.7438 8.30374 18.5985 8.17575 18.4267 8.095ZM2.48174 15.197L3.32074 11.84L9.00074 9L3.32074 6.16L2.48174 2.803L15.6517 9L2.48174 15.197Z" fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="file" name="file" onChange={this.onFileChange} className='attached_file' />
                                    <div className='attached_file_name'>
                                        {
                                        this.state.files.length!==0?
                                            this.state.files.map((file, key)=>(
                                                <div className='file_name_tick'>
                                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.43645 18C3.24181 18 2.12293 17.4903 1.31541 16.6775C-0.250652 15.1016 -0.686748 12.351 1.50851 10.1423L10.515 1.07779C11.4278 0.159399 12.5892 -0.196017 13.7007 0.104295C14.7937 0.39818 15.6881 1.29912 15.981 2.39843C16.2785 3.51886 15.9265 4.68797 15.0145 5.60636L6.40073 14.2759C5.9092 14.7709 5.35299 15.0639 4.79493 15.1227C4.2415 15.1815 3.71394 15.0033 3.34436 14.6314C2.67544 13.9554 2.57935 12.6871 3.69361 11.5667L9.74351 5.47778C9.99205 5.22798 10.3949 5.22798 10.6434 5.47778C10.892 5.72758 10.892 6.13351 10.6434 6.38331L4.59259 12.4731C4.06965 12.9985 4.02161 13.5008 4.24427 13.7258C4.34221 13.8232 4.49004 13.8682 4.66096 13.8489C4.92244 13.8223 5.22087 13.6505 5.50082 13.3704L14.1146 4.70174C14.7059 4.10663 14.9323 3.40682 14.7521 2.7318C14.6621 2.40171 14.4878 2.10034 14.2461 1.8569C14.0044 1.61345 13.7036 1.43619 13.3727 1.34228C12.7019 1.16136 12.0053 1.39004 11.414 1.98515L2.4075 11.0496C0.729639 12.7386 1.13155 14.6828 2.2144 15.7729C3.29817 16.863 5.22826 17.269 6.90704 15.5782L15.9135 6.51372C15.9723 6.45436 16.0423 6.4072 16.1195 6.37502C16.1968 6.34283 16.2797 6.32626 16.3635 6.32626C16.4472 6.32626 16.5302 6.34283 16.6074 6.37502C16.6847 6.4072 16.7547 6.45436 16.8134 6.51372C16.933 6.63464 17 6.7974 17 6.96695C17 7.13649 16.933 7.29926 16.8134 7.42017L7.80695 16.4847C6.74535 17.5518 5.55625 18 4.43645 18Z" fill="white"/>
                                                    </svg>
                                                    &nbsp;&nbsp;
                                                    <p key={key}>{file}</p>
                                                </div>
                                            ))
                                        :
                                            <p>Please attach the file.</p>
                                        }
                                    </div>
                                </div>
                            :
                                <div></div>
                            }
                        </div>
                        :
                        <div style={{ marginTop:'75px' }}>
                            <div className='new_mail_div row'>
                                <div className='col-md-1 col-sm-1'>
                                    <span className='mail_to'>To:</span>
                                </div>
                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px" }} type="text" name="mail_to" placeholder='Enter...' />
                                </div>
                            </div>
                            <div className='new_mail_div row'>
                                <div className='col-md-1 col-sm-1'>
                                    <span className='mail_to'>Cc/Bcc:</span>
                                </div>
                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px" }} type="text" name="mail_to" placeholder='Enter...' />
                                </div>
                            </div>
                            <div className='new_mail_div row'>
                                <div className='col-md-1 col-sm-1'>
                                    <span className='mail_to'>Subject:</span>
                                </div>
                                <div className='col-md-11 col-sm-11' style={{ padding:'0px' }}>
                                    <input className='emailInput mobile_mail_to' style={{ paddingLeft: "20px" }} type="text" name="mail_to" placeholder='Enter...' />
                                </div>
                            </div>
                            <textarea name="mail_text" className='mail_text'onChange={this.handleText} cols="30" rows="7"></textarea>
                            <div className='symbol_btn'>
                                <p>Symbols: <span>{this.state.text.length}</span>/1500</p>
                                <div className='file_send'>
                                    <button onClick={this.attactedFile} className='file_upload_btn' style={{ marginRight:'20px' }}>
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.43645 18C3.24181 18 2.12293 17.4903 1.31541 16.6775C-0.250652 15.1016 -0.686748 12.351 1.50851 10.1423L10.515 1.07779C11.4278 0.159399 12.5892 -0.196017 13.7007 0.104295C14.7937 0.39818 15.6881 1.29912 15.981 2.39843C16.2785 3.51886 15.9265 4.68797 15.0145 5.60636L6.40073 14.2759C5.9092 14.7709 5.35299 15.0639 4.79493 15.1227C4.2415 15.1815 3.71394 15.0033 3.34436 14.6314C2.67544 13.9554 2.57935 12.6871 3.69361 11.5667L9.74351 5.47778C9.99205 5.22798 10.3949 5.22798 10.6434 5.47778C10.892 5.72758 10.892 6.13351 10.6434 6.38331L4.59259 12.4731C4.06965 12.9985 4.02161 13.5008 4.24427 13.7258C4.34221 13.8232 4.49004 13.8682 4.66096 13.8489C4.92244 13.8223 5.22087 13.6505 5.50082 13.3704L14.1146 4.70174C14.7059 4.10663 14.9323 3.40682 14.7521 2.7318C14.6621 2.40171 14.4878 2.10034 14.2461 1.8569C14.0044 1.61345 13.7036 1.43619 13.3727 1.34228C12.7019 1.16136 12.0053 1.39004 11.414 1.98515L2.4075 11.0496C0.729639 12.7386 1.13155 14.6828 2.2144 15.7729C3.29817 16.863 5.22826 17.269 6.90704 15.5782L15.9135 6.51372C15.9723 6.45436 16.0423 6.4072 16.1195 6.37502C16.1968 6.34283 16.2797 6.32626 16.3635 6.32626C16.4472 6.32626 16.5302 6.34283 16.6074 6.37502C16.6847 6.4072 16.7547 6.45436 16.8134 6.51372C16.933 6.63464 17 6.7974 17 6.96695C17 7.13649 16.933 7.29926 16.8134 7.42017L7.80695 16.4847C6.74535 17.5518 5.55625 18 4.43645 18Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className='file_upload_btn'>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.4267 8.095L1.42674 0.0949962C1.25557 0.0140123 1.06492 -0.0166567 0.876986 0.00656362C0.689058 0.029784 0.511598 0.105937 0.365291 0.226148C0.218984 0.346359 0.109855 0.505676 0.0506232 0.685531C-0.00860899 0.865386 -0.0155049 1.05837 0.0307394 1.242L1.96974 9L0.0307394 16.758C-0.0159376 16.9417 -0.00934325 17.1349 0.0497511 17.315C0.108845 17.495 0.217996 17.6546 0.364436 17.7749C0.510875 17.8952 0.688549 17.9713 0.876672 17.9944C1.0648 18.0174 1.25559 17.9864 1.42674 17.905L18.4267 9.905C18.5985 9.82424 18.7438 9.69625 18.8455 9.53599C18.9473 9.37574 19.0013 9.18983 19.0013 9C19.0013 8.81017 18.9473 8.62426 18.8455 8.464C18.7438 8.30374 18.5985 8.17575 18.4267 8.095ZM2.48174 15.197L3.32074 11.84L9.00074 9L3.32074 6.16L2.48174 2.803L15.6517 9L2.48174 15.197Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <input type="file" name="file" onChange={this.onFileChange} className='attached_file' />
                            <div className='attached_file_name'>
                                {
                                this.state.files.length!==0?
                                    this.state.files.map((file, key)=>(
                                        <div className='file_name_tick'>
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.43645 18C3.24181 18 2.12293 17.4903 1.31541 16.6775C-0.250652 15.1016 -0.686748 12.351 1.50851 10.1423L10.515 1.07779C11.4278 0.159399 12.5892 -0.196017 13.7007 0.104295C14.7937 0.39818 15.6881 1.29912 15.981 2.39843C16.2785 3.51886 15.9265 4.68797 15.0145 5.60636L6.40073 14.2759C5.9092 14.7709 5.35299 15.0639 4.79493 15.1227C4.2415 15.1815 3.71394 15.0033 3.34436 14.6314C2.67544 13.9554 2.57935 12.6871 3.69361 11.5667L9.74351 5.47778C9.99205 5.22798 10.3949 5.22798 10.6434 5.47778C10.892 5.72758 10.892 6.13351 10.6434 6.38331L4.59259 12.4731C4.06965 12.9985 4.02161 13.5008 4.24427 13.7258C4.34221 13.8232 4.49004 13.8682 4.66096 13.8489C4.92244 13.8223 5.22087 13.6505 5.50082 13.3704L14.1146 4.70174C14.7059 4.10663 14.9323 3.40682 14.7521 2.7318C14.6621 2.40171 14.4878 2.10034 14.2461 1.8569C14.0044 1.61345 13.7036 1.43619 13.3727 1.34228C12.7019 1.16136 12.0053 1.39004 11.414 1.98515L2.4075 11.0496C0.729639 12.7386 1.13155 14.6828 2.2144 15.7729C3.29817 16.863 5.22826 17.269 6.90704 15.5782L15.9135 6.51372C15.9723 6.45436 16.0423 6.4072 16.1195 6.37502C16.1968 6.34283 16.2797 6.32626 16.3635 6.32626C16.4472 6.32626 16.5302 6.34283 16.6074 6.37502C16.6847 6.4072 16.7547 6.45436 16.8134 6.51372C16.933 6.63464 17 6.7974 17 6.96695C17 7.13649 16.933 7.29926 16.8134 7.42017L7.80695 16.4847C6.74535 17.5518 5.55625 18 4.43645 18Z" fill="white"/>
                                            </svg>
                                            &nbsp;&nbsp;
                                            <p key={key}>{file}</p>
                                        </div>
                                    ))
                                :
                                    <p>Please attach the file.</p>
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className='mobile_version_mailBox'>
                    {this.state.selected_mailBox===""?
                        <div className='mobile_mailBox_title_group'>
                            <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Mailbox</p>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' style={{ marginTop:'80px' }} onClick={ ()=>this.handleMailBox('index') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="21.333" height="16" viewBox="0 0 21.333 16">
                                    <path id="FontAwsome_envelope_" data-name="FontAwsome (envelope)" d="M19.333,64H2a2,2,0,0,0-2,2V78a2,2,0,0,0,2,2H19.333a2,2,0,0,0,2-2V66A2,2,0,0,0,19.333,64Zm0,2v1.7c-.934.761-2.424,1.944-5.608,4.437-.7.552-2.092,1.878-3.059,1.863-.967.016-2.357-1.311-3.059-1.863C4.424,69.644,2.934,68.461,2,67.7V66ZM2,78V70.267c.955.76,2.309,1.828,4.372,3.444.911.717,2.506,2.3,4.294,2.29,1.78.01,3.355-1.55,4.294-2.289,2.064-1.616,3.418-2.683,4.373-3.444V78Z" transform="translate(0 -64)" fill="#bac4ce" />
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Inbox</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>2</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('favorites') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.717" height="16" viewBox="0 0 16.717 16">
                                    <path id="FontAwsome_star_" data-name="FontAwsome (star)" d="M36.36,5.346,31.8,4.681,29.755.544a1,1,0,0,0-1.794,0l-2.04,4.137-4.565.666A1,1,0,0,0,20.8,7.052l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053l4.084-2.147,4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218a1,1,0,0,0-.553-1.706ZM32,9.746l.741,4.324-3.884-2.04-3.884,2.04.741-4.324L22.571,6.684l4.343-.631,1.944-3.937L30.8,6.053l4.343.631L32,9.746Z" transform="translate(-20.5 0.013)"  fill={this.state.selected_mailBox==='favorites'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Favorites</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>2</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('drafts') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path id="FontAwsome_firstdraft_" data-name="FontAwsome (firstdraft)" d="M12,6H10v4H6v4H0v-.8H5.2v-4h4v-4H12Zm-.8,1.2v4h-4v4H2V16H8V12h4V7.2Zm.8,6H9.2V16H10V14h2ZM0,0V12H4V8H8V4h4V0Z"  fill={this.state.selected_mailBox==='drafts'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Drafts</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>0</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('messages') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
                                    <path id="FontAwsome_paper-plane_" data-name="FontAwsome (paper-plane)" d="M13.792.227l-13,7.5A1.5,1.5,0,0,0,.97,10.408l3.572,1.478v2.638a1.5,1.5,0,0,0,2.706.894l1.369-1.847,3.5,1.444a1.5,1.5,0,0,0,2.056-1.159l1.856-12.1A1.5,1.5,0,0,0,13.792.227Zm-7.75,14.3V12.505l1.144.472Zm6.644-.9L7.88,11.643l4.381-6.322a.5.5,0,0,0-.741-.663L4.911,10.418,1.542,9.024l13-7.5Z" transform="translate(-0.043 -0.025)"  fill={this.state.selected_mailBox==='messages'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Messages sent</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>20</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('deleted') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                    <path id="FontAwsome_trash-alt_" data-name="FontAwsome (trash-alt)" d="M8.375,13h.75a.375.375,0,0,0,.375-.375V5.875A.375.375,0,0,0,9.125,5.5h-.75A.375.375,0,0,0,8,5.875v6.75A.375.375,0,0,0,8.375,13ZM13.5,2.5H10.925L9.862.728A1.5,1.5,0,0,0,8.575,0H5.425A1.5,1.5,0,0,0,4.138.728L3.075,2.5H.5A.5.5,0,0,0,0,3v.5A.5.5,0,0,0,.5,4H1V14.5A1.5,1.5,0,0,0,2.5,16h9A1.5,1.5,0,0,0,13,14.5V4h.5a.5.5,0,0,0,.5-.5V3A.5.5,0,0,0,13.5,2.5ZM5.37,1.591A.187.187,0,0,1,5.531,1.5H8.469a.188.188,0,0,1,.161.091l.546.909H4.825ZM11.5,14.5h-9V4h9ZM4.875,13h.75A.375.375,0,0,0,6,12.625V5.875A.375.375,0,0,0,5.625,5.5h-.75a.375.375,0,0,0-.375.375v6.75A.375.375,0,0,0,4.875,13Z"  fill={this.state.selected_mailBox==='deleted'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Deleted messages</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>10</p>
                            </div>
                        </div>
                        :
                        <div className={!this.state.show_new_mail?'mobile_mailBox_content show_mail_box':'hide_mailbox'}>
                            <p onClick={this.handleBack} style={{ color:"#002554", fontSize:'16px', fontWeight:'bold', textAlign:"center", cursor:'pointer' }}>Go back</p>
                            <p className='mobile_inbox'>Inbox</p>
                            <div style={{ display:'flex' }}>
                                <p style={{ marginTop:'30px', color:'#002554', fontSize:'16px', fontWeight:'600' }}>Show</p>
                                <button className='singInButton activeButton' onClick={this.handleNewMessage} style={{ width:'40%', marginLeft:'auto' }}>New message</button>
                            </div>
                            <div style={{ display:'flex' }}>
                                <select className='select_ele' name="pageItems">
                                    <option value="6">6</option>
                                    <option value="6">12</option>
                                    <option value="6">18</option>
                                    <option value="6">24</option>
                                </select>
                                <input style={{ marginLeft:'auto', width:'75%' }} type="search" name="search" className="search_input message_search" placeholder='Search' />
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Hedpay Hedpay</p>
                                    <p className='mobile_time' style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p onClick={this.openMessageMobile} style={{ cursor:'pointer' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Hedpay Hedpay</p>
                                    <p style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Hedpay Hedpay</p>
                                    <p style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div>
                                <Stack spacing={2}>
                                    <Pagination count={1} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                </Stack>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(mailBox)