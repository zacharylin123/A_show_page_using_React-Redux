import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        const { user } = this.props;
        // console.log(user);
        // console.log(typeof(this.props.fetchUser));
        // console.log(this.props);
        //console.log(this.state);
        if (!user) {
            return <div>Loading</div>
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.userPost.find( post => post.id === ownProps.userId) };
};

export default connect(
    mapStateToProps,
    { fetchUser }
)(UserHeader);
