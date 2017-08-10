import { connect } from "react-redux";

const mapStateToProps = state => ({ comments: state.comments });

const mapDispatchToProps = dispatch => ({
  onReplyClick: id => {
    dispatch(startReply(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPanel);
