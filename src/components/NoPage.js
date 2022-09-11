import "../styles/scss/NoPage.scss";
import NotFound from "../assets/image/NotFound.jpg";

const NoPage = () => {
    return (
        <div className="not-found">
            <div><img src={NotFound} width="150px" height="200px" alt="Not exist website"></img></div>
            <div><h3>This site does not exist</h3></div>
        </div>
    )
}

export default NoPage;