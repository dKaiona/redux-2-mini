import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {reqArt} from './../../ducks/mediumReducer'
import {connect} from 'react-redux'

class Medium extends Component {
 
  componentDidMount() {
    this.props.reqArt()
  }
  
  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}
function mapStateToProps(reduxStoreState) {
  return reduxStoreState.medium
}

export default connect(mapStateToProps, {reqArt})(Medium);

const styles = {
  logo: { width: '250px' }
}