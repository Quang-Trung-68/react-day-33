export default function Login() {
  return (
    <>
      <h1>Login page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input required id="username" type="text" name="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input required id="password" type="password" name="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
