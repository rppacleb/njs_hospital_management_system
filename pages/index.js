import Main from "@src/modules/main";

// name the page according to its purpose
const MainPage = ({ __LOCALSESSION }) => (
  <Main __LOCALSESSION={__LOCALSESSION} />
);
export default MainPage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
