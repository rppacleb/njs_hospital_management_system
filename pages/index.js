import Main from "@src/modules/Main";

// name the page according to its purpose
const MainPage = ({ data }) => <Main />;
export default MainPage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
