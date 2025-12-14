function UsersCards({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.picture.medium}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Age: {user.dob.age}</p>
      <p>
        Location: {user.location.city}, {user.location.country}
      </p>
    </div>
  );
}

export default UsersCards;