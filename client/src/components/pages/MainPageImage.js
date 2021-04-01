
import Card from 'react-bootstrap/Card'

const MainPageImage = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title><h3>{props.header}</h3></Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )

}
export { MainPageImage };