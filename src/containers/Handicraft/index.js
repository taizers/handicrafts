import { Handicraft } from "./Handicraft";
import { connect } from 'react-redux';
import { getPost } from "../../actions/posts";
import { selectPost } from "../../selectors/posts";

const mapStateToProps = (store) => {
    return {
        post: selectPost(store),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        getPost: (id) => dispath(getPost(id)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Handicraft);
