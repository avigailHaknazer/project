import { connect } from "react-redux"

function UserDetails(props) {
    const user=props.currentUser

    return (
        <>
            <h2>hello</h2>
            <hr></hr>
            <h3>my name is: {user.fullName ? user.fullName : ""}</h3>
            <h3>my age is: {user.age ? user.age : ""}</h3>
            <h3>i live in: {user.cityName ? user.cityName : ""}</h3>
            <h3>my email is: {user.emailAddress ? user.emailAddress : ""}</h3>
            <h3>my phone is: {user.phoneNumber ? user.phoneNumber : ""}</h3>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
       currentUser:state.currentUser
    }
}

export default connect(()=>mapStateToProps)(UserDetails)