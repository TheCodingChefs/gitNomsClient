import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
const directions = props.directions.split('*');

const recipe = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.cuisineType}</Card.Subtitle>
            <Card.Text>
                <ul>
                   {props.ingredients.map((ingredient) => {
                       return(
                           <li className="ingredient">{ingredient}</li>
                       )
                   })} 
                </ul>
                <ul>
                    {directions.map((direction) => {
                        return(
                            <li className="direction">{direction}</li>
                        )
                    })}
                </ul>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    );
};

export default recipe;