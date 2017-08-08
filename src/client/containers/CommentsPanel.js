import {connect} from "react-redux";

const mapStateToProps = state => {
  return { comments: state.comments};
}

const mapDispatchToProps = dispatch => {
  return {
    onReplyClick: id => {
      dispatch(startReply(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPanel);