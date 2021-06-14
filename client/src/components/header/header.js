import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="row">
                <h3><Link to="/firstStage" className="col-2">firstStage</Link></h3>
                <h3><Link to="/secondStage" className="col-2">secondStage</Link></h3>
                <h3><Link to="/thirdStage" className="col-2">thirdStage</Link></h3>
            </div>
        </>
    )
}


