import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    description: '',
    CommentList: [],
  }

  onNameInput = event => {
    this.setState({name: event.target.value})
  }

  onCommentInput = event => {
    this.setState({description: event.target.value})
  }

  onAddingComment = () => {
    const {name, description} = this.state
    if (name !== '' && description !== '') {
      const index = Math.floor(Math.random() * 7)
      const newComment = {
        id: Date.now(),
        name,
        description,
        backgroundColor: initialContainerBackgroundClassNames[index],
      }

      this.setState(prevState => ({
        CommentList: [...prevState.CommentList, newComment],
        name: '',
        description: '',
      }))
    }
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      CommentList: prevState.CommentList.filter(comment => comment.id !== id),
    }))
  }

  render() {
    const {name, description, CommentList} = this.state

    return (
      <div>
        <div className="card-container">
          <div className="card">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddingComment} className="cont">
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.onNameInput}
                value={name}
                className="name-input"
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onCommentInput}
                value={description}
              />
              <button type="submit" className="buttonStyling">
                Add Comment
              </button>
            </form>
          </div>
          <div className="card-secnd">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="imageStyling"
            />
          </div>
        </div>
        <hr className="horizontalLine" />

        <div className="bottom-card-container">
          <div>
            <div className="heading-Comment">
              <p className="countComments">{CommentList.length}</p>
              <p>Comments</p>
            </div>

            <div>
              <ul>
                {CommentList.map(eachItem => (
                  <CommentItem
                    key={eachItem.id}
                    commentDetails={eachItem}
                    onDeleteComment={this.onDeleteComment}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
