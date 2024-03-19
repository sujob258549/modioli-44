
import PropTypes from 'prop-types';
const LiNave = ({routes}) => {
    return (
        <div>
            <li key={routes.id} className=" rounded-[10px] px-8 py-2 mb-1 duration-300 hover:bg-yellow-300"> {routes.brand} </li>
                    
        </div>
    );
};
LiNave.propTypes ={
    routes:PropTypes.object
}
export default LiNave;