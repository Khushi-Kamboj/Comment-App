import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  state = {
    isLiked: false,
  }

  toggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }))
  }

  onDelete = () => {
    const {commentDetails, onDeleteComment} = this.props
    onDeleteComment(commentDetails.id)
  }

  render() {
    const {isLiked} = this.state
    const {commentDetails} = this.props
    const {name, description, backgroundColor} = commentDetails
    const initial = name[0].toUpperCase()

    return (
      <li className="list-comments">
        <div className="upper-container">
          <p className={`initial ${backgroundColor}`}>{initial}</p>
          <h1>{name}</h1>
          <p className="dateOf">{formatDistanceToNow(new Date())}</p>
        </div>
        <p className="comment-Sty">{description}</p>
        <div className="bottom-container">
          <button type="button" onClick={this.toggleLike} className="btn">
            <img
              src={
                isLiked
                  ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
              }
              alt="Like"
              onClick={this.toggleLike}
              style={{cursor: 'pointer'}}
            />
          </button>

          <button
            type="button"
            data-testid="delete"
            className="btn"
            onClick={this.onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr className="horizontalLine" />
      </li>
    )
  }
}

export default CommentItem
