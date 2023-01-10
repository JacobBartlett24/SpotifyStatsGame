import Main from './Main';
import Header from './Header';

const LandingPage = (props) =>{
    return(
        <>
            <Header />
            <Main token={props.token}/>
        </>
    )
}

export default LandingPage;