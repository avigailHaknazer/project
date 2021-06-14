export default function ViewUser(props) {
    const { user } = props
    return (
        <>
            <h2>hello</h2>
            <hr></hr>
            <h3>name: {user.fullName ? user.fullName : ""}</h3>
            <h3>my email is: {user.emailAddress ? user.emailAddress : ""}</h3>
        </>
    )
}