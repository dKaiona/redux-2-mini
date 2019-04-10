import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {reqArt} from './../../ducks/hackerNewsReducer'
import {connect} from 'react-redux'

class HackerNews extends Component {

  componentDidMount() {
    this.props.reqArt()
  }

  render() {
    console.log(this.props)
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  } 
}


function mapStateToProps(reduxStoreState) {
  return reduxStoreState.hackerNews
}
// this.props = {...this.props, ...reduxStoreState} add content from reduxStoreState to props
export default connect(mapStateToProps, {reqArt})(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}