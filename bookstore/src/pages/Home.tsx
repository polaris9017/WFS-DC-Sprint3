import Title from "../components/common/Title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";

function Home() {
    return (
        <>
            <Title size="medium" color="background">
                Title
            </Title>
            <Button size='large' scheme='normal'>Button</Button>
            <InputText placeholder="Input Text"/>
            <div>Home Body!</div>
        </>
    );
}

export default Home;