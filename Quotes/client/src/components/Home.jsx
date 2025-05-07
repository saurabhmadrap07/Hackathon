import React from 'react'
import {Link} from "react-router"
export default function Home() {
  return (
    <div>
      <h1>Online Book Shop - Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempora est quia quibusdam libero saepe ipsam, labore maxime distinctio dolorum nobis illo eum? Velit quo provident a dolorem. Possimus et excepturi beatae recusandae nulla officiis nesciunt eligendi, explicabo magnam quam debitis quis esse, illo architecto, harum doloremque nostrum amet natus voluptates repellat nihil blanditiis facilis. Qui fugiat iusto a sequi eius, dolore voluptatem deserunt quae dicta ducimus eum dolores provident ut aspernatur voluptates error repellendus expedita architecto magnam doloribus delectus dolorem! Corporis nostrum nam adipisci, unde at optio error sed facilis esse quaerat. Sint non quo autem, iste ex veniam.
      </p>
      <Link className="btn btn-primary" to="/login">Loin Here</Link>
    </div>
  )
}
