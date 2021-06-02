import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from './Button'

function ToDoList(props){
    const {posts, deletePost} =props
    return(
        <React.Fragment>
            <table>
                <tr>
                    <th>Remove Task</th>
                    <th>List of Tasks</th>
                    
                </tr>
                {
                    posts.map((post, index)=>
                        <tr>
                            <td>
                            <Button onSelect={()=>{
                                        deletePost(index)
                                    }}>
                                    <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                                </Button>
                            </td>
                            <td>
                                {post}
                            </td>
                        </tr>
                            
                        )
                }


            </table>
        </React.Fragment>
    )
}

export default ToDoList