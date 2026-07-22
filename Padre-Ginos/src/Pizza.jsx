// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const Pizza = (props) => {
    return (
        <div className="pizza">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

export default Pizza;