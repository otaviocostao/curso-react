const Challenge = () =>{

    let val1 = 10;

    let val2 = 25;

    const somarValores = () => {
        console.log( val1 + val2);
    }

    return (

        <div>
            <h3>Prmeiro valor: {val1}</h3>
            <h3>Segundo valor: {val2}</h3>

            <button onClick={somarValores}>Somar os valores!</button>
        </div>

    )

}

export default Challenge;