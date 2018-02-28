import React, { Component } from 'react';
import {
  alphabet,
  categories,
  isEqual,
  generatePlaceHolder,
} from '../utilities/helpers';
import './mainComponent.css';

const city = ['r', 'i', 'g', 'a'];
const animal = ['d', 'o', 'g', 'g', 'o'];
const cityPlaceHolder = generatePlaceHolder(city);
const animalPlaceHolder = generatePlaceHolder(animal);

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      categoryChosen: false,
      categoryValue: '',
      letter: '',
      isGuessed: false,
    };
  }

  chooseCategory = item => {
    this.setState({ categoryChosen: true });
    this.setState({ categoryValue: item });
  };

  guessLetter = letter => {
    this.setState({ letter });
    this.setState({ isGuessed: true });
  };

  render() {
    return (
      <div>
        <div className="container">
          <span className="col-md-12">Please choose category</span>
          {categories.map(item => (
            <button
              key={item.key}
              onClick={() => this.chooseCategory(item.value)}
              className="col-md-3 btn-info alphabet-letter"
            >
              {item.value}
            </button>
          ))}
          {this.state.categoryChosen ? (
            <div className="col-md-12">
              {alphabet.map(item => (
                <button
                  onClick={() => this.guessLetter(item)}
                  key={item}
                  className="btn-primary alphabet-letter"
                >
                  {item}
                </button>
              ))}
              <span>
                {this.state.categoryValue === 'cities' ? (
                  <div>
                    {this.state.isGuessed
                      ? city.find(
                          (a, ind) =>
                            isEqual(a, this.state.letter)
                              ? city.forEach(
                                  i =>
                                    i === a
                                      ? cityPlaceHolder.map(
                                          (item, index) =>
                                            index === ind
                                              ? cityPlaceHolder.splice(
                                                  index,
                                                  1,
                                                  a,
                                                )
                                              : null,
                                        )
                                      : null,
                                )
                              : null,
                        )
                      : null}
                    <span className="col-md-12 word-placeholder">
                      {cityPlaceHolder}
                    </span>
                  </div>
                ) : (
                  <div>
                    {this.state.isGuessed
                      ? animal.find(
                          (a, ind) =>
                            isEqual(a, this.state.letter)
                              ? animal.forEach(
                                  i =>
                                    i === a
                                      ? animalPlaceHolder.map(
                                          (item, index) =>
                                            index === ind
                                              ? animalPlaceHolder.splice(
                                                  index,
                                                  1,
                                                  a,
                                                )
                                              : null,
                                        )
                                      : null,
                                )
                              : null,
                        )
                      : null}
                    <span className="col-md-12 word-placeholder">
                      {animalPlaceHolder}
                    </span>
                  </div>
                )}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MainComponent;
