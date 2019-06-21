import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
    render() {
        // let user = this.props
        const { user } = this.props;
        if (!user) {
            return <div>Loading</div>;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.userPost.find(post => post.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
