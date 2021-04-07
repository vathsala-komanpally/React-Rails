import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import React,{useState, useEffect} from 'react'
const MenuButtons = (props) => {
    const [text, setText]=useState("");
    useEffect(()=>{
        setText(props.text);
    },[]);
    
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {text}
        </Tooltip>
      );

    const handleMenuClick = (e) =>{
        console.log(e.target.value);
        props.menuOfButtonClicked(e.target.value);
      }
    return (
        <Card>
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={props.image}/>
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 300, hide: 400 }}
                    overlay={renderTooltip}> 
                    <Button variant="secondary" value={props.buttonText} onClick={handleMenuClick}>{props.buttonText}</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>

    );
}
export { MenuButtons };