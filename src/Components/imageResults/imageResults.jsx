import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: "",
  };
  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    let imageList;
    const { images } = this.props;

    if (images) {
      imageList = (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 my-10 max-w-7xl mx-auto px-4 modal-image-two">
          {images.map((img) => (
            <div
              className="bg-white p-4 hover:scale-110 transition duration-500 cursor-pointer object-cover border border-purple-200 rounded shadow-md "
              title={img.tags}
              key={img.id}
              
            >
              
              <img
                src={img.largeImageURL}
                alt={img.tags}
                onClick={() => this.handleOpen(img.largeImageURL)}
                className="w-screen h-screen object-cover rounded-lg shadow-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      );
    } else {
      imageList = null;
    }
    const action = [
      <button
        className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-screen h-screen object-cover cursor-pointer"
        onclick={this.handleClose}
        label="close"
      >
        Close
      </button>,
    ];
    return (
      <>
        <h1 className="text-purple-600 pb-2.5 text-center mt-6 underline text-2xl">
          Results For the Searched Image
        </h1>
        <div >
        
          
            {this.state.open ? (
              <img
                className="rounded-lg shadow-md object-cover cursor-pointer modal-image-one"
                src={this.state.currentImg}
                alt={this.state.currentImg}
                onClick={this.handleClose}
                title={this.state.currentImg}
              />
              
            ) : null}
          
          {imageList}
          

          {/* {this.state.open ? (
            <img
              className="w-screen h-screen rounded-lg shadow-md object-cover cursor-pointer modal-image"
              src={this.state.currentImg}

              alt={this.state.currentImg}
              onClick={this.handleClose}
              
              title={this.state.currentImg}

              
            />
          ) : null} */}
        </div>
      </>
    );
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
