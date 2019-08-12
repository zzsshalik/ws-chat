import React, {Component} from 'react'
import moment from 'moment'
import { FixedSizeList as List } from 'react-window';

import styles from './ConversationBox.module.scss'

function Message({data,index,style}){
  const reverseIndex=data.length- 1 -index
  // console.log('reversed: '+reverseIndex+'length: '+data.length+"normal: "+index)
   return( <div className={styles.conversationItem} style={style} >
        {data[reverseIndex].from}:{data[reverseIndex].message}{moment.unix(data[reverseIndex].time/1000).format("DD MMM h:mm:ss")}
    </div>
   )
};

export default class ConversationBox extends Component{
  listRef = React.createRef()
  componentDidUpdate(){
    this.listRef.current.scrollToItem(this.props.messages.length);
  }
      render(){
        return(
            <List
                height={500}
                itemCount={this.props.messages.length}
                itemSize={35}
                width='75vw'
                className={styles.conversationContainer}
                itemData={this.props.messages}
                ref={this.listRef}
             >
            {Message}
            </List>
        )
      }
}
