import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Userman = () => {
  const [userlist, setuserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setuserList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="loun">
      <div className="card-lwin">
        {userlist.map((e) => (
          <Card className="mimou">
            <Card.Body className="boudi">
              <Card.Title>{e.name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {e.username}
              </Card.Subtitle>
              <Card.Text>
                Adresse : {e.address.street} / {e.address.city}
              </Card.Text>
              <Card.Link href="#">{e.email}</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Userman;
