import React from 'react';
import './ImageBlock.css';

class ImageBlock extends React.Component{
    render() {
        return (
            <div className="image-block">
                <div className="image-block__image">           
                    <img src={this.props.image1} alt=""/>
                </div>
                <div className="image-block__image">               
                    <img src={this.props.image2} alt=""/>
                </div>
            </div>
        );
    }
}

export default ImageBlock;