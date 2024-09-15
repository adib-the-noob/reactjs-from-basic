
const Hero = (props) => {
    return (
        <div>
            <ul>
                <li>Name : {props.personInfo["name"]} </li>
                <li>Age : {props.personInfo["age"]}</li>
                <li>Address:</li>
                <li>City: {props.personInfo["address"]["city"]}</li>
                <li>Country : {props.personInfo["address"]["country"]}</li>
            </ul>
        </div>
        );
};

export default Hero;