import React, { Component } from "react";
import axios from "axios";
import ImageResults from "../imageResults/imageResults";
// import ImageResults from "./Components/imageResults/imageResults";
// import ImageResults from "./Components/imageResults/imageResults";

class Search extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apikey: "40241782-08c25a07ac475a3d553810630",
    images: [],
  };
  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div className="mx-10 mt-5 items-center justify-center">
        <input
          className="bg-purpe-300 border border-purple-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-purple-600 focus:ring-2 rounded-tl rounded-bl p-2 border border-purple-300 rounded"
          type="search"
          placeholder="Search For Any Image"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          
        />
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;