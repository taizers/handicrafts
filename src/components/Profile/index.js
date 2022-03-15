import { Profile } from "./Profile";
import { connect } from 'react-redux';
import {
    selectAuthModalIsVisible,
    selectAuthModalIsLoading,
    selectToken,
    selectUserProfile,
    selectUserId
} from '../../selectors/auth';
import { changeProfile, getUserProfile, setAuthModalVisible } from "../../actions/auth";

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
        setVisible: (data) => dispath(setAuthModalVisible(data)),
        changeProfile: (data) => dispath(changeProfile(data)),
    }
};


export default connect(mapStateToProps, mapDispathToProps)(Profile);
