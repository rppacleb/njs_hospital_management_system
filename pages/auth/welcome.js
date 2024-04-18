import Welcome from "@src/modules/auth/welcome";

// name the page according to its purpose
const WelcomePage = ({ data }) => <Welcome />;
export default WelcomePage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
