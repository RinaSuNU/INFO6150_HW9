import Card from 'react-bootstrap/Card';
import './ChildCard.css';

function ChildCard({ title, salary, image, skills, applyLink}) {
    return (
        <Card className="custom-card" style={{ width: '20rem', height:'500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '12px', overflow: 'auto'}}>
            <Card.Img variant="top" src={image} className="card-image" />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Header className="card-header">
                    {salary}
                </Card.Header>
                <Card.Text className="card-text">
                    {skills}
                </Card.Text>
                <Card.Link className="card-link">
                    {applyLink}
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default ChildCard;