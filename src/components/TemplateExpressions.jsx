const TemplateExpressions = () => {

    const name = "Otavio";
    const data = {
        age: 20,
        job: "vendedor",
    }

    return (

        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>Você atua como {data.job}</p>
        </div>

    );
};

export default TemplateExpressions;