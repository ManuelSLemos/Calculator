import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addArticle } from '../../store/actions/index';

import Calculator from '../../components/Calculator/Calculator';

import './Home.css';

class Home extends Component {
    constructor(props){
        super(props)
        // this.props.articles
        // this.props.addArticle(article)
    }

    componentDidMount(){
        console.log(this.props.articles);
        this.props.addArticle({ id: 2, name: 'Python + IA'});
    }

    render(){
        return(
            <div className="app">
                <Calculator />
            </div>
        )
    }
}

// state == store
const mapStateToProps = state => {
    return { articles: state.articles }
} 

// dispatch == action
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArticle(article)),
    }
}

// connect (mapStateToProps) (this)
export default connect(mapStateToProps, mapDispatchToProps)(Home);