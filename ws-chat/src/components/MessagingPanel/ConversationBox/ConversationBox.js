import React, {Component} from 'react'
import moment from 'moment'
import { VariableSizeList as List } from 'react-window';

import styles from './ConversationBox.module.scss'

function Message({data,index,style}){
  const reverseIndex=data.length- 1 -index

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
        const { messages }= this.props
        const height = 35
        const lettersOnRow = 80
        const getItemSize = index => {
          const reverseIndex=messages.length- 1 -index
         return Math.ceil(messages[reverseIndex].message.length/lettersOnRow)*height
        // return 55
      };
        return(
            <List
                height={500}
                itemCount={this.props.messages.length}
                itemSize={getItemSize}
                width='75vw'
                className={styles.conversationContainer}
                itemData={messages}
                ref={this.listRef}
             >
            {Message}
            </List>
        )
      }
}
