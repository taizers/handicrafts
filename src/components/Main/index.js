import { Main } from "./Main";
import { connect } from 'react-redux';
import { selectIsMainPageLoading } from '../../selectors/main';

const mapStateToProps = (store) => {
    return {
        loading: selectIsMainPageLoading(store),
    };
};

export default connect(mapStateToProps)(Main);