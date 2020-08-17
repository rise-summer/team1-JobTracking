import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition,LoadComment,Header}from './style';
import Comments from '../mainfeed/components/comments'
class MainFeed extends Component {

    constructor(props){
      super(props);
      this.state = {
        list:[]
      }
    }

    render(){
      return (
        <Fragment>
          <Navigation/>
          <PostWrapper>
            <Header><span>Manage Posts</span><button>Create new post</button></Header>
            <Card type="inner" title="CREATE TITLE OF POST/UPDATE" extra={<a href="#">Delete</a>}>
              Here is where the user can update on their application status or talk about their experience.
              <Addition>
                <span className='time'>Time</span>
                <button className='position'>Position▼</button>
                <button className='status'>Status▼</button>
              </Addition>
              <ul>{
              this.state.list.map((item,index) => {
                return <li key={index}><Comments/></li>
              })
            }
            </ul>
            </Card>
            <LoadComment onClick={this.getMoreComments.bind(this)}>See the Comments</LoadComment>
            <Card style={{ marginTop: 30 }} type="inner" title="TITLE OF POST/UPDATE" extra={<a href="#">Delete</a>}>
              The user can talk about their experience here before being cut off 100 words, then it goes under the fold.
              <Addition>
                <span className='time'>Time</span>
                <button className='position'>Position▼</button>
                <button className='status'>Status▼</button>
              </Addition>
            </Card>
            <LoadComment><Comments/></LoadComment>
          </PostWrapper>
      </Fragment>
      )
    }
    getMoreComments(event){
      this.setState({
        list:[...this.state.list,1]
      })
    }
}
export default MainFeed;




