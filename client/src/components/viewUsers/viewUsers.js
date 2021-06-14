import { connect } from 'react-redux'
import { getAllData } from '../../redux/actions'
import ViewUser from '../viewUser/viewUser'
import { useEffect } from 'react'

function ViewUsers(props) {
    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(props.users)}
            {
                props.users.map((user) =>
                    <ViewUser user={user}></ViewUser>
                )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllData: () => dispatch(getAllData())
    }
}

export default connect(() => mapStateToProps, mapDispatchToProps)(ViewUsers)