import Login from "@src/modules/auth/login";

// name the page according to its purpose
const LoginPage = ({ data }) => <Login />;
export default LoginPage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
