import Image from "next/image";

// Each card usues employee data with consistent layout
const Card = ({ employee }) => {
  return (
    <div className="card">
      <Image
        src={employee.photoUrl}
        alt={`${employee.name}'s profile`}
        width={100}
        height={100}
      />
      <strong><h3>{employee.name} - {employee.role}</h3></strong>
      <p>{employee.bio}</p>
      <p>
        <a href={`mailto:${employee.email}`} className="email">
          <strong>{employee.email}</strong>
        </a>
      </p>
    </div>
  );
};

export default Card;