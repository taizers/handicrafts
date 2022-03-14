import { UsersModeration } from "./UsersModeration";
import { connect } from 'react-redux';
import {createUser, deleteUser, getUsers, setCreateModalVisible} from '../../actions/auth';
import {selectCreateUserModalIsVisible, selectToken, selectUserRole, selectUsers} from "../../selectors/auth";

const mapDispathToProps = (dispath) => {
    return {
        getUsers: () => dispath(getUsers()),
        deleteUser: (id) => dispath(deleteUser(id)),
        setVisible: (value) => dispath(setCreateModalVisible(value)),
        createUser: (data) => dispath(createUser(data)),
    }
};

const mapStateToProps = (store) => {
    return {
        users: selectUsers(store),
        role: selectUserRole(store),
        isVisible: selectCreateUserModalIsVisible(store),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(UsersModeration);