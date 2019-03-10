import React from 'react';

class ExButton extends React.Component{
    render(props){
        console.log(this.props.userHy);
        if(this.props.userHy !== null){
            return<div className="exstUserbutton">{this.props.userHy.email}</div>
        }
        else
        return (
            <div>
               <button className='button' onClick={this.logout}>logout</button>
            </div>
        );
    }
}

//export default ExButton;