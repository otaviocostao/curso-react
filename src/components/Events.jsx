const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h3>if true: Renderizo isso</h3>
        }else{
            return <h3>if false: Renderizo isso</h3>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui tambem!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};

export default Events;