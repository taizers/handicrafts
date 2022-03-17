import { Profile } from "./Profile";
import { connect } from 'react-redux';
import {
    selectAuthModalIsVisible,
    selectAuthModalIsLoading,
    selectToken,
    selectUserProfile,
    selectUserId
} from '../../selectors/auth';
import { changeProfile, getUserProfile, setCreateModalVisible } from "../../actions/auth";

const mapStateToProps = (store) => {
    return {
        user: selectUserProfile(store),
        authUserId: selectUserId(store),
        token: selectToken(store),
        isVisible: selectAuthModalIsVisible(store),
        isLoading: selectAuthModalIsLoading(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getUserProfile: (id, token) => dispath(getUserProfile(id, token)),
        setVisible: (data) => dispath(setCreateModalVisible(data)),
        changeProfile: (data) => dispath(changeProfile(data)),
    }
};


export default connect(mapStateToProps, mapDispathToProps)(Profile);
