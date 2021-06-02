import React,{useCallback, useEffect, useRef, useState} from 'react'
import Button from './Button'
import ToDoList from './ToDoList'
import '../css/HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

function HomePage() {
    const [inputValue, setInPutValue]= useState("")
    const [posts, setPosts] =useState([])

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    const changeHandler =(e)=>{
        setInPutValue(e.target.value)
    }

    const addPost= useCallback(()=>{
        if(inputValue!==""){
            setPosts((oldposts)=>{
                return [...oldposts, inputValue]
            })
    
            setInPutValue("")
        }
    }, [inputValue])

    const deletePost= useCallback((id)=>{
        setPosts(oldPosts=>{
            return oldPosts.filter((arrElem, index)=>{
                return index !== id
            })
        })
    }, [])

    return(
        <div className="container">
            <div className="title">
                <h2>LIST OF TASK TO BE DONE</h2>
            </div>
            <div className="header">
                <input type="text" ref={inputRef} onChange={changeHandler} value={inputValue} placeholder="Add task in list"/>
                <Button onSelect={addPost}><FontAwesomeIcon icon={faLayerGroup} size="2x"/>
                <i class="fas fa-layer-plus"></i>
                </Button>
                
            </div>
            <div className="body">
                <ToDoList posts={posts} deletePost={deletePost}/>
            </div>
        </div>
    )
}

export default HomePage