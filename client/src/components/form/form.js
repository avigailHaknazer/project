import { useRef, useState } from "react"
import { connect } from "react-redux"
import {saveData} from '../../redux/actions'

function Form(props) {
    const refToName = useRef("")
    const refToAge = useRef("")
    const refToCity = useRef("")
    const refToEmail = useRef("")
    const refToPhone = useRef("")

    const [data, setData] = useState({})

    const saveCurrentUser=()=>{
        
    }

    const saveFormData = () => {
        setData({
            fullName: refToName.current.value,
            age: refToAge.current.value,
            cityName: refToCity.current.value,
            emailAddress: refToEmail.current.value,
            phoneNumber: refToPhone.current.value,
        })
        saveCurrentUser()
        props.saveData(data)
    }

    return (
        <>
            {/* <form id="formData"> */}
            <div className="form-group row" >
                <label>full name: </label>
                <input ref={refToName} className="form-control col-4"></input>
                <label>age: </label>
                <input ref={refToAge} className="form-control col-4"></input>
                <label>city name: </label>
                <input ref={refToCity} className="form-control col-4"></input>
                <label>email address: </label>
                <input ref={refToEmail} className="form-control col-4"></input>
                <label>phone number: </label>
                <input ref={refToPhone} className="form-control col-4"></input>
            </div>
            <button onClick={saveFormData} className="btn btn-dark col-4">submit</button>
            {/* </form> */}
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
       users:state.users
    }
}

const mapDispatch=(dispatch)=>{
    return{
        saveData:(data)=>dispatch(saveData(data))
    }
}
export default connect(()=>mapStateToProps,mapDispatch)(Form)