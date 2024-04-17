import dynamic from "next/dynamic";

const Main = dynamic(() => import("@src/modules/main"), {
  ssr: false,
});

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
