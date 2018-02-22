import React, { Component } from 'react'
import './mainComponent.css'

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = [
    {key: 1, value: 'cities'},
    {key: 2, value: 'animals'},
    ];

const city = ['r', 'i', 'g', 'a'];
const cityPlaceHolder = ['_', '_', '_', '_'];
const animal = ['D', 'O', 'G', 'G', 'O'];
let arr = [];

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            categoryChosen: false,
            categoryValue: '',
            letter: '',
            isGuessed: false,
        }
    }

    chooseCategory = (item) => {
      this.setState({ categoryChosen: true });
      this.setState({ categoryValue: item });
    };

    guessLetter = (letter) => {
        this.setState({ letter });
        this.setState({ isGuessed: true });
        console.log(letter)
    };

    isEqual = (a, b) => a === b;

    render() {
        return (
            <div>
                <div className="container">
                    <span className="col-md-12">Please choose category</span>
                    {categories.map(item => <button key={item.key} onClick={() => this.chooseCategory(item.value)} className="col-md-3 btn-info alphabet-letter">{item.value}</button>)}
                    {this.state.categoryChosen ?
                        <div className="col-md-12">
                            {alphabet.map(item => <button onClick={() => this.guessLetter(item)} key={item} className="btn-primary alphabet-letter">{item}</button>)}
                            <span>{this.state.categoryValue === 'cities' ?
                                <div>{this.state.isGuessed ? city.find((a, ind) => this.isEqual(a, this.state.letter) ? city.forEach(i => i === a ? cityPlaceHolder.map((item,index) => index === ind ? arr = cityPlaceHolder.splice(index, 1, a) : console.log('nope')) : console.log(1234)) : console.log(222)) : cityPlaceHolder}</div>
                                : animal}</span>
                            <span>{cityPlaceHolder}</span>
                        </div>
                        : null }
                </div>

            </div>
        )
    }
}

export default MainComponent;