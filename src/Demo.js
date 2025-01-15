function Demo(props) {
    return (
        <div>
            {/* <h1>{props.name}</h1>
            <h2>{props.email}</h2> */}

            <h1>Pass function as Props</h1>

            <button onClick={props.data}>Update</button>
        </div>
    )
}

export default Demo;