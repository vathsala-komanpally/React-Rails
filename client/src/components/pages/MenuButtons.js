import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const MenuButtons=(props)=>{
    return (
            <Card>
            <Card.Body>
                <Card.Title><h3>{props.header}</h3></Card.Title>
                <Button variant="secondary">{props.buttonText}</Button>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}
export {MenuButtons};