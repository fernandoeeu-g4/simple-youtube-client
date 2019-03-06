import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    term: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="row pt-2">
          <small>
            <strong>Video Search</strong>
          </small>
        </div>
        <form action="" onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-group mt-1 mb-4">
              <input
                onChange={e => this.setState({ term: e.target.value })}
                type="text"
                name="term"
                value={this.state.term}
                placeholder="termo de pesquisa"
                className="form-control"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
